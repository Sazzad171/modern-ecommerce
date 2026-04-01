import type { Product } from "../types/product";

function ProductCard({ product }: {  product: Product}) {
  return (
    <div key={product.id} className="rounded-md overflow-hidden hover:shadow-md transition">

      {/* Image */}
      <div className="bg-gray-100 flex items-center justify-center h-[210px]">
        <img
          src={product.imageUrl}
          alt="Product"
          className="object-cover h-full rounded-tl-md rounded-tr-md rounded-bl-[4px] rounded-br-[4px]"
        />
      </div>

      {/* Content */}
      <div className="p-2">
        <p className="text-sm mb-[2px] text-dark700">{product.category}</p>

        <h3 className="text-base font-medium line-clamp-2 mb-2 text-dark900">
          {product.name}
        </h3>

        <p className="text-xl font-medium text-primary700">
          ৳ {product.price}
        </p>
      </div>
    </div>
  );
}

export default ProductCard;