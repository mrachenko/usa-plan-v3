export type BookingStatus = 'Обязательно' | 'Рекомендуется';

export interface Booking {
  item: string;
  when: string;
  status: BookingStatus;
  note?: string;
}

export const bookings: Booking[] = [
  {
    item: 'Авиабилеты KRR→EVN→IST→JFK',
    when: 'За 2-3 месяца',
    status: 'Обязательно',
  },
  {
    item: 'Авиабилеты JFK→LAS',
    when: 'За 1-2 месяца',
    status: 'Обязательно',
  },
  {
    item: 'Авиабилеты LAX→OGG→LAX',
    when: 'За 2-3 месяца',
    status: 'Обязательно',
  },
  {
    item: 'Авиабилеты LAX→IST→EVN→KRR',
    when: 'За 2-3 месяца',
    status: 'Обязательно',
  },
  {
    item: 'Отели (все)',
    when: 'За 1-2 месяца',
    status: 'Обязательно',
    note: 'Бесплатная отмена на Booking.com',
  },
  {
    item: 'Аренда авто (Вегас→LA, one-way)',
    when: 'За 1 месяц',
    status: 'Обязательно',
    note: 'Enterprise/Hertz, one-way fee ~$200',
  },
  {
    item: 'Аренда авто (Мауи)',
    when: 'За 1 месяц',
    status: 'Обязательно',
  },
  {
    item: 'Cirque du Soleil O (Bellagio)',
    when: 'За 1-2 месяца',
    status: 'Рекомендуется',
    note: 'Места быстро раскупают',
  },
  {
    item: 'Antelope Canyon тур',
    when: 'За 2-3 недели',
    status: 'Обязательно',
    note: 'Только с гидом навахо',
  },
  {
    item: 'Haleakala sunrise (reservation)',
    when: 'За 60 дней',
    status: 'Обязательно',
    note: 'recreation.gov, $1/чел, слоты улетают мгновенно',
  },
  {
    item: 'Molokini snorkel тур',
    when: 'За 1-2 недели',
    status: 'Рекомендуется',
  },
  {
    item: 'Universal Studios Express Pass',
    when: 'За 1 неделю',
    status: 'Рекомендуется',
    note: 'Цена растёт ближе к дате',
  },
];
