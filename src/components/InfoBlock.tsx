'use client';

import { motion } from 'framer-motion';
import { InfoBlock as InfoBlockType } from '@/lib/types';

const ICONS: Record<InfoBlockType['type'], string> = {
  warning: '⚠️',
  tip: '💡',
  time: '⏰',
};

const BORDER_COLORS: Record<InfoBlockType['type'], string> = {
  warning: 'border-l-food',
  tip: 'border-l-gold',
  time: 'border-l-ferry',
};

interface Props {
  block: InfoBlockType;
}

export default function InfoBlock({ block }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`
        border-l-2 ${BORDER_COLORS[block.type]}
        bg-white/[0.03] rounded-r-lg
        px-4 py-3 text-sm text-muted leading-relaxed
      `}
    >
      <span className="mr-2">{ICONS[block.type]}</span>
      {block.text}
    </motion.div>
  );
}
