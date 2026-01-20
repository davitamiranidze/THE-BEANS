export interface NavLinkItem {
  label: string;
  to: string;
}

export const NAV_LINKS: NavLinkItem[] = [
  { label: "Shop", to: "/shop" },
  { label: "Wholesale", to: "/wholesale" },
  { label: "Contact", to: "/contact" },
];