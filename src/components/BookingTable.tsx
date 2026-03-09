'use client';

import { motion } from 'framer-motion';
import { bookings, BookingStatus } from '@/data/bookings';

const STATUS_STYLES: Record<BookingStatus, { bg: string; text: string }> = {
  'Обязательно': { bg: 'rgba(255,80,80,0.15)', text: '#ff6b6b' },
  'Рекомендуется': { bg: 'rgba(232,200,122,0.15)', text: '#e8c87a' },
};

export default function BookingTable() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6 }}
    >
      <div className="mb-6">
        <h3 className="font-display text-2xl md:text-3xl font-bold mb-2">
          Что бронировать <span className="text-gold">заранее</span>
        </h3>
        <p className="text-muted text-sm">
          Чек-лист бронирований с рекомендуемыми сроками
        </p>
      </div>

      <div className="bg-white/[0.02] border border-white/5 rounded-none md:rounded-xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-white/10 text-muted-dark text-xs uppercase tracking-wider">
                <th className="py-3 px-3 text-left">Что</th>
                <th className="py-3 px-3 text-left whitespace-nowrap">Когда</th>
                <th className="py-3 px-3 text-left">Статус</th>
                <th className="py-3 px-3 text-left hidden md:table-cell">Примечание</th>
              </tr>
            </thead>
            <tbody>
              {bookings.map((booking, i) => (
                <motion.tr
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.04 }}
                  className="border-b border-white/5 hover:bg-white/[0.03] transition-colors duration-200"
                >
                  <td className="py-3 px-3 font-medium">
                    {booking.item}
                    {booking.note && (
                      <span className="block md:hidden text-xs text-muted-dark mt-1">
                        {booking.note}
                      </span>
                    )}
                  </td>
                  <td className="py-3 px-3 text-muted text-xs whitespace-nowrap">
                    {booking.when}
                  </td>
                  <td className="py-3 px-3">
                    <span
                      className="inline-block text-xs font-medium px-2.5 py-1 rounded-full whitespace-nowrap"
                      style={{
                        backgroundColor: STATUS_STYLES[booking.status].bg,
                        color: STATUS_STYLES[booking.status].text,
                      }}
                    >
                      {booking.status}
                    </span>
                  </td>
                  <td className="py-3 px-3 text-muted-dark text-xs hidden md:table-cell max-w-xs">
                    {booking.note || '—'}
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </motion.div>
  );
}
