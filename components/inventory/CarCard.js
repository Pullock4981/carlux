"use client";

import { motion } from 'framer-motion';

const CarCard = ({ car }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ y: -5 }}
            transition={{ duration: 0.3 }}
            className="group relative bg-[#1a1a1a]/80 backdrop-blur-md border border-white/5 rounded-2xl overflow-hidden hover:border-[#D81B60]/50 transition-all duration-300"
        >
            {/* Image Container */}
            <div className="aspect-[16/10] overflow-hidden bg-zinc-900">
                <img
                    src={car.thumbnail}
                    alt={car.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 font-sans"
                />
                <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-black/60 backdrop-blur-md border border-white/10 rounded-full text-[10px] uppercase tracking-widest font-bold text-[#A8A2A1]">
                        {car.brand}
                    </span>
                </div>
            </div>

            {/* Content */}
            <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-[#D81B60] transition-colors">
                    {car.title}
                </h3>

                <div className="flex items-end justify-between mt-4">
                    <div>
                        <p className="text-xs text-[#A8A2A1] uppercase tracking-wider mb-1">Starting at</p>
                        <p className="text-2xl font-bold bg-gradient-to-r from-white to-[#A8A2A1] bg-clip-text text-transparent">
                            ${car.price.toLocaleString()}
                        </p>
                    </div>

                    <button className="w-32 h-10 bg-[linear-gradient(135deg,#4c1d95_0%,#9b1a37_100%)] text-white text-xs font-bold rounded-lg hover:bg-[linear-gradient(135deg,#9b1a37_0%,#4c1d95_100%)] transition-all cursor-pointer shadow-[0_0_15px_rgba(155,26,55,0.3)]">
                        VIEW DETAILS
                    </button>
                </div>
            </div>

            {/* Subtle Glow Effect */}
            <div className="absolute -inset-px bg-gradient-to-r from-[#9013fe]/0 via-[#9013fe]/0 to-[#9013fe]/0 group-hover:from-[#9013fe]/10 group-hover:via-[#9013fe]/5 group-hover:to-[#9013fe]/10 rounded-2xl -z-10 transition-all duration-500" />
        </motion.div>
    );
};

export default CarCard;
