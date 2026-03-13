export interface BudgetItem {
  category: string;
  amount: number;
  note: string;
  isTotal?: boolean;
}

export const budgetItems: BudgetItem[] = [
  {
    category: 'Авиабилеты',
    amount: 3800,
    note: 'EVN→JFK + LAX→EVN (141т₽ ✓) + KRR↔EVN (61т₽ ✓) + EWR→LAS United (56т₽ ✓) + LAX↔OGG Hawaiian+AA ($1,300) — на двоих',
  },
  {
    category: 'Отели (20 ночей)',
    amount: 5200,
    note: 'NYC 5н + Вегас 2н + парки 3н + LA 4н (~$250/н) + Мауи 6н Papakea ($2,140)',
  },
  {
    category: 'Аренда авто + бензин',
    amount: 1500,
    note: 'Mini Countryman Вегас→LA $717 ✓ + RAV4 Мауи Sixt $586 + бензин ~$200',
  },
  {
    category: 'Еда и рестораны',
    amount: 5000,
    note: '~$250/день на двоих с напитками, tax и tip',
  },
  {
    category: 'Развлечения и билеты',
    amount: 2000,
    note: 'Cirque O, Lion King, Molokini, Antelope Canyon, серфинг, луау + Non-Resident Annual Pass $250',
  },
  {
    category: 'Транспорт в городах',
    amount: 500,
    note: 'метро NYC, Uber, такси, паромы',
  },
];

export const budgetTotal: BudgetItem = {
  category: 'Итого',
  amount: 18000,
  note: '',
  isTotal: true,
};
