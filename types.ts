
export type Page = 'home' | 'services' | 'vision' | 'contact';

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface NavItem {
  label: string;
  page: Page;
}
