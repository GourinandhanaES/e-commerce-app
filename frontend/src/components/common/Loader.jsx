import React from 'react';

const Loader = ({ full = false }) => {
    const content = (
        <div className="flex flex-col items-center justify-center space-y-4">
            <div className="relative">
                <div className="h-12 w-12 rounded-full border-4 border-slate-100"></div>
                <div className="absolute top-0 h-12 w-12 rounded-full border-4 border-primary-600 border-t-transparent animate-spin"></div>
            </div>
            <p className="text-sm font-bold text-slate-500 tracking-widest uppercase">
                Loading
            </p>
        </div>
    );

    if (full) {
        return (
            <div className="fixed inset-0 bg-white/80 backdrop-blur-sm z-[100] flex items-center justify-center">
                {content}
            </div>
        );
    }

    return content;
};

export default Loader;
