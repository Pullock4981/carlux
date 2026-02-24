"use client";

import { Search, ChevronDown } from "lucide-react";

const SearchSort = ({ searchQuery, setSearchQuery, sortOrder, setSortOrder }) => {
  return (
    <div className="w-full">
      {/* ── MOBILE: compact single row ── */}
      <div className="flex sm:hidden items-center gap-2">
        {/* Search input — compact */}
        <div style={{ position: "relative", flex: 1 }}>
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "0.65rem",
              transform: "translateY(-50%)",
              pointerEvents: "none",
              color: "rgba(255,255,255,0.3)",
              display: "flex",
            }}
          >
            <Search size={14} />
          </div>
          <input
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            style={{
              width: "100%",
              paddingLeft: "2rem",
              paddingRight: "0.75rem",
              height: "2.25rem",
              borderRadius: "0.625rem",
              background: "rgba(0,0,0,0.5)",
              border: "1px solid rgba(255,255,255,0.08)",
              color: "#fff",
              fontSize: "0.8rem",
              outline: "none",
            }}
          />
        </div>

        {/* Sort select — compact */}
        <div style={{ position: "relative", flexShrink: 0 }}>
          <select
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
            style={{
              height: "2.25rem",
              paddingLeft: "0.6rem",
              paddingRight: "1.6rem",
              borderRadius: "0.625rem",
              background: "rgba(0,0,0,0.5)",
              border: "1px solid rgba(255,255,255,0.08)",
              color: sortOrder ? "#fff" : "rgba(255,255,255,0.4)",
              fontSize: "0.75rem",
              appearance: "none",
              outline: "none",
              cursor: "pointer",
            }}
          >
            <option value="" style={{ background: "#0a0a0a" }}>Sort</option>
            <option value="low-to-high" style={{ background: "#0a0a0a" }}>↑ Price</option>
            <option value="high-to-low" style={{ background: "#0a0a0a" }}>↓ Price</option>
          </select>
          <div
            style={{
              position: "absolute",
              top: "50%",
              right: "0.5rem",
              transform: "translateY(-50%)",
              pointerEvents: "none",
              color: "rgba(255,255,255,0.3)",
              display: "flex",
            }}
          >
            <ChevronDown size={12} />
          </div>
        </div>
      </div>

      {/* ── DESKTOP: full layout ── */}
      <div className="hidden sm:flex flex-row gap-6 p-5 sm:p-6 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-sm">
        {/* Search */}
        <div className="flex-1 min-w-0">
          <label className="block text-xs font-bold tracking-widest uppercase text-gray-500 mb-2">
            Search
          </label>
          <div className="relative group">
            <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
              <Search className="w-4 h-4 text-gray-500 group-focus-within:text-[#D81B60] transition-colors" />
            </div>
            <input
              type="text"
              placeholder="Search by title..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-4 h-12 rounded-xl bg-black/40 border border-white/10 text-white text-sm placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#D81B60]/40 focus:border-[#D81B60]/50 transition-all hover:border-white/20"
            />
          </div>
        </div>

        {/* Sort */}
        <div className="w-64 shrink-0">
          <label className="block text-xs font-bold tracking-widest uppercase text-gray-500 mb-2">
            Sort by Price
          </label>
          <div className="relative group">
            <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
              <ChevronDown className="w-4 h-4 text-gray-500 group-focus-within:text-[#D81B60] transition-colors" />
            </div>
            <select
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value)}
              className="w-full pl-4 pr-10 h-12 rounded-xl bg-black/40 border border-white/10 text-white text-sm appearance-none focus:outline-none focus:ring-2 focus:ring-[#D81B60]/40 focus:border-[#D81B60]/50 transition-all cursor-pointer hover:border-white/20"
            >
              <option value="" className="bg-zinc-950">Default</option>
              <option value="low-to-high" className="bg-zinc-950">Low to High</option>
              <option value="high-to-low" className="bg-zinc-950">High to Low</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchSort;
