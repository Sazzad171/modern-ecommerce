function ProductCardSkeleton() {
  return (
    <div className="animate-pulse border rounded-2xl overflow-hidden w-full">
      <div className="h-48 bg-gray-200" />

      <div className="p-4 space-y-3">
        <div className="h-3 w-20 bg-gray-200 rounded" />
        <div className="h-4 w-full bg-gray-200 rounded" />
        <div className="h-5 w-24 bg-gray-300 rounded" />
      </div>
    </div>
  );
}

export default ProductCardSkeleton;