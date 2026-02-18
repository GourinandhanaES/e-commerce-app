import React from 'react';

const Input = ({ label, error, className = '', ...props }) => {
    return (
        <div className={`space-y-1.5 ${className}`}>
            {label && (
                <label className="block text-sm font-bold text-slate-700 ml-1">
                    {label}
                </label>
            )}
            <input
                className={`w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-100 focus:border-primary-500 focus:bg-white focus:ring-4 focus:ring-primary-50 transition-all outline-none font-medium ${error ? 'border-red-300 ring-red-50' : ''
                    }`}
                {...props}
            />
            {error && <p className="text-xs font-medium text-red-500 ml-1">{error}</p>}
        </div>
    );
};

export default Input;
