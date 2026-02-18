import React from 'react';
import { Search, Filter } from 'lucide-react';

const ProductFilter = ({ category, setCategory, searchTerm, setSearchTerm }) => {
    const categories = ['All', 'Electronics', 'Lifestyle', 'Fashion', 'Home'];

    return (
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-12">
            {/* Search Bar */}
            <div className="relative w-full md:w-1/2 group">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-primary-600 transition-colors" size={20} />
                <input
                    type="text"
                    placeholder="Search for premium products..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full bg-white border border-slate-100 pl-12 pr-4 py-4 rounded-2xl shadow-sm outline-none focus:ring-4 focus:ring-primary-50 focus:border-primary-400 transition-all font-medium"
                />
            </div>

            {/* Category Filter */}
            <div className="flex items-center space-x-2 w-full md:w-auto overflow-x-auto pb-2 scrollbar-hide">
                <div className="flex bg-slate-100 p-1.5 rounded-2xl">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setCategory(cat)}
                            className={`px-5 py-2.5 rounded-xl text-sm font-bold transition-all ${category === cat
                                ? 'bg-white text-primary-600 shadow-sm'
                                : 'text-slate-400 hover:text-slate-600'
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>
                <button className="bg-primary-600 text-white p-3 rounded-2xl hover:bg-primary-700 transition-all shadow-lg shadow-primary-100">
                    <Filter size={20} />
                </button>
            </div>
        </div>
    );
};

export default ProductFilter;
