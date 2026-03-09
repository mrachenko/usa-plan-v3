'use client';

import { motion } from 'framer-motion';
import { Stop, STOP_COLORS } from '@/lib/types';

interface Props {
  stops: Stop[];
  onStopClick?: (index: number) => void;
  activeStop?: number | null;
}

export default function ScheduleTable({ stops, onStopClick, activeStop }: Props) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-white/10 text-muted-dark text-xs uppercase tracking-wider">
            <th className="py-3 px-3 text-left w-16">Время</th>
            <th className="py-3 px-3 text-left">Что</th>
            <th className="py-3 px-3 text-left hidden md:table-cell">Детали</th>
            <th className="py-3 px-3 text-right w-24">Цена</th>
          </tr>
        </thead>
        <tbody>
          {stops.map((stop, i) => (
            <motion.tr
              key={stop.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              onClick={() => onStopClick?.(i)}
              className={`
                border-b border-white/5 cursor-pointer transition-colors duration-200
                ${activeStop === i ? 'bg-white/5' : 'hover:bg-white/[0.03]'}
              `}
            >
              <td className="py-3 px-3 text-muted-dark font-light text-xs tracking-wide">
                {stop.time}
              </td>
              <td className="py-3 px-3">
                <div className="flex items-center gap-2">
                  <span
                    className="w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold text-bg flex-shrink-0"
                    style={{ backgroundColor: STOP_COLORS[stop.type] }}
                  >
                    {stop.num.length <= 2 ? stop.num : '★'}
                  </span>
                  <span className="font-medium">{stop.title}</span>
                </div>
              </td>
              <td className="py-3 px-3 text-muted text-xs hidden md:table-cell max-w-md">
                {stop.desc}
              </td>
              <td className="py-3 px-3 text-right text-muted-dark text-xs">
                {stop.price}
              </td>
            </motion.tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
