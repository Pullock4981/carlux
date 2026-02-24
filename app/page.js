"use client";

import Navbar from "@/components/inventory/Navbar";
import SearchSort from "@/components/inventory/SearchSort";
import CarCard from "@/components/inventory/CarCard";
import SkeletonLoader from "@/components/inventory/SkeletonLoader";
import ErrorMessage from "@/components/inventory/ErrorMessage";
import { useInventory } from "@/hooks/useInventory";
import Footer from "@/components/inventory/Footer";

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
    <div className="bg-transparent text-white" style={{ paddingTop: "4rem" }}>
      <Navbar />

      <main className="flex flex-col items-center w-full min-h-screen">
        {/* Content Section */}
        <div
          className="w-full max-w-7xl mx-auto flex flex-col"
          style={{
            paddingTop: "2rem",
            paddingBottom: "4rem",
            paddingLeft: "clamp(1rem, 3vw, 3rem)",
            paddingRight: "clamp(1rem, 3vw, 3rem)",
            gap: "2.5rem",
          }}
        >
          <SearchSort
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            sortOrder={sortOrder}
            setSortOrder={setSortOrder}
          />

          <div className="w-full">
            {loading ? (
              <SkeletonLoader />
            ) : error ? (
              <ErrorMessage error={error} />
            ) : (
              <>
                {products.length > 0 ? (
                  <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3" style={{ gap: "1.5rem" }}>
                    {products.map((car) => (
                      <CarCard key={car.id} car={car} />
                    ))}
                  </div>
                ) : (
                  <div className="text-center" style={{ paddingTop: "5rem", paddingBottom: "5rem" }}>
                    <p className="text-gray-500" style={{ fontSize: "1.125rem" }}>
                      No vehicles found matching &ldquo;{searchQuery}&rdquo;
                    </p>
                    <button
                      onClick={() => setSearchQuery("")}
                      className="text-white font-bold rounded-full hover:opacity-90 transition-all cursor-pointer"
                      style={{
                        marginTop: "1.5rem",
                        paddingLeft: "2rem",
                        paddingRight: "2rem",
                        paddingTop: "0.75rem",
                        paddingBottom: "0.75rem",
                        background: "linear-gradient(135deg,#4c1d95 0%,#9b1a37 100%)",
                        boxShadow: "0 4px 20px rgba(76,29,149,0.3)",
                      }}
                    >
                      Clear Search
                    </button>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
