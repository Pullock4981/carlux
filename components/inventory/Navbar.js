"use client";

import { CarFront } from 'lucide-react';

const Navbar = () => {
    return (
        <nav className="fixed top-0 left-0 w-full z-50 bg-[#0a0a0a]/80 backdrop-blur-xl border-b border-white/5 flex justify-center">
            <div className="w-full max-w-7xl px-4 h-20 flex items-center justify-between">
                {/* Logo - Left */}
                <div className="flex items-center gap-2 group cursor-pointer w-48">
                    <div className="p-2 bg-blue-600 rounded-lg group-hover:bg-blue-500 transition-colors">
                        <CarFront className="w-6 h-6 text-white" />
                    </div>
                    <span className="text-2xl font-black tracking-tighter text-white uppercase italic">
                        CARLUX
                    </span>
                </div>

                {/* Links - Center */}
                <div className="hidden md:flex items-center gap-8 text-sm font-bold tracking-widest text-gray-400 uppercase">
                    <a href="#" className="hover:text-white transition-colors text-white border-b-2 border-blue-500 pb-1">Inventory</a>
                    <a href="#" className="hover:text-white transition-colors">Experience</a>
                    <a href="#" className="hover:text-white transition-colors">Ownership</a>
                </div>

                {/* Actions - Right */}
                <div className="flex items-center justify-end gap-4 w-48">
                    <button className="hidden sm:block px-6 py-2.5 border border-white/10 hover:border-white/20 rounded-full text-xs font-bold tracking-widest text-white uppercase transition-all">
                        Login
                    </button>
                    <button className="px-6 py-2.5 bg-white text-black rounded-full text-xs font-bold tracking-widest uppercase hover:bg-gray-200 transition-all">
                        Contact
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
