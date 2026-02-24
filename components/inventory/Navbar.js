"use client";

import { CarFront, Menu, X } from 'lucide-react';
import { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
    const [mobileOpen, setMobileOpen] = useState(false);

    return (
        <>
            <nav className="fixed top-0 left-0 w-full z-50 bg-[#0a0a0a]/95 border-b border-white/10 shadow-[0_12px_40px_rgba(0,0,0,0.5)] backdrop-blur-md flex justify-center">
                <div className="navbar-inner">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2 group cursor-pointer shrink-0 no-underline">
                        <div className="p-2 bg-[#D81B60] rounded-lg group-hover:bg-[#9B1A37] transition-colors shadow-[0_0_15px_rgba(216,27,96,0.4)]">
                            <CarFront className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                        </div>
                        <span className="text-lg sm:text-2xl font-black tracking-tighter text-white uppercase italic">
                            CARLUX
                        </span>
                    </Link>

                    {/* Desktop Links */}
                    <div className="navbar-links hidden lg:flex text-sm font-bold tracking-widest text-gray-400 uppercase">
                        <a href="#" className="hover:text-white transition-colors text-white border-b-2 border-[#D81B60] pb-1">Inventory</a>
                        <a href="#" className="hover:text-white transition-colors">Experience</a>
                        <a href="#" className="hover:text-white transition-colors">Ownership</a>
                    </div>

                    {/* Desktop Actions */}
                    <div className="hidden lg:flex items-center justify-end gap-3 shrink-0">
                        <button className="w-24 h-10 border border-white/10 hover:border-[#D81B60]/50 rounded-full text-xs font-bold tracking-widest text-gray-400 hover:text-white uppercase transition-all cursor-pointer">
                            Login
                        </button>
                        <button className="w-28 h-10 bg-[linear-gradient(135deg,#4c1d95_0%,#9b1a37_100%)] text-white rounded-full text-xs font-bold tracking-widest uppercase hover:opacity-90 transition-all cursor-pointer shadow-[0_0_20px_rgba(155,26,55,0.3)]">
                            Contact
                        </button>
                    </div>

                    {/* Mobile Hamburger */}
                    <button
                        className="lg:hidden ml-auto p-2 text-gray-400 hover:text-white transition-colors"
                        onClick={() => setMobileOpen(!mobileOpen)}
                    >
                        {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>
            </nav>

            {/* Mobile Drawer */}
            {mobileOpen && (
                <div className="fixed inset-0 z-40 pt-[64px] bg-[#0a0a0a]/98 backdrop-blur-lg flex flex-col lg:hidden">
                    <div className="flex flex-col gap-6 px-8 py-10 text-center">
                        <a href="#" onClick={() => setMobileOpen(false)} className="text-white font-black uppercase tracking-widest text-lg border-b border-white/5 pb-6">Inventory</a>
                        <a href="#" onClick={() => setMobileOpen(false)} className="text-gray-400 hover:text-white font-black uppercase tracking-widest text-lg border-b border-white/5 pb-6 transition-colors">Experience</a>
                        <a href="#" onClick={() => setMobileOpen(false)} className="text-gray-400 hover:text-white font-black uppercase tracking-widest text-lg border-b border-white/5 pb-6 transition-colors">Ownership</a>
                        <div className="flex gap-4 mt-4 justify-center">
                            <button className="flex-1 h-12 border border-white/10 rounded-full text-sm font-bold tracking-widest text-gray-400 uppercase transition-all cursor-pointer">Login</button>
                            <button className="flex-1 h-12 bg-[linear-gradient(135deg,#4c1d95_0%,#9b1a37_100%)] text-white rounded-full text-sm font-bold tracking-widest uppercase cursor-pointer shadow-[0_0_20px_rgba(155,26,55,0.3)]">Contact</button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Navbar;
