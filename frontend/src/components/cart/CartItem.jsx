import React from 'react';
import { Trash2, Plus, Minus } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { formatPrice } from '../../utils/formatPrice';

const CartItem = ({ item }) => {
    const { removeFromCart, updateQuantity } = useCart();

    return (
        <div className="premium-card flex flex-col md:flex-row items-center p-4 md:p-6 space-y-4 md:space-y-0 md:space-x-8">
            {/* Product Image */}
            <div className="w-24 h-24 md:w-32 md:h-32 rounded-xl overflow-hidden flex-shrink-0 bg-slate-100">
                <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                        e.target.src = 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1000&auto=format&fit=crop';
                    }}
                />
            </div>

            {/* Product Details */}
            <div className="flex-grow text-center md:text-left">
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">{item.category}</p>
                <h4 className="text-lg font-bold text-slate-800 leading-tight mb-1">{item.name}</h4>
                <p className="text-indigo-600 font-bold">${item.price}</p>
            </div>

            {/* Quantity Control */}
            <div className="flex items-center space-x-4">
                <div className="flex items-center bg-slate-50 border border-slate-100 rounded-xl p-1 shadow-inner">
                    <button
                        onClick={() => updateQuantity(item._id, Math.max(1, item.qty - 1))}
                        className="p-2 hover:bg-white hover:shadow-sm rounded-lg transition-all text-slate-400 hover:text-indigo-600"
                    >
                        <Minus size={16} />
                    </button>
                    <span className="w-10 text-center font-black text-slate-700">{item.qty}</span>
                    <button
                        onClick={() => updateQuantity(item._id, item.qty + 1)}
                        className="p-2 hover:bg-white hover:shadow-sm rounded-lg transition-all text-slate-400 hover:text-indigo-600"
                    >
                        <Plus size={16} />
                    </button>
                </div>

                <div className="h-8 w-px bg-slate-100 hidden md:block"></div>

                <button
                    onClick={() => removeFromCart(item._id)}
                    className="p-3 text-slate-300 hover:text-red-500 hover:bg-red-50 rounded-xl transition-all active:scale-90"
                    title="Remove item"
                >
                    <Trash2 size={20} />
                </button>
            </div>
        </div>
    );
};

export default CartItem;
