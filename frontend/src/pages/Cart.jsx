import React from 'react';
import { Link } from 'react-router-dom';
import { Trash2, ArrowLeft, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';
import CartItem from '../components/cart/CartItem';
import CartSummary from '../components/cart/CartSummary';
import Button from '../components/common/Button';

const Cart = () => {
    const { cartItems, cartCount, clearCart } = useCart();

    if (cartItems.length === 0) {
        return (
            <div className="flex flex-col items-center justify-center  space-y-8 animate-in fade-in zoom-in duration-500">
                <div className="relative">
                    <div className="bg-slate-100 p-12 rounded-[3rem]">
                        <ShoppingBag size={84} className="text-slate-300" />
                    </div>
                    <div className="absolute -bottom-2 -right-2 bg-emerald-500 p-4 rounded-2xl shadow-xl shadow-emerald-100">
                        <ShoppingBag size={24} className="text-white" />
                    </div>
                </div>
                <div className="text-center space-y-2">
                    <h2 className="text-4xl font-black text-slate-900 tracking-tight">Your cart is empty</h2>
                    <p className="text-slate-400 font-medium text-lg">Looks like you haven't discovered anything yet.</p>
                </div>
                <Link to="/products">
                    <Button className="flex items-center space-x-2 px-10 py-4 text-lg">
                        <ArrowLeft size={20} />
                        <span>Start Shopping</span>
                    </Button>
                </Link>
            </div>
        );
    }

    return (
        <div className="animate-in fade-in slide-in-from-bottom-8 duration-700">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
                <div className="space-y-1">
                    <h1 className="text-5xl font-black text-slate-900 tracking-tighter">Cart details</h1>
                    <p className="text-slate-400 font-bold uppercase text-xs tracking-[0.2em]">
                        Managing {cartCount} premium items
                    </p>
                </div>
                <button
                    onClick={clearCart}
                    className="group text-red-400 hover:text-red-500 font-bold flex items-center space-x-2 transition-all p-3 hover:bg-red-50 rounded-2xl"
                >
                    <Trash2 size={20} className="group-hover:rotate-12 transition-transform" />
                    <span>Empty Cart</span>
                </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                {/* Cart Items List */}
                <div className="lg:col-span-8 space-y-8">
                    <div className="bg-white rounded-[2.5rem] p-4 md:p-8 border border-slate-100 shadow-sm space-y-6">
                        {cartItems.map((item) => (
                            <CartItem key={item._id} item={item} />
                        ))}
                    </div>

                    <Link to="/products" className="inline-flex items-center space-x-2 text-slate-400 hover:text-indigo-600 font-bold transition-all group">
                        <div className="p-2 group-hover:bg-indigo-50 rounded-lg transition-all">
                            <ArrowLeft size={18} />
                        </div>
                        <span>Continue Shopping</span>
                    </Link>
                </div>

                {/* Order Summary */}
                <div className="lg:col-span-4">
                    <CartSummary />
                </div>
            </div>
        </div>
    );
};

export default Cart;
