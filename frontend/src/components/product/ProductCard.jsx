import React from 'react';
import { ShoppingCart, Star, Heart } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { formatPrice } from '../../utils/formatPrice';
import Button from '../common/Button';

const ProductCard = ({ product }) => {
    const { addToCart } = useCart();

    return (
        <div className="bg-white rounded-[2.5rem] border border-slate-100/50 shadow-[0_8px_30px_rgb(0,0,0,0.02)] p-3 group transition-all duration-700 hover:shadow-[0_20px_50px_rgba(5,150,105,0.1)] hover:-translate-y-2.5">
            <div className="relative overflow-hidden rounded-[1.5rem] bg-slate-50 aspect-square mb-4">
                <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    onError={(e) => {
                        e.target.src = 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1000&auto=format&fit=crop';
                    }}
                />

                {/* Overlay Badges */}
                <div className="absolute top-4 left-4 flex flex-col space-y-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-x-[-10px] group-hover:translate-x-0">
                    <button className="bg-white/90 backdrop-blur p-2.5 rounded-xl shadow-sm hover:bg-white hover:text-red-500 transition-all">
                        <Heart size={18} />
                    </button>
                </div>

                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur shadow-sm px-3 py-2 rounded-2xl flex items-center space-x-1 text-[10px] font-black tracking-widest text-primary-600 uppercase">
                    <Star size={12} fill="currentColor" className="text-primary-500" />
                    <span>New</span>
                </div>

                {/* Quick View Button */}
                <div className="absolute inset-0 bg-slate-900/5 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Button variant="primary" className="scale-90 group-hover:scale-100 transition-transform duration-300">
                        Quick View
                    </Button>
                </div>
            </div>

            <div className="px-4 pb-3">
                <p className="text-[10px] font-black text-primary-500 uppercase tracking-[0.2em] mb-2">{product.category}</p>
                <h3 className="text-xl font-bold text-slate-900 mb-1 group-hover:text-primary-600 transition-colors line-clamp-1 tracking-tight">{product.name}</h3>
                <p className="text-slate-500 text-sm line-clamp-1 mb-4 leading-relaxed h-5 font-medium">{product.description}</p>

                <div className="flex items-center justify-between">
                    <div className="flex flex-col">
                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter">Price</span>
                        <span className="text-2xl font-black text-slate-900 tracking-tighter">{formatPrice(product.price)}</span>
                    </div>
                    <button
                        onClick={() => addToCart(product)}
                        className="p-4 bg-slate-50 text-slate-400 rounded-2xl hover:bg-slate-950 hover:text-white transition-all active:scale-90 shadow-sm"
                    >
                        <ShoppingCart size={22} />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
