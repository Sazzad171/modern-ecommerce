import { Search } from 'lucide-react';
import { useDebounce } from './hooks/useDebounce';
import { useProducts } from './hooks/useGetProducts';
import { useRef, useState } from 'react';
import SkeletonGrid from './components/SkeletonGrid';
import ProductCard from './components/ProductCard';

function App() {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('');
  const [page, setPage] = useState(1);

  const debouncedSearch = useDebounce(search, 2000);

  const mainRef = useRef<HTMLDivElement | null>(null);

  const {
    data: productsList,
    error: productsError,
    isLoading: isLoadingProducts,
    isFetching: isFetchingProducts,
    failureCount: productsFailureCount,
    refetch: refetchProducts
  } =
    useProducts({
      page,
      limit: 12,
      search: debouncedSearch,
      category,
    });

  const handlePageChange = (newPage: number) => {
    setPage(newPage);

    // smooth scroll to product section
    mainRef.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  return (
    <div className="min-h-screen p-8">
      {/* Header Section */}
      <header className="glass-panel p-8 mb-8">
        <h1 className="text-2xl font-semibold mb-2">
          Premium Products
        </h1>
        <p className="text-[var(--text-muted)]">
          Browse our collection. Handling the flaky API gracefully is part of the challenge.
        </p>
      </header>

      {/* Controls Section */}
      <section className="flex gap-4 mb-8">
        <div className="glass-panel flex items-center px-4 py-3 flex-1 max-w-[400px]">
          <Search size={20} className="text-[var(--text-muted)] mr-3" />
          <input
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setPage(1);
            }}
            placeholder="Search products..."
            className="bg-transparent outline-none w-full"
          />
        </div>
        
        <select
          value={category}
          onChange={(e) => {
            setCategory(e.target.value);
            setPage(1);
          }}
          className="glass-panel px-4 py-3"
        >
          <option value="">All</option>
          <option value="electronics">Electronics</option>
          <option value="clothing">Clothing</option>
          <option value="home">Home</option>
          <option value="outdoors">Outdoors</option>
        </select>
      </section>

      {/* Main Grid Placeholder */}
      <main ref={mainRef}>
        <div className="flex flex-col items-center justify-center p-4 md:p-6 border border-[var(--border)] rounded-2xl">

          {/* Retry Message */}
          {isFetchingProducts && productsFailureCount > 0 && (
            <p className="text-yellow-500 mb-4">
              We’re trying our best to show products to you... (Attempt {productsFailureCount}/5)
            </p>
          )}

          {/* Final Error */}
          {productsError && productsFailureCount >= 5 && (
            <div className="text-red-500 mb-4">
              Failed to load products. Please try again.
              <button onClick={() => refetchProducts()} className="ml-4 underline">
                Retry
              </button>
            </div>
          )}

          {/* Skeleton (first load OR retrying) */}
          {(isLoadingProducts || (isFetchingProducts && !productsList)) && <SkeletonGrid />}

          {/* Products */}
          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-6 w-full">
            {productsList?.data.map((product) => (
              <ProductCard product={product} />
            ))}
          </div>

          {/* Pagination */}
          <div className="flex items-center justify-center gap-4 mt-8">

            <button
              disabled={page === 1}
              onClick={() => handlePageChange(page - 1)}
              className="px-4 py-2 border rounded"
            >
              Prev
            </button>

            <span className="font-semibold">
              Page {productsList?.page} / {productsList?.totalPages}
            </span>

            <button
              disabled={page === productsList?.totalPages}
              onClick={() => handlePageChange(page + 1)}
              className="px-4 py-2 border rounded"
            >
              Next
            </button>

          </div>
        </div>
      </main>
    </div>
  );
}

export default App;