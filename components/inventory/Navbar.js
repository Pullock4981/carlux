"use client";

import { CarFront } from 'lucide-react';

const Navbar = () => {
    return (
        <nav className="fixed top-0 left-0 w-full z-50 bg-[#0a0a0a]/80 backdrop-blur-xl border-b border-white/5 flex justify-center">
            <div className="w-full max-w-7xl px-4 h-20 flex items-center justify-between">
                {/* Logo - Left */}
                <div className="flex items-center gap-2 group cursor-pointer w-48">
                    <div className="p-2 bg-[#D81B60] rounded-lg group-hover:bg-[#9B1A37] transition-colors shadow-[0_0_15px_rgba(216,27,96,0.4)]">
                        <CarFront className="w-6 h-6 text-white" />
                    </div>
                    <span className="text-2xl font-black tracking-tighter text-white uppercase italic">
                        CARLUX
                    </span>
                </div>

                {/* Links - Center */}
                <div className="hidden md:flex items-center gap-8 text-sm font-bold tracking-widest text-gray-400 uppercase">
                    <a href="#" className="hover:text-white transition-colors text-white border-b-2 border-[#D81B60] pb-1">Inventory</a>
                    <a href="#" className="hover:text-white transition-colors">Experience</a>
                    <a href="#" className="hover:text-white transition-colors">Ownership</a>
                </div>

                {/* Actions - Right */}
                <div className="flex items-center justify-end gap-3 w-48">
                    <button className="hidden sm:block w-28 h-10 border border-white/10 hover:border-[#D81B60]/50 rounded-full text-xs font-bold tracking-widest text-gray-400 hover:text-white uppercase transition-all cursor-pointer">
                        Login
                    </button>
                    <button className="w-28 h-10 bg-[linear-gradient(135deg,#4c1d95_0%,#9b1a37_100%)] text-white rounded-full text-xs font-bold tracking-widest uppercase hover:bg-[linear-gradient(135deg,#9b1a37_0%,#4c1d95_100%)] transition-all cursor-pointer shadow-[0_0_20px_rgba(155,26,55,0.3)]">
                        Contact
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
