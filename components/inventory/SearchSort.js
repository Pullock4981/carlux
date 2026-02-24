"use client";

import { Search, ChevronDown } from 'lucide-react';

const SearchSort = ({ searchQuery, setSearchQuery, sortOrder, setSortOrder }) => {
    return (
        <div className="flex flex-col md:flex-row gap-6 mb-12 items-center justify-center w-full max-w-7xl mx-auto px-4">
            {/* Search Bar */}
            <div className="relative w-full md:max-w-md group">
                <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                    <Search className="w-5 h-5 text-gray-500 group-focus-within:text-blue-500 transition-colors" />
                </div>
                <input
                    type="text"
                    placeholder="Search for your next luxury vehicle..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-12 pr-4 py-4 bg-[#424141] border border-white/10 rounded-2xl text-white placeholder-[#A8A2A1] focus:outline-none focus:ring-2 focus:ring-[#0B785E]/50 focus:border-[#0B785E] transition-all shadow-xl"
                />
            </div>

            {/* Sort Dropdown */}
            <div className="relative w-full md:w-64">
                <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none">
                    <ChevronDown className="w-5 h-5 text-[#A8A2A1]" />
                </div>
                <select
                    value={sortOrder}
                    onChange={(e) => setSortOrder(e.target.value)}
                    className="w-full pl-6 pr-12 py-4 bg-[#424141] border border-white/10 rounded-2xl text-white appearance-none focus:outline-none focus:ring-2 focus:ring-[#0B785E]/50 transition-all cursor-pointer shadow-xl"
                >
                    <option value="" disabled className="bg-[#222828]">Sort by Price</option>
                    <option value="low-to-high" className="bg-[#222828]">Price: Low to High</option>
                    <option value="high-to-low" className="bg-[#222828]">Price: High to Low</option>
                </select>
            </div>
        </div>
    );
};

export default SearchSort;
