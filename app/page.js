"use client";

import Navbar from "@/components/inventory/Navbar";
import SearchSort from "@/components/inventory/SearchSort";
import CarCard from "@/components/inventory/CarCard";
import SkeletonLoader from "@/components/inventory/SkeletonLoader";
import ErrorMessage from "@/components/inventory/ErrorMessage";
import { useInventory } from "@/hooks/useInventory";
import { motion, AnimatePresence } from "framer-motion";

export default function Home() {
  const {
    products,
    loading,
    error,
    searchQuery,
    setSearchQuery,
    sortOrder,
    setSortOrder,
  } = useInventory();

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <Navbar />

      <main className="pt-20 flex flex-col items-center w-full">
        {/* Hero Section */}
        <section className="relative py-24 px-6 text-center overflow-hidden">
          {/* Background Gradient */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-full bg-blue-600/20 blur-[120px] -z-10 rounded-full" />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-6 uppercase italic">
              Experience <span className="text-blue-500">Pure</span> Excellence
            </h1>
            <p className="text-lg md:text-xl text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed">
              Discover the most exclusive vehicle inventory curated for those who demand more than just transportation.
            </p>
          </motion.div>
        </section>

        {/* Filters & Grid Container */}
        <section className="pb-32 w-full flex flex-col items-center">
          <SearchSort
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            sortOrder={sortOrder}
            setSortOrder={setSortOrder}
          />

          {loading ? (
            <SkeletonLoader />
          ) : error ? (
            <ErrorMessage error={error} />
          ) : (
            <div className="max-w-7xl w-full mx-auto px-4">
              {products.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  <AnimatePresence mode="popLayout">
                    {products.map((car) => (
                      <CarCard key={car.id} car={car} />
                    ))}
                  </AnimatePresence>
                </div>
              ) : (
                <div className="text-center py-20">
                  <p className="text-gray-500 text-xl">No vehicles found matching "{searchQuery}"</p>
                  <button
                    onClick={() => setSearchQuery("")}
                    className="mt-4 text-blue-500 hover:text-blue-400 font-bold underline"
                  >
                    Clear Search
                  </button>
                </div>
              )}
            </div>
          )}
        </section>
      </main>

      {/* Footer */}
      <footer className="py-10 border-t border-white/5 text-center text-gray-600 text-xs uppercase tracking-widest font-bold">
        <p>&copy; 2026 Proxima IT - Carlux Performance Division</p>
      </footer>
    </div>
  );
}
