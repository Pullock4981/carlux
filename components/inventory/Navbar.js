"use client";

import { CarFront } from 'lucide-react';

const Navbar = () => {
    return (
        <nav className="fixed top-0 left-0 w-full z-50 bg-[#0a0a0a]/80 backdrop-blur-xl border-b border-white/5 flex justify-center">
            <div className="w-full max-w-7xl px-4 h-20 flex items-center justify-between">
                {/* Logo - Left */}
                <div className="flex items-center gap-2 group cursor-pointer w-48">
                    <div className="p-2 bg-[#0B785E] rounded-lg group-hover:bg-[#9B1A37] transition-colors">
                        <CarFront className="w-6 h-6 text-white" />
                    </div>
                    <span className="text-2xl font-black tracking-tighter text-white uppercase italic">
                        CARLUX
                    </span>
                </div>

                {/* Links - Center */}
                <div className="hidden md:flex items-center gap-8 text-sm font-bold tracking-widest text-gray-400 uppercase">
                    <a href="#" className="hover:text-white transition-colors text-white border-b-2 border-[#0B785E] pb-1">Inventory</a>
                    <a href="#" className="hover:text-white transition-colors">Experience</a>
                    <a href="#" className="hover:text-white transition-colors">Ownership</a>
                </div>

                {/* Actions - Right */}
                <div className="flex items-center justify-end gap-3 w-48">
                    <button className="hidden sm:block w-28 h-10 border border-[#72706A] hover:border-[#A8A2A1] rounded-full text-xs font-bold tracking-widest text-[#A8A2A1] uppercase transition-all cursor-pointer">
                        Login
                    </button>
                    <button className="w-28 h-10 bg-[#0B785E] text-white rounded-full text-xs font-bold tracking-widest uppercase hover:bg-[#9B1A37] transition-all cursor-pointer">
                        Contact
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
