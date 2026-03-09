'use client';

import { motion } from 'framer-motion';

interface Hotel {
  name: string;
  dates: string;
  nights: number;
  pricePerNight: string;
  total: string;
  url?: string;
  note?: string;
}

interface Props {
  hotels: Hotel[];
  regionColor: string;
}

export default function HotelTable({ hotels, regionColor }: Props) {
  return (
    <div className="bg-white/[0.02] border border-white/5 rounded-none md:rounded-xl overflow-hidden">
      {/* Header */}
      <div className="flex items-center gap-3 px-4 py-3 border-b border-white/10">
        <div
          className="w-1 h-6 rounded-full"
          style={{ backgroundColor: regionColor }}
        />
        <h3 className="text-xs tracking-[0.2em] uppercase text-muted-dark font-light">
          Где жить
        </h3>
      </div>

      {/* Desktop table */}
      <div className="hidden md:block overflow-x-auto">
        <table className="w-full text-sm md:table-fixed">
          <colgroup>
            <col className="md:w-[22%]" />
            <col className="md:w-[18%]" />
            <col className="md:w-[8%]" />
            <col className="md:w-[12%]" />
            <col className="md:w-[10%]" />
            <col />
          </colgroup>
          <thead>
            <tr className="border-b border-white/10 text-muted-dark text-xs uppercase tracking-wider">
              <th className="py-3 px-3 text-left">Отель</th>
              <th className="py-3 px-3 text-left">Даты</th>
              <th className="py-3 px-3 text-center">Ночей</th>
              <th className="py-3 px-3 text-right">За ночь</th>
              <th className="py-3 px-3 text-right">Итого</th>
              <th className="py-3 px-3 text-left">Заметка</th>
            </tr>
          </thead>
          <tbody>
            {hotels.map((hotel, i) => (
              <motion.tr
                key={hotel.name}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="border-b border-white/5 transition-colors duration-200 hover:bg-white/[0.03]"
              >
                <td className="py-3 px-3">
                  <div className="flex items-center gap-2">
                    <span
                      className="w-2 h-2 rounded-full flex-shrink-0"
                      style={{ backgroundColor: regionColor }}
                    />
                    {hotel.url ? (
                      <a
                        href={hotel.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-medium hover:underline underline-offset-2"
                        style={{ color: regionColor }}
                      >
                        {hotel.name}
                      </a>
                    ) : (
                      <span className="font-medium">{hotel.name}</span>
                    )}
                  </div>
                </td>
                <td className="py-3 px-3 text-muted-dark text-xs tracking-wide whitespace-nowrap">
                  {hotel.dates}
                </td>
                <td className="py-3 px-3 text-center text-muted-dark text-xs">
                  {hotel.nights}
                </td>
                <td className="py-3 px-3 text-right text-muted-dark text-xs whitespace-nowrap">
                  {hotel.pricePerNight}
                </td>
                <td className="py-3 px-3 text-right text-xs font-medium whitespace-nowrap" style={{ color: regionColor }}>
                  {hotel.total}
                </td>
                <td className="py-3 px-3 text-muted text-xs">
                  {hotel.note}
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile card layout */}
      <div className="md:hidden divide-y divide-white/5">
        {hotels.map((hotel, i) => (
          <motion.div
            key={hotel.name}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            className="p-4 transition-colors duration-200 active:bg-white/[0.03]"
          >
            {/* Hotel name */}
            <div className="flex items-center gap-2 mb-2">
              <span
                className="w-2 h-2 rounded-full flex-shrink-0"
                style={{ backgroundColor: regionColor }}
              />
              {hotel.url ? (
                <a
                  href={hotel.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-sm hover:underline underline-offset-2"
                  style={{ color: regionColor }}
                >
                  {hotel.name}
                </a>
              ) : (
                <span className="font-medium text-sm">{hotel.name}</span>
              )}
            </div>

            {/* Details row */}
            <div className="flex items-center gap-3 text-xs text-muted-dark mb-1.5 pl-4">
              <span>{hotel.dates}</span>
              <span className="text-white/20">·</span>
              <span>{hotel.nights} {hotel.nights === 1 ? 'ночь' : hotel.nights < 5 ? 'ночи' : 'ночей'}</span>
            </div>

            {/* Price row */}
            <div className="flex items-center gap-3 text-xs pl-4 mb-1.5">
              <span className="text-muted-dark">{hotel.pricePerNight}/ночь</span>
              <span className="text-white/20">·</span>
              <span className="font-medium" style={{ color: regionColor }}>
                {hotel.total}
              </span>
            </div>

            {/* Note */}
            {hotel.note && (
              <p className="text-xs text-muted pl-4 leading-relaxed">
                {hotel.note}
              </p>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
}
