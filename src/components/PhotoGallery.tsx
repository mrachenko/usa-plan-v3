'use client';

import { useRef, useEffect, useState } from 'react';

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

interface Props {
  images: string[];
}

export default function PhotoGallery({ images }: Props) {
  if (images.length === 0) return null;

  const scrollRef = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);
  const speed = 0.5; // px per frame

  useEffect(() => {
    let raf: number;
    let current = 0;

    const animate = () => {
      current += speed;
      const el = scrollRef.current;
      if (el) {
        // Half width = one set of images
        const halfWidth = el.scrollWidth / 2;
        if (current >= halfWidth) {
          current -= halfWidth;
        }
        el.style.transform = `translateX(-${current}px)`;
      }
      raf = requestAnimationFrame(animate);
    };

    raf = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(raf);
  }, []);

  // Triple the images for seamless wrapping
  const allImages = [...images, ...images, ...images];

  return (
    <div className="overflow-hidden mb-8 -mx-4 md:mx-0">
      <div
        ref={scrollRef}
        className="flex gap-3 w-max will-change-transform"
      >
        {allImages.map((img, i) => (
          <div
            key={`${img}-${i}`}
            className="w-[260px] md:w-[320px] h-[160px] md:h-[200px] flex-shrink-0 overflow-hidden"
          >
            <img
              src={`${basePath}/images/${img}`}
              alt=""
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
