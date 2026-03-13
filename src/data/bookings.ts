export type BookingStatus = 'Обязательно' | 'Рекомендуется';

export interface Booking {
  item: string;
  when: string;
  status: BookingStatus;
  note?: string;
}

export const bookings: Booking[] = [
  {
    item: 'Авиабилеты EVN→JFK',
    when: 'Куплено ✓',
    status: 'Обязательно',
    note: 'Куплено',
  },
  {
    item: 'Авиабилеты EWR→LAS (United)',
    when: 'Купить сейчас',
    status: 'Обязательно',
    note: '15 июля, 14:40→17:08, ~28к₽/чел',
  },
  {
    item: 'Авиабилеты LAX→OGG (Hawaiian)',
    when: 'Купить сейчас',
    status: 'Обязательно',
    note: '21 июля, 08:30→11:11, прямой, $578 + $80 багаж на двоих',
  },
  {
    item: 'Авиабилеты OGG→LAX (AA)',
    when: 'Купить сейчас',
    status: 'Обязательно',
    note: '27 июля, 13:14→21:40, прямой, $562 + $80 багаж на двоих',
  },
  {
    item: 'Авиабилеты LAX→EVN',
    when: 'Куплено ✓',
    status: 'Обязательно',
    note: 'Куплено',
  },
  {
    item: 'Отели NYC + Вегас + парки + LA',
    when: 'За 1-2 месяца',
    status: 'Обязательно',
    note: 'Бесплатная отмена на Booking.com',
  },
  {
    item: 'Кондо Мауи (Papakea J201 или аналог)',
    when: 'Как можно скорее',
    status: 'Обязательно',
    note: '6 ночей 21–27 июля, ~$2,140, AC обязателен',
  },
  {
    item: 'Аренда Mini Countryman (Вегас→LA)',
    when: 'Куплено ✓',
    status: 'Обязательно',
    note: 'Sixt #9731667726, 16 июля 08:00 LAS → 20 июля 17:00 West Hollywood, $717',
  },
  {
    item: 'Аренда RAV4 (Мауи)',
    when: 'Забронировать',
    status: 'Обязательно',
    note: 'Sixt, OGG 21 июля → 27 июля, $586 с Smart Protection',
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
    item: 'Haleakala sunrise permit',
    when: '27 мая (за 60 дней)',
    status: 'Обязательно',
    note: 'recreation.gov, $1/чел, слоты разбирают за минуты',
  },
  {
    item: 'Four Winds Molokini тур',
    when: 'За 2-4 недели',
    status: 'Обязательно',
    note: 'fourwindsmaui.com, утренний тур обязателен',
  },
  {
    item: 'Old Lahaina Luau',
    when: 'За 1-2 месяца',
    status: 'Обязательно',
    note: 'oldlahainaluau.com — разбирают быстро, 22 июля',
  },
  {
    item: 'Non-Resident Annual Pass (нацпарки)',
    when: 'За 1 месяц',
    status: 'Обязательно',
    note: '$250, store.usgs.gov — покрывает Zion + Grand Canyon',
  },
  {
    item: 'Wai\'anapanapa Black Sand Beach',
    when: 'За 30 дней (23 июня)',
    status: 'Обязательно',
    note: 'gostateparks.hawaii.gov, слоты разбирают быстро',
  },
  {
    item: 'The Lion King (Broadway)',
    when: 'За 1-2 месяца',
    status: 'Обязательно',
    note: 'Telecharge или TodayTix, mezzanine дешевле',
  },
  {
    item: 'Village Vanguard (джаз-клуб)',
    when: 'За 1-2 недели',
    status: 'Рекомендуется',
    note: 'villagevanguard.com, сеты в 20:00 и 22:00',
  },
  {
    item: 'The Lambs Club (ужин)',
    when: 'За 1-2 недели',
    status: 'Рекомендуется',
    note: 'Pre-theater на 18:30, перед Lion King',
  },
  {
    item: 'Via Carota (ужин)',
    when: 'Без брони',
    status: 'Рекомендуется',
    note: 'Только walk-in, приходить к 17:30 — очередь 30-60 мин',
  },
  {
    item: 'Bestia (ужин)',
    when: 'За 1 месяц',
    status: 'Обязательно',
    note: 'bestiaLA.com — Resy/OpenTable, 28 июля',
  },
  {
    item: 'Rustic Canyon (ужин)',
    when: 'За 1-2 недели',
    status: 'Рекомендуется',
    note: 'Прощальный ужин 29 июля, Santa Monica',
  },
  {
    item: 'Mama\'s Fish House (ужин)',
    when: 'За 2-3 месяца',
    status: 'Обязательно',
    note: 'mamasfishhouse.com — столик ocean view, 25 июля',
  },
  {
    item: 'Mala Ocean Tavern (ужин)',
    when: 'За 1-2 недели',
    status: 'Рекомендуется',
    note: 'Столик у воды — заранее, 26 июля',
  },
];
