export interface BudgetItem {
  category: string;
  amount: number;
  note: string;
  isTotal?: boolean;
}

export const budgetItems: BudgetItem[] = [
  {
    category: 'Авиабилеты',
    amount: 3200,
    note: 'KRR↔JFK, JFK→LAS, LAX↔OGG, LAX→домой',
  },
  {
    category: 'Отели (20 ночей)',
    amount: 3260,
    note: 'средняя ~$163/ночь',
  },
  {
    category: 'Аренда авто',
    amount: 1100,
    note: 'Вегас→LA 5 дней + Мауи 4 дня + бензин',
  },
  {
    category: 'Еда и рестораны',
    amount: 2000,
    note: '$50/день на двоих',
  },
  {
    category: 'Развлечения',
    amount: 800,
    note: 'Cirque, Universal, туры, парки',
  },
  {
    category: 'Транспорт в городах',
    amount: 400,
    note: 'метро, Uber, паромы',
  },
];

export const budgetTotal: BudgetItem = {
  category: 'Итого',
  amount: 10760,
  note: '',
  isTotal: true,
};
