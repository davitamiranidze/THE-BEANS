import { type Product } from "./product.data";

type Props = {
  product: Product;
};

export function ProductCard({ product }: Props) {
  return (
    <div className="group">
      {/* Image */}
      <div className="relative aspect-3/4 overflow-hidden rounded-xl bg-muted">
        <img
          src={product.imageFront}
          alt={product.name}
          className="h-full w-full object-cover transition-opacity duration-300 group-hover:opacity-0"
        />
        <img
          src={product.imageHover}
          alt=""
          className="absolute inset-0 h-full w-full object-cover opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        />
      </div>

      {/* Text */}
      <div className="mt-3 space-y-1">
        <h3 className="text-sm font-medium">{product.name}</h3>
        <p className="text-sm text-muted-foreground">
          €{product.price.toFixed(2)}
        </p>
      </div>
    </div>
  );
}
