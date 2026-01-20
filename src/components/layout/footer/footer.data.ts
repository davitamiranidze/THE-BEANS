export type FooterLink = { label: string; href?: string };

export type FooterColumn = {
  title: string;
  items: FooterLink[];
};

export const footerColumns: FooterColumn[] = [
  {
    title: "Contact",
    items: [
      { label: "info@mysite.com" },
      { label: "Tel: 123-456-7890" },
      { label: "500 Terry Francine St" },
      { label: "San Francisco, CA 94158" },
      { label: "Mon–Fri" },
      { label: "9:00am – 7:00pm" },
    ],
  },
  {
    title: "Quick Links",
    items: [
      { label: "Shop", href: "/shop" },
      { label: "Wholesale", href: "/wholesale" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Policy",
    items: [
      { label: "Terms & Conditions", href: "/terms" },
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Refund Policy", href: "/refunds" },
      { label: "Shipping Policy", href: "/shipping" },
      { label: "Accessibility Statement", href: "/accessibility" },
    ],
  },
  {
    title: "Follow",
    items: [
      { label: "Facebook", href: "https://facebook.com" },
      { label: "Instagram", href: "https://instagram.com" },
      { label: "TikTok", href: "https://tiktok.com" },
      { label: "LinkedIn", href: "https://linkedin.com" },
    ],
  },
];
