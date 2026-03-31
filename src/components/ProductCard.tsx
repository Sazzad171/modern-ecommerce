import type { Product } from "../types/product";

function ProductCard({ product }: {  product: Product}) {
  return (
    <div key={product.id} className="bg-white rounded-2xl border border-[var(--border)] overflow-hidden hover:shadow-md transition">

      {/* Image */}
      <div className="bg-gray-100 flex items-center justify-center h-48">
        <img
          src={product.imageUrl}
          alt="Product"
          className="object-cover h-full"
        />
      </div>

      {/* Content */}
      <div className="p-4">
        <p className="text-sm text-gray-500 mb-1">{product.category}</p>

        <h3 className="text-sm font-semibold text-gray-800 line-clamp-2 mb-2">
          {product.name}
        </h3>

        <p className="text-lg font-bold text-[var(--primary)]">
          ৳ {product.price}
        </p>
      </div>
    </div>
  );
}

export default ProductCard;