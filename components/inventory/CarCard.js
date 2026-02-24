"use client";

import { motion } from 'framer-motion';

const CarCard = ({ car }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ y: -5 }}
            transition={{ duration: 0.3 }}
            className="group relative bg-[#424141] border border-white/5 rounded-2xl overflow-hidden hover:border-[#0B785E]/50 transition-all duration-300"
        >
            {/* Image Container */}
            <div className="aspect-[16/10] overflow-hidden bg-[#222828]">
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
                <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-[#0B785E] transition-colors">
                    {car.title}
                </h3>

                <div className="flex items-end justify-between mt-4">
                    <div>
                        <p className="text-xs text-[#A8A2A1] uppercase tracking-wider mb-1">Starting at</p>
                        <p className="text-2xl font-bold bg-gradient-to-r from-white to-[#A8A2A1] bg-clip-text text-transparent">
                            ${car.price.toLocaleString()}
                        </p>
                    </div>

                    <button className="w-32 h-10 bg-[#0B785E] text-white text-xs font-bold rounded-lg hover:bg-[#9B1A37] transition-all cursor-pointer">
                        VIEW DETAILS
                    </button>
                </div>
            </div>

            {/* Subtle Glow Effect */}
            <div className="absolute -inset-px bg-gradient-to-r from-[#0B785E]/0 via-[#0B785E]/0 to-[#0B785E]/0 group-hover:from-[#0B785E]/10 group-hover:via-[#0B785E]/5 group-hover:to-[#0B785E]/10 rounded-2xl -z-10 transition-all duration-500" />
        </motion.div>
    );
};

export default CarCard;
