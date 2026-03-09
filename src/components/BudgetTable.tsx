'use client';

import { motion } from 'framer-motion';
import { budgetItems, budgetTotal } from '@/data/budget';

export default function BudgetTable() {
  const maxAmount = Math.max(...budgetItems.map((b) => b.amount));

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6 }}
    >
      <div className="mb-6">
        <h3 className="font-display text-2xl md:text-3xl font-bold mb-2">
          Бюджет <span className="text-gold">поездки</span>
        </h3>
        <p className="text-muted text-sm">
          Ориентировочные расходы на двоих
        </p>
      </div>

      <div className="bg-white/[0.02] border border-white/5 rounded-none md:rounded-xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-white/10 text-muted-dark text-xs uppercase tracking-wider">
                <th className="py-3 px-3 text-left">Категория</th>
                <th className="py-3 px-3 text-left hidden md:table-cell">Распределение</th>
                <th className="py-3 px-3 text-right whitespace-nowrap">Сумма</th>
                <th className="py-3 px-3 text-left hidden md:table-cell">Примечание</th>
              </tr>
            </thead>
            <tbody>
              {budgetItems.map((item, i) => {
                const barWidth = (item.amount / maxAmount) * 100;
                return (
                  <motion.tr
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.06 }}
                    className="border-b border-white/5 hover:bg-white/[0.03] transition-colors duration-200"
                  >
                    <td className="py-3 px-3 font-medium whitespace-nowrap">
                      {item.category}
                      <span className="block md:hidden text-xs text-muted-dark mt-1">
                        {item.note}
                      </span>
                    </td>
                    <td className="py-3 px-3 hidden md:table-cell">
                      <div className="w-full max-w-[200px] h-2 bg-white/5 rounded-full overflow-hidden">
                        <motion.div
                          className="h-full rounded-full"
                          style={{ backgroundColor: '#e8c87a' }}
                          initial={{ width: 0 }}
                          whileInView={{ width: `${barWidth}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.8, delay: i * 0.06 + 0.3 }}
                        />
                      </div>
                    </td>
                    <td className="py-3 px-3 text-right text-gold font-medium whitespace-nowrap tabular-nums">
                      ~${item.amount.toLocaleString('en-US')}
                    </td>
                    <td className="py-3 px-3 text-muted-dark text-xs hidden md:table-cell max-w-xs">
                      {item.note}
                    </td>
                  </motion.tr>
                );
              })}

              {/* Total row */}
              <motion.tr
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="bg-white/[0.04] border-t border-gold/20"
              >
                <td className="py-4 px-3 font-display font-bold text-base">
                  {budgetTotal.category}
                </td>
                <td className="py-4 px-3 hidden md:table-cell" />
                <td className="py-4 px-3 text-right text-gold font-display font-bold text-base whitespace-nowrap tabular-nums">
                  ~${budgetTotal.amount.toLocaleString('en-US')}
                </td>
                <td className="py-4 px-3 hidden md:table-cell text-muted-dark text-xs">
                  на двоих, ~20 дней
                </td>
              </motion.tr>
            </tbody>
          </table>
        </div>
      </div>
    </motion.div>
  );
}
