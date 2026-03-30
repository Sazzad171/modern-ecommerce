import { Search, Loader2 } from 'lucide-react';
// import { api } from './services/api'; 
// Use this to fetch data: api.fetchProducts(...)

function App() {
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
            type="text" 
            placeholder="Search products..." 
            className="bg-transparent border-none outline-none w-full text-base text-[var(--text-main)] placeholder:text-[var(--text-muted)]"
          />
        </div>
        
        <select 
          className="glass-panel px-4 py-3 text-[var(--text-main)] outline-none text-base cursor-pointer appearance-none"
        >
          <option value="" className="bg-[var(--surface)]">All Categories</option>
          <option value="electronics" className="bg-[var(--surface)]">Electronics</option>
          <option value="clothing" className="bg-[var(--surface)]">Clothing</option>
          <option value="home" className="bg-[var(--surface)]">Home</option>
          <option value="outdoors" className="bg-[var(--surface)]">Outdoors</option>
        </select>
      </section>

      {/* Main Grid Placeholder */}
      <main>
        <div className="flex flex-col items-center justify-center p-16 border border-[var(--border)] rounded-2xl">
          <Loader2 
            size={40} 
            className="text-[var(--primary)] mb-4 animate-spin"
          />

          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-6">
    
          {/* Single Product Card */}
          <div className="bg-white rounded-2xl border border-[var(--border)] overflow-hidden hover:shadow-md transition">
            
            {/* Image */}
            <div className="bg-gray-100 flex items-center justify-center h-48">
              <img
                src="https://picsum.photos/seed/1/400/300"
                alt="Product"
                className="object-cover h-full"
              />
            </div>

            {/* Content */}
            <div className="p-4">
              <p className="text-sm text-gray-500 mb-1">Fabrilife</p>

              <h3 className="text-sm font-semibold text-gray-800 line-clamp-2 mb-2">
                Fabrilife Mens Premium Designer Edition T Shirt with Unique Print and Superior Comfort
              </h3>

              <p className="text-lg font-bold text-[var(--primary)]">
                ৳ 2,500
              </p>
            </div>
          </div>

        </div>
        </div>
      </main>
    </div>
  );
}

export default App;