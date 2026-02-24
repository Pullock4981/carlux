"use client";

import { useEffect, useState, use } from "react";
import Link from "next/link";
import Navbar from "@/components/inventory/Navbar";
import Footer from "@/components/inventory/Footer";
import { ChevronLeft, Star, ShoppingCart, ShieldCheck, CheckCircle, Info } from "lucide-react";

export default function CarDetailPage(props) {
    const params = use(props.params);
    const id = params.id;
    const [car, setCar] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [activeImage, setActiveImage] = useState(0);

    useEffect(() => {
        const fetchCar = async () => {
            try {
                setLoading(true);
                const res = await fetch(`https://dummyjson.com/products/${id}`);
                if (!res.ok) throw new Error("Could not find vehicle details");
                const data = await res.json();
                setCar(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };
        if (id) fetchCar();
    }, [id]);

    const formatPrice = (price) =>
        new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
            maximumFractionDigits: 0,
        }).format(price);

    if (loading) {
        return (
            <div className="min-h-screen bg-[#0a0a0a] text-white flex flex-col">
                <Navbar />
                <div className="flex-1 flex items-center justify-center">
                    <div className="w-12 h-12 border-4 border-[#D81B60]/20 border-t-[#D81B60] rounded-full animate-spin"></div>
                </div>
                <Footer />
            </div>
        );
    }

    if (error || !car) {
        return (
            <div className="min-h-screen bg-[#0a0a0a] text-white flex flex-col">
                <Navbar />
                <div className="flex-1 flex flex-col items-center justify-center p-6 text-center">
                    <div className="text-red-500 mb-4 text-6xl">⚠️</div>
                    <h2 className="text-2xl font-bold mb-2">Oops! Something went wrong</h2>
                    <p className="text-gray-400 mb-6">{error || "Vehicle not found"}</p>
                    <Link
                        href="/"
                        className="px-8 py-3 bg-white/5 border border-white/10 rounded-full hover:bg-white/10 transition-all"
                    >
                        Back to Inventory
                    </Link>
                </div>
                <Footer />
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-[#0a0a0a] text-white selection:bg-[#D81B60] selection:text-white">
            <Navbar />

            <main className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
                {/* Back Link */}
                <Link
                    href="/"
                    className="inline-flex items-center gap-2 text-gray-400 hover:text-white mb-8 transition-colors group"
                >
                    <ChevronLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                    <span className="text-sm font-medium uppercase tracking-widest">Back to Showroom</span>
                </Link>

                {/* Product Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 xl:gap-20">
                    {/* Left: Gallery */}
                    <div className="flex flex-col gap-4">
                        <div
                            className="relative aspect-[16/10] bg-black rounded-3xl overflow-hidden border border-white/5"
                            style={{ boxShadow: "0 20px 50px rgba(0,0,0,0.5)" }}
                        >
                            <img
                                src={car.images?.[activeImage] || car.thumbnail}
                                alt={car.title}
                                className="w-full h-full object-cover"
                            />

                            {/* Overlay Gradient */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
                        </div>

                        {/* Thumbnails */}
                        {car.images?.length > 1 && (
                            <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide">
                                {car.images.map((img, idx) => (
                                    <button
                                        key={idx}
                                        onClick={() => setActiveImage(idx)}
                                        className={`relative w-24 h-24 rounded-2xl overflow-hidden border-2 transition-all flex-shrink-0 ${activeImage === idx ? "border-[#D81B60] scale-95" : "border-transparent opacity-50 hover:opacity-100"
                                            }`}
                                    >
                                        <img src={img} className="w-full h-full object-cover" />
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Right: Info */}
                    <div className="flex flex-col">
                        <div className="mb-2">
                            <span className="text-[#D81B60] text-xs font-black uppercase tracking-[0.3em]">
                                {car.brand || car.category}
                            </span>
                        </div>

                        <h1 className="text-4xl sm:text-5xl font-black italic uppercase tracking-tighter mb-6">
                            {car.title}
                        </h1>

                        <div className="flex items-center gap-6 mb-8 p-4 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-sm">
                            <div className="flex flex-col">
                                <span className="text-gray-500 text-[10px] uppercase font-bold tracking-widest leading-none mb-1">Price</span>
                                <span className="text-2xl font-black italic text-white leading-none">
                                    {formatPrice(car.price)}
                                </span>
                            </div>
                            <div className="w-px h-10 bg-white/10" />
                            <div className="flex flex-col">
                                <span className="text-gray-500 text-[10px] uppercase font-bold tracking-widest leading-none mb-1">Rating</span>
                                <div className="flex items-center gap-1.5 leading-none">
                                    <Star className="w-4 h-4 text-emerald-500 fill-emerald-500" />
                                    <span className="text-xl font-bold">{car.rating}</span>
                                </div>
                            </div>
                        </div>

                        {/* Description */}
                        <div className="mb-10">
                            <h3 className="text-xs font-black uppercase tracking-widest text-gray-400 mb-4 flex items-center gap-2">
                                <Info size={14} className="text-[#D81B60]" />
                                Specifications & Highlights
                            </h3>
                            <p className="text-gray-300 leading-relaxed font-medium">
                                {car.description}
                            </p>
                        </div>

                        {/* Specifications Grid */}
                        <div className="grid grid-cols-2 gap-4 mb-10">
                            <div className="p-4 bg-white/5 border border-white/5 rounded-2xl">
                                <span className="block text-gray-500 text-[10px] font-bold uppercase tracking-widest mb-1">Status</span>
                                <span className={`text-sm font-bold flex items-center gap-2 ${car.stock > 0 ? "text-emerald-500" : "text-red-500"}`}>
                                    <CheckCircle size={14} />
                                    {car.stock > 0 ? `In Stock (${car.stock})` : "Sold Out"}
                                </span>
                            </div>
                            <div className="p-4 bg-white/5 border border-white/5 rounded-2xl">
                                <span className="block text-gray-500 text-[10px] font-bold uppercase tracking-widest mb-1">Category</span>
                                <span className="text-sm font-bold text-white capitalize">
                                    {car.category.replace("-", " ")}
                                </span>
                            </div>
                            <div className="p-4 bg-white/5 border border-white/5 rounded-2xl">
                                <span className="block text-gray-500 text-[10px] font-bold uppercase tracking-widest mb-1">Warranty</span>
                                <span className="text-sm font-bold text-white flex items-center gap-2">
                                    <ShieldCheck size={14} className="text-blue-500" />
                                    Premium Cover
                                </span>
                            </div>
                            <div className="p-4 bg-white/5 border border-white/5 rounded-2xl">
                                <span className="block text-gray-500 text-[10px] font-bold uppercase tracking-widest mb-1">Condition</span>
                                <span className="text-sm font-bold text-white">Elite Certified</span>
                            </div>
                        </div>

                        {/* CTA */}
                        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-8 lg:mt-auto">
                            <button className="flex-1 py-4 sm:h-14 bg-gradient-to-r from-[#4c1d95] to-[#9b1a37] text-white font-black italic uppercase tracking-[0.15em] text-[11px] sm:text-xs rounded-2xl hover:opacity-90 transition-all flex items-center justify-center gap-3 active:scale-[0.98] shadow-[0_10px_30px_rgba(155,26,55,0.3)] cursor-pointer">
                                <ShoppingCart size={16} className="sm:w-[18px] sm:h-[18px]" />
                                Reserve Vehicle
                            </button>
                            <button className="w-full sm:w-auto sm:h-14 px-8 py-4 sm:py-0 border border-white/10 hover:border-white/20 bg-white/5 rounded-2xl text-[10px] sm:text-[11px] font-black uppercase tracking-widest transition-all active:scale-[0.98] cursor-pointer">
                                Contact Specialist
                            </button>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />

            <style jsx global>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
        </div>
    );
}
