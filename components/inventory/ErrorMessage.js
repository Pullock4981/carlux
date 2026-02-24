"use client";

import { AlertCircle, RefreshCcw } from 'lucide-react';

const ErrorMessage = ({ error }) => {
    return (
        <div className="flex flex-col items-center justify-center py-20 px-4">
            <div className="bg-red-500/10 border border-red-500/20 p-8 rounded-3xl max-w-md w-full text-center backdrop-blur-md">
                <AlertCircle className="w-12 h-12 text-red-500 mx-auto mb-4" />
                <h2 className="text-xl font-bold text-white mb-2">Something went wrong</h2>
                <p className="text-gray-400 mb-6">{error || "We couldn't load the inventory. Please try again later."}</p>
                <button
                    onClick={() => window.location.reload()}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-red-500 hover:bg-red-600 text-white font-bold rounded-xl transition-all shadow-lg shadow-red-500/20"
                >
                    <RefreshCcw className="w-4 h-4" />
                    Retry Connection
                </button>
            </div>
        </div>
    );
};

export default ErrorMessage;
