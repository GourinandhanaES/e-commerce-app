import React from 'react';
import { useCart } from '../../context/CartContext';
import { formatPrice } from '../../utils/formatPrice';
import Button from '../common/Button';

const CartSummary = () => {
    const { totalPrice } = useCart();
    const tax = totalPrice * 0.18; // 18% GST example
    const finalTotal = totalPrice + tax;

    return (
        <div className="bg-white rounded-3xl border border-slate-100 p-8 space-y-6 shadow-sm sticky top-28">
            <h3 className="text-xl font-bold text-slate-800">Order Summary</h3>

            <div className="space-y-4">
                <div className="flex justify-between text-slate-500">
                    <span>Subtotal</span>
                    <span className="font-bold text-slate-800">{formatPrice(totalPrice)}</span>
                </div>
                <div className="flex justify-between text-slate-500">
                    <span>GST (18%)</span>
                    <span className="font-bold text-slate-800">{formatPrice(tax)}</span>
                </div>
                <div className="flex justify-between text-slate-500">
                    <span>Shipping</span>
                    <span className="text-green-600 font-bold uppercase text-xs bg-green-50 px-2.5 py-1 rounded-xl">
                        Free
                    </span>
                </div>
                <div className="pt-6 border-t border-slate-50">
                    <div className="flex justify-between items-baseline mb-1">
                        <span className="text-slate-800 font-bold">Estimated Total</span>
                        <span className="text-3xl font-black text-indigo-600 tracking-tight">
                            {formatPrice(finalTotal)}
                        </span>
                    </div>
                    <p className="text-[10px] text-slate-400 uppercase tracking-widest font-bold">
                        Prices are in Indian Rupees (INR)
                    </p>
                </div>
            </div>

            <div className="pt-4 space-y-3">
                <Button className="w-full py-4 text-lg">Checkout Now</Button>
                <p className="text-center text-xs text-slate-400">
                    Secure payment powered by Razorpay
                </p>
            </div>
        </div>
    );
};

export default CartSummary;
