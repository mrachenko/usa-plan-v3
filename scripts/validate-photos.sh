#!/bin/bash
# Validate all stop photos: check for missing files, broken downloads, and duplicates
# Run: bash scripts/validate-photos.sh

IMAGES_DIR="public/images"
ERRORS=0

echo "=== Checking referenced photos ==="
# Extract all image filenames from day data files
for f in src/data/days/day*.ts; do
  grep -oP "image:\s*'([^']+)'" "$f" | grep -oP "'[^']+'" | tr -d "'" | while read img; do
    path="$IMAGES_DIR/$img"
    if [ ! -f "$path" ]; then
      echo "MISSING: $img (referenced in $(basename $f))"
      ERRORS=$((ERRORS+1))
    elif [ $(stat -c%s "$path") -lt 1000 ]; then
      echo "BROKEN: $img — only $(stat -c%s "$path") bytes (referenced in $(basename $f))"
      ERRORS=$((ERRORS+1))
    fi
  done
done

echo ""
echo "=== Checking for duplicates ==="
cd "$IMAGES_DIR"
dupes=$(md5sum *.jpg 2>/dev/null | sort | awk '{print $1}' | uniq -d)
if [ -z "$dupes" ]; then
  echo "OK: no duplicates"
else
  echo "$dupes" | while read hash; do
    echo "DUPLICATE:"
    md5sum *.jpg | grep "$hash" | awk '{print "  " $2}'
  done
  ERRORS=$((ERRORS+1))
fi

echo ""
total=$(ls *.jpg 2>/dev/null | wc -l)
unique=$(md5sum *.jpg 2>/dev/null | awk '{print $1}' | sort -u | wc -l)
echo "=== Summary: $total files, $unique unique ==="

if [ $ERRORS -gt 0 ]; then
  echo "PROBLEMS FOUND"
  exit 1
else
  echo "ALL OK"
fi
