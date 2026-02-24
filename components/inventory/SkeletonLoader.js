"use client";

const SkeletonLoader = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-7xl mx-auto px-4">
            {[...Array(6)].map((_, i) => (
                <div key={i} className="bg-[#424141] border border-white/5 rounded-2xl overflow-hidden animate-pulse">
                    <div className="aspect-[16/10] bg-[#222828]" />
                    <div className="p-6">
                        <div className="h-6 bg-[#222828] rounded-md w-3/4 mb-4" />
                        <div className="flex justify-between items-end mt-4">
                            <div className="space-y-2">
                                <div className="h-3 bg-[#222828] rounded-md w-16" />
                                <div className="h-8 bg-[#222828] rounded-md w-24" />
                            </div>
                            <div className="h-10 bg-[#222828] rounded-lg w-32" />
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default SkeletonLoader;
