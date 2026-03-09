export interface Hotel {
  name: string;
  dates: string;
  nights: number;
  pricePerNight: string;
  total: string;
  url?: string;
  note?: string;
}

export interface RegionHotels {
  region: string;
  regionColor: string;
  hotels: Hotel[];
}

export const hotelsByRegion: Record<string, RegionHotels> = {
  'new-york': {
    region: 'Нью-Йорк',
    regionColor: '#e8c87a',
    hotels: [
      {
        name: 'Pod 51',
        dates: '11–16 июля',
        nights: 5,
        pricePerNight: '~$130',
        total: '~$650',
        url: 'https://www.booking.com',
        note: 'Минималистичный, рядом с метро, крошечные номера но чисто и стильно',
      },
    ],
  },
  vegas: {
    region: 'Лас-Вегас',
    regionColor: '#e07040',
    hotels: [
      {
        name: 'The Cosmopolitan',
        dates: '15–16 июля',
        nights: 1,
        pricePerNight: '~$180',
        total: '~$180',
        note: 'Пул на крыше, Secret Pizza, центр Стрипа',
      },
    ],
  },
  zion: {
    region: 'Zion',
    regionColor: '#e07040',
    hotels: [
      {
        name: 'Cable Mountain Lodge',
        dates: '16–17 июля',
        nights: 1,
        pricePerNight: '~$160',
        total: '~$160',
        note: 'В Springdale у входа в парк, бассейн',
      },
    ],
  },
  'monument-valley': {
    region: 'Monument Valley',
    regionColor: '#e07040',
    hotels: [
      {
        name: 'The View Hotel',
        dates: '17–18 июля',
        nights: 1,
        pricePerNight: '~$250',
        total: '~$250',
        note: 'Единственный отель внутри парка, вид на Mittens из окна',
      },
    ],
  },
  'grand-canyon': {
    region: 'Гранд-Каньон',
    regionColor: '#e07040',
    hotels: [
      {
        name: 'Yavapai Lodge',
        dates: '18–20 июля',
        nights: 2,
        pricePerNight: '~$170',
        total: '~$340',
        note: 'В деревне у South Rim, до каньона пешком',
      },
    ],
  },
  'los-angeles': {
    region: 'Лос-Анджелес',
    regionColor: '#64b4ff',
    hotels: [
      {
        name: 'The Charlie West Hollywood',
        dates: '20–24 июля + 28–30 июля',
        nights: 5,
        pricePerNight: '~$160',
        total: '~$800',
        note: 'Бутик-отель, бассейн, Melrose рядом',
      },
    ],
  },
  maui: {
    region: 'Мауи',
    regionColor: '#40c8a0',
    hotels: [
      {
        name: 'Royal Lahaina Resort',
        dates: '24–28 июля',
        nights: 4,
        pricePerNight: '~$220',
        total: '~$880',
        note: 'Прямо на Kaanapali Beach, luau show',
      },
    ],
  },
};

export const allHotels: Hotel[] = Object.values(hotelsByRegion).flatMap(r => r.hotels);
