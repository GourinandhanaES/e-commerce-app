import React from 'react';

const Card = ({ children, className = '', hover = true }) => {
    return (
        <div
            className={`bg-white rounded-3xl border border-slate-100 shadow-sm p-6 ${hover ? 'hover:shadow-xl hover:-translate-y-1 transition-all duration-300' : ''
                } ${className}`}
        >
            {children}
        </div>
    );
};

export default Card;
