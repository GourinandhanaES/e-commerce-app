    import React from 'react';
    import ProductCard from './ProductCard';

    const ProductList = ({ products, loading }) => {
        if (loading) {
            return (
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                    {[1, 2, 3, 4].map((n) => (
                        <div key={n} className="bg-white rounded-2xl h-[400px] animate-pulse shadow-sm">
                            <div className="h-48 bg-slate-100 rounded-t-2xl"></div>
                            <div className="p-5 space-y-4">
                                <div className="h-4 bg-slate-100 rounded w-1/4"></div>
                                <div className="h-6 bg-slate-100 rounded w-3/4"></div>
                                <div className="h-10 bg-slate-100 rounded"></div>
                            </div>
                        </div>
                    ))}
                </div>
            );
        }

        return (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {products.map((product) => (
                    <ProductCard key={product._id || product.id} product={product} />
                ))}
            </div>
        );
    };

    export default ProductList;
