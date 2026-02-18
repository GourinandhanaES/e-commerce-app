import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-slate-900 text-slate-400 py-16 mt-20">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
                    {/* Brand */}
                    <div className="col-span-1 md:col-span-1 space-y-6">
                        <Link to="/" className="text-2xl font-black bg-gradient-to-r from-primary-400 to-emerald-400 bg-clip-text text-transparent tracking-tighter">
                            D-Mart
                        </Link>
                        <p className="text-sm leading-relaxed max-w-xs text-slate-500 font-medium">
                            Redefining your shopping experience with curated premium tech and lifestyle products.
                        </p>
                        <div className="flex space-x-4">
                            <Github size={20} className="hover:text-primary-400 cursor-pointer transition-colors" />
                            <Twitter size={20} className="hover:text-primary-400 cursor-pointer transition-colors" />
                            <Instagram size={20} className="hover:text-primary-400 cursor-pointer transition-colors" />
                            <Linkedin size={20} className="hover:text-primary-400 cursor-pointer transition-colors" />
                        </div>
                    </div>

                    {/* Links */}
                    <div>
                        <h4 className="text-white font-bold mb-6 tracking-tight">Quick Links</h4>
                        <ul className="space-y-4 text-sm font-medium">
                            <li><Link to="/" className="hover:text-primary-400 transition-colors">Home</Link></li>
                            <li><Link to="/products" className="hover:text-primary-400 transition-colors">Products</Link></li>
                            <li><Link to="/cart" className="hover:text-primary-400 transition-colors">Cart</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-6 tracking-tight">Support</h4>
                        <ul className="space-y-4 text-sm font-medium">
                            <li><a href="#" className="hover:text-primary-400 transition-colors">Help Center</a></li>
                            <li><a href="#" className="hover:text-primary-400 transition-colors">Shipping</a></li>
                            <li><a href="#" className="hover:text-primary-400 transition-colors">Returns</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-6 tracking-tight">Newsletter</h4>
                        <p className="text-sm mb-4 text-slate-500 font-medium">Subscribe to receive updates and exclusive offers.</p>
                        <div className="relative group">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="w-full bg-slate-800/50 border border-slate-700/50 rounded-2xl px-4 py-3.5 text-white focus:outline-none focus:border-primary-500 focus:ring-4 focus:ring-primary-500/10 transition-all placeholder:text-slate-600"
                            />
                            <button className="absolute right-2 top-2 bg-primary-600 text-white px-4 py-1.5 text-sm font-bold rounded-xl hover:bg-primary-700 transition-all active:scale-95 shadow-lg shadow-primary-600/20">Join</button>
                        </div>
                    </div>
                </div>

                <div className="mt-16 pt-8 border-t border-slate-800/50 text-center text-xs font-medium text-slate-600">
                    <p>&copy; {new Date().getFullYear()} D-Mart. Built with MERN by Gouri.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
