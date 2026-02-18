import React from 'react';

const Button = ({ children, variant = 'primary', className = '', ...props }) => {
    const variants = {
        primary: 'bg-primary-600 text-white hover:bg-primary-700 shadow-md shadow-primary-100',
        secondary: 'bg-slate-100 text-slate-900 hover:bg-slate-200',
        outline: 'border-2 border-slate-200 text-slate-600 hover:border-primary-600 hover:text-primary-600',
        danger: 'bg-red-50 text-red-600 hover:bg-red-100',
        ghost: 'text-slate-500 hover:bg-slate-50',
    };

    return (
        <button
            className={`px-6 py-2.5 rounded-xl font-semibold transition-all active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed ${variants[variant]} ${className}`}
            {...props}
        >
            {children}
        </button>
    );
};

export default Button;
