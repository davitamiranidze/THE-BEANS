export interface Product {
  id: number;
  name: string;
  price: number;
  origin: string;
  goodFor: string;
  tasteNotes: string;
  imageFront: string;
  imageSide: string;
  imageHover: string;
  isFeatured?:boolean;
}

const imageFront = "/coffee-1.avif";
const imageSide = "/beans-package-2nd-fold.avif";
const hoverImage = "/coffee-1-hover.avif";

export const Products: Product[] = [
  {
    id: 1,
    name: "Sunrise Serenade",
    price: 14.99,
    origin: "Ethiopia",
    goodFor: "Pour-over, Drip",
    tasteNotes: "Citrus acidity, floral, jasmine, bergamot, fruity sweetness",
    imageFront: imageFront,
    imageSide: imageSide,
    imageHover: hoverImage,
  },
  {
    id: 2,
    name: "Caramel Cascade",
    price: 15.99,
    origin: "Brazil",
    goodFor: "Espresso, French Press",
    tasteNotes: "Rich caramel, chocolate undertones, smooth body",
    imageFront: imageFront,
    imageSide: imageSide,
    imageHover: hoverImage,
  },
  {
    id: 3,
    name: "Nutty Nirvana",
    price: 12.99,
    origin: "Colombia",
    goodFor: "Drip, AeroPress",
    tasteNotes: "Roasted nuts, mild cocoa, balanced sweetness",
    imageFront: imageFront,
    imageSide: imageSide,
    imageHover: hoverImage,
  },
  {
    id: 4,
    name: "Hazelnut Harmony",
    price: 11.99,
    origin: "Guatemala",
    goodFor: "Pour-over, Chemex",
    tasteNotes: "Hazelnut, brown sugar, soft acidity",
    imageFront: imageFront,
    imageSide: imageSide,
    imageHover: hoverImage,
  },
  {
    id: 5,
    name: "Cocoa Bliss",
    price: 16.99,
    origin: "Peru",
    goodFor: "Espresso, Moka Pot",
    tasteNotes: "Dark cocoa, molasses, velvety finish",
    imageFront: imageFront,
    imageSide: imageSide,
    imageHover: hoverImage,
  },
  {
    id: 6,
    name: "Amber Horizon",
    price: 13.99,
    origin: "Kenya",
    goodFor: "Pour-over, AeroPress",
    tasteNotes: "Bright acidity, red berries, honey sweetness, clean finish",
    imageFront: imageFront,
    imageSide: imageSide,
    imageHover: hoverImage,
  },
];
