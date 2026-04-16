export type NavItem = {
  label: string;
  href: string;
};

export type HeroContent = {
  overline: string;
  headline: string;
  subheadline: string;
  ctaLabel: string;
  ctaHref: string;
};

export type Course = {
  title: string;
  age: string;
  summary: string;
  bulletPoints: string[];
  schedule: string[];
};

export type LocationBlock = {
  city: string;
  address: string;
  slots: string[];
};

export type PriceEntry = {
  dayAndPlace: string;
  address: string;
  items: string[];
  info: string[];
};

export type ContactInfo = {
  person: string;
  phone: string;
  email: string;
  facebookUrl: string;
};