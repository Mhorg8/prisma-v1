export interface NavItem {
  id: number;
  title: string;
  url: string;
  subLinks?: {
    title: string;
    url: string;
  }[];
}

export interface HeroInfo {
  id: number;
  title: string;
  subTitle: string;
  image: string;
}

export interface Option {
  label: string;
  value: string;
}

export interface Product {
  id: number;
  productName: string;
  founderName: string;
  price: number;
  desc: string;
  image: string;
  offerPercentage: number | null;
  rate: number | null;
  category: string;
}

export interface FooterItem {
  id: number;
  title: string;
  subLinks: {
    text: string;
    path: string;
  }[];
}

export interface FilterOption {
  id: number;
  placeHolder: string;
  title: string;
  options: {
    label: string;
    value: string;
  }[];
}

export interface AccordionItem {
  title: string;
  content: string;
}
