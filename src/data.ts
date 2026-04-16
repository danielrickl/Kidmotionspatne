import {
  ContactInfo,
  Course,
  HeroContent,
  LocationBlock,
  NavItem,
  PriceEntry
} from './types';

export const navigation: NavItem[] = [
  { label: 'Nabidka kurzu', href: '#nabidka' },
  { label: 'Kde a kdy', href: '#kde-a-kdy' },
  { label: 'Aktualni cenik', href: '#cenik' },
  { label: 'Rezervace', href: '#rezervace' },
  { label: 'Kontakt', href: '#kontakt' }
];

export const hero: HeroContent = {
  overline: 'Prave probiha zapis na druhe pololeti',
  headline: 'Budujeme lasku k pohybu a ke sportu',
  subheadline:
    'Vyberte si kurz podle veku ditete, lokality a casu. Misto si zajistite online rezervaci.',
  ctaLabel: 'Prejit na rezervaci',
  ctaHref: '#rezervace'
};

export const courses: Course[] = [
  {
    title: 'Tanecky pro nejmensi',
    age: '2-4 roky',
    summary:
      'Pohybove tanecni lekce pro rodice s detmi, kde se kombinuje hudba, hra a zakladni pohybova priprava.',
    bulletPoints: [
      'tanec, zpivani a cviceni hravou formou',
      'prekazkove drahy, prace s micem a rytmicke hry',
      'rozvoj jemne i hrube motoriky a rovnovahy'
    ],
    schedule: [
      'Chrastany - ctvrtek 15:00-15:55',
      'Ptice - patek 15:00-16:00',
      'Cerveny Ujezd - pondeli 16:00-17:00'
    ]
  },
  {
    title: 'Tanecky pro deti',
    age: '5-8 let',
    summary:
      'Vesele lekce s hudbou a jednoduchymi choreografiemi, ktere podporuji koordinaci, rytmus a vztah k pohybu.',
    bulletPoints: [
      'tancovani na ruzne hudebni styly',
      'cviceni se stuhami, satky, overbally a dalsimi pomuckami',
      'rytmicke hry, souteze a pohybove aktivity'
    ],
    schedule: [
      'Chrastany - ctvrtek 16:00-16:55',
      'Ptice - patek 16:00-17:00',
      'Cerveny Ujezd - pondeli 17:00-18:00'
    ]
  },
  {
    title: 'Tanecky pro pokrocile',
    age: 'od 8 let',
    summary:
      'Navazujici skupina pro deti, ktere uz maji pohybovy zaklad a chteji pokracovat ve strukturovanejsim treninku.',
    bulletPoints: [
      'delsi choreografie a cisteni pohybove techniky',
      'prace s rytmem, dynamikou a vyrazem',
      'prubezne zaznamy dochazky a pokroku'
    ],
    schedule: ['Ptice - patek 17:00-18:00']
  },
  {
    title: 'Pohybovky s Danem',
    age: '3-12 let (rodice + deti)',
    summary:
      'Spolecny pohybovy kruh bez tlaku na vykon, zamereny na duveru v telo, koordinaci a radost ze spolecneho pohybu.',
    bulletPoints: [
      'hry, prekazky, kotouly, mice a balancni prvky',
      'prirozeny pohyb bez srovnavani',
      'prostor pro spolupraci rodice a ditete'
    ],
    schedule: ['Praha 6 - Liboc, patek 14:00-16:00']
  },
  {
    title: 'Taekwondo pro rodice s detmi',
    age: 'od 4 let',
    summary:
      'Hravou formou vedene lekce, ktere spojuji zakladni techniky, gymnastickou pripravu a spolupraci rodice s ditetem.',
    bulletPoints: [
      'zakladni techniky kopu a uderu',
      'koordinace, rovnovaha a sebeduvera',
      'tymova spoluprace a respekt'
    ],
    schedule: ['Praha 4 - Hodkovicky, ctvrtek 10:30-11:30']
  }
];

export const locations: LocationBlock[] = [
  {
    city: 'Cerveny Ujezd',
    address: 'Sokolovna Cerveny Ujezd, Sokolska 162, 273 51 Cerveny Ujezd',
    slots: [
      'Tanecky pro nejmensi (2-4 roky): pondeli 16:00-17:00',
      'Tanecky pro deti (5-8 let): pondeli 17:00-18:00',
      'Tanecni krouzek (5-8 let): ctvrtek 15:15-16:00',
      'Tanecni krouzek (9-12 let): ctvrtek 16:00-16:45'
    ]
  },
  {
    city: 'Ptice',
    address: 'Obecni urad Ptice, Hlavni 140, 252 18 Ptice',
    slots: [
      'Tanecky pro nejmensi: patek 15:00-16:00',
      'Tanecky pro deti: patek 16:00-17:00',
      'Tanecky pro pokrocile: patek 17:00-18:00'
    ]
  },
  {
    city: 'Chrastany',
    address: 'Sport centrum Chrastany, Plzenska 250, 252 19 Chrastany',
    slots: ['Tanecky pro deti (od 5 let): ctvrtek 15:00-16:00']
  },
  {
    city: 'Praha 6 - Liboc',
    address: 'TJ Sokol Liboc, Ruzynska 156/55, 161 00 Praha 6',
    slots: ['Pohybovky pro rodice a deti (3-12 let): patek 14:00-16:00']
  }
];

export const prices: PriceEntry[] = [
  {
    dayAndPlace: 'Pondeli - Cerveny Ujezd',
    address: 'Sokolovna Cerveny Ujezd, Sokolska 162',
    items: [
      'Tanecky pro nejmensi (2-4 roky): 170 Kc / lekce',
      'Tanecky pro deti (5-8 let): 170 Kc / lekce'
    ],
    info: [
      'Ukazkova lekce: 15. 9. 2025',
      'Kurzy probiha pololetne',
      'Platba probiha pololetne prevodem na ucet'
    ]
  },
  {
    dayAndPlace: 'Ctvrtek - Praha 4 (Hodkovicky)',
    address: 'TJ Sokol Hodkovicky, V Mokrinach 240',
    items: ['Taekwondo pro rodice s detmi: 150 Kc / lekce'],
    info: [
      'Ukazkova lekce: 18. 9. 2025',
      'Kurzy probiha pololetne',
      'Prihlaseni probiha pres formular na webu'
    ]
  },
  {
    dayAndPlace: 'Patek - Praha 6 (Liboc)',
    address: 'TJ Sokol Liboc, Ruzynska 156/55',
    items: ['Pohybovky s Danem: 290 Kc / lekce (120 minut)'],
    info: [
      'Ukazkova lekce: 19. 9. 2025',
      'Kurzy probiha ctvrtletne',
      'Sourozenec hradi 50 Kc'
    ]
  }
];

export const discountRules: string[] = [
  'Prvni clen rodiny hradi kurz v plne vysi.',
  'Kazdy dalsi clen rodiny ma sourozeneckou slevu 300 Kc / pololeti.',
  'Stejna sleva 300 Kc plati i pri navsteve vice kurzu tydne.'
];

export const cancellationRules: string[] = [
  'Prihlaska je podavana na cely skolni rok a vytvari zavaznou rezervaci mista.',
  'Kurzovne je rozdeleno do dvou plateb podle pololeti.',
  'Pri predcasnem ukonceni v prubehu pololeti se uhrazene kurzovne nevraci.',
  'Omluva lekce musi prijit nejpozdeji 24 hodin pred zacatkem.',
  'Neomluvene lekce propadaji bez nahrady.'
];

export const contact: ContactInfo = {
  person: 'Romana Stribrna',
  phone: '736 760 383',
  email: 'stribrna.ro@seznam.cz',
  facebookUrl: 'https://www.facebook.com/Kidmotioncz'
};