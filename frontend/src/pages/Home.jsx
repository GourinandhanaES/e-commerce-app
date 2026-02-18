import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, ShieldCheck, Zap } from 'lucide-react';
import { useProducts } from '../hooks/useProducts';
import ProductList from '../components/product/ProductList';
import Button from '../components/common/Button';
import Loader from '../components/common/Loader';

const Home = () => {
    const { products, loading, error } = useProducts();
    const featuredProducts = products.slice(0, 4);

    return (
        <div className="space-y-24 pb-20">
            {/* Hero Section */}
            <section className="relative mt-4 px-4 sm:px-6 md:px-8">
                <div className="relative h-[650px] sm:h-[550px] md:h-[550px] rounded-[2rem] md:rounded-[4rem] overflow-hidden bg-slate-950 shadow-[0_40px_100px_rgba(0,0,0,0.2)]">
                    <img
                    src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2000&auto=format&fit=crop"
                    alt="Hero"
                    className="absolute inset-0 w-full h-full object-cover opacity-70 transition-transform duration-1000 hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-tr from-slate-950 via-slate-950/40 to-transparent flex flex-col justify-center p-6 sm:p-12 md:p-20 lg:p-32">
                    <div className="max-w-4xl space-y-8 sm:space-y-8 md:space-y-10 animate-in fade-in slide-in-from-bottom-12 duration-1000">
                        <div className="inline-flex items-center space-x-2 sm:space-x-3 bg-primary-500/10 backdrop-blur-xl px-3 py-1.5 sm:px-5 sm:py-2.5 rounded-2xl border border-primary-500/20">
                        <Sparkles size={16} className="text-primary-400 sm:text-primary-400" />
                        <span className="text-xs sm:text-sm font-black text-primary-100 uppercase tracking-[0.2em] sm:tracking-[0.3em]">
                            D-Mart Sale 2026
                        </span>
                        </div>

                        <h1 className="text-6xl sm:text-6xl md:text-6xl lg:text-[7rem] font-black text-white leading-[1] sm:leading-[0.9] md:leading-[0.85] tracking-tight md:tracking-tighter">
                        Pure <br />
                        <span className="text-primary-500">Luxury.</span>
                        </h1>

                        <p className="text-sm sm:text-base md:text-xl text-slate-300 max-w-xl leading-relaxed font-medium">
                        Elevate your lifestyle with our curated collection of premium essentials. Crafted for those who appreciate the finer things.
                        </p>

                        <div className="flex flex-wrap gap-4 sm:gap-6 pt-4 sm:pt-6">
                        <Link to="/products">
                            <button className="px-6 sm:px-10 py-3 sm:py-4 text-base sm:text-xl font-black bg-primary-600 text-white rounded-[2rem] hover:bg-primary-500 hover:shadow-[0_20px_60px_rgba(5,150,105,0.4)] transition-all active:scale-95 flex items-center space-x-2 sm:space-x-4">
                            <span>Discover More</span>
                            <ArrowRight size={20} sm={28} />
                            </button>
                        </Link>

                        <Link to="/products?category=electronics">
                            <button className="px-6 sm:px-10 py-3 sm:py-4 text-base sm:text-xl font-black bg-white/5 backdrop-blur-2xl text-white border border-white/20 rounded-[2rem] hover:bg-white/10 transition-all active:scale-95">
                            View Collection
                            </button>
                        </Link>
                        </div>
                    </div>
                    </div>
                </div>
            </section>


            {/* Featured Section */}
            <section className="container mx-auto px-4">
                <div className="flex items-end justify-between mb-16">
                    <div className="space-y-4">
                        <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tighter">Trending <span className="text-primary-500">Now.</span></h2>
                        <div className="h-2 w-24 bg-primary-600 rounded-full"></div>
                    </div>
                    <Link to="/products" className="group flex items-center space-x-3 text-slate-900 font-black text-lg">
                        <span className='hidden lg:block'>See All Collection</span>
                        <div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center group-hover:bg-primary-600 group-hover:text-white transition-all">
                            <ArrowRight size={20} />
                        </div>
                    </Link>
                </div>

                {loading ? (
                    <Loader />
                ) : error ? (
                    <div className="bg-slate-50 p-20 rounded-[4rem] border border-slate-100 text-center">
                        <p className="text-slate-400 font-bold mb-2 uppercase tracking-[0.3em] text-[10px]">Database connection needed</p>
                        <p className="text-slate-500 font-medium text-lg">{error}</p>
                    </div>
                ) : (
                    <ProductList products={featuredProducts} />
                )}
            </section>

            {/* Benefits Section */}
            <section className="bg-slate-50/50  rounded-[5rem] border-none sm:border sm:border-slate-100/50 ">
                <div className="container mx-auto px-4 max-w-6xl">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-20 ">
                        {[
                            { icon: <Zap className="text-primary-600" />, title: "Concierge Delivery", desc: "Premium white-glove delivery service for all luxury orders within 24h." },
                            { icon: <ShieldCheck className="text-primary-600" />, title: "Authentic Quality", desc: "Every item is verified by our expert team for 100% authenticity." },
                            { icon: <Sparkles className="text-primary-600" />, title: "Member Rewards", desc: "Earn D-Mart points on every purchase and unlock exclusive benefits." }
                        ].map((benefit, i) => (
                            <div key={i} className="flex flex-col items-center text-center space-y-6 group hover:bg-primary-600 rounded-md p-2">
                                <div className="bg-white p-8 rounded-[2.5rem] shadow-[0_10px_40px_rgba(0,0,0,0.03)] group-hover:shadow-[0_20px_50px_rgba(5,150,105,0.1)] transition-all duration-500 border border-slate-100">
                                    {React.cloneElement(benefit.icon, { size: 40 })}
                                </div>
                                <h3 className="text-2xl font-black text-slate-900 tracking-tight">{benefit.title}</h3>
                                <p className="text-slate-500 text-sm leading-relaxed font-medium max-w-[250px]">{benefit.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Newsletter Section */}
            <section className="container mx-auto px-4">
                <div className="bg-primary-600 rounded-[5rem] p-12 md:p-32 text-center space-y-12 relative overflow-hidden shadow-2xl shadow-primary-600/20">
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/10 rounded-full blur-[120px] -mr-64 -mt-64"></div>
                    <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-slate-950/20 rounded-full blur-[120px] -ml-64 -mb-64"></div>

                    <div className="relative z-10 space-y-6">
                        <h2 className="text-5xl md:text-8xl font-black text-white tracking-tighter leading-[0.9]">
                            Join the <br /> <span className="text-primary-950/40">D-Mart Club.</span>
                        </h2>
                        <p className="text-primary-50 text-xl max-w-2xl mx-auto font-medium opacity-90 leading-relaxed">
                            Subscribe to receive early access to new collection drops and members-only invitations.
                        </p>
                    </div>

                    <div className="relative z-10 flex flex-col md:flex-row items-center justify-center gap-6 pt-8">
                        <input
                            type="email"
                            placeholder="your@email.com"
                            className="w-full md:w-[450px] px-10 py-7 rounded-[2.5rem] bg-white focus:outline-none focus:ring-[15px] focus:ring-white/10 text-slate-950 font-black text-lg shadow-2xl placeholder:text-slate-300"
                        />
                        <button className="w-full md:w-auto px-16 py-7 bg-slate-950 text-white rounded-[2.5rem] font-black text-lg hover:bg-slate-900 transition-all active:scale-95 shadow-2xl shadow-black/40">
                            Subscribe Now
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
