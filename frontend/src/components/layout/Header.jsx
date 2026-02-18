import { Link, NavLink, useNavigate } from 'react-router-dom';
import { ShoppingCart, Search, User, Menu, X } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import React from 'react';

const Header = () => {
  const { cartCount } = useCart();
  const [isSearchOpen, setIsSearchOpen] = React.useState(false);
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [searchQuery, setSearchQuery] = React.useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/products?search=${encodeURIComponent(searchQuery.trim())}`);
      setIsSearchOpen(false);
      setSearchQuery('');
    }
  };

  return (
    <header className="bg-white/80 backdrop-blur-xl sticky top-0 z-[60] border-b border-slate-100">
      <div className="container mx-auto px-4 py-4 max-w-7xl flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="group flex items-center space-x-2">
          <div className="w-10 h-10 bg-primary-600 rounded-xl flex items-center justify-center shadow-lg shadow-primary-100 group-hover:rotate-6 transition-transform">
            <span className="text-white font-black text-xl italic">D</span>
          </div>
          <span className="text-2xl font-black tracking-tight text-slate-900 group-hover:text-primary-600 transition-colors hidden sm:block">
            D-Mart
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-10">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `text-sm font-bold tracking-wide transition-colors ${
                isActive ? 'text-primary-600' : 'text-slate-500 hover:text-primary-600'
              }`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/products"
            className={({ isActive }) =>
              `text-sm font-bold tracking-wide transition-colors ${
                isActive ? 'text-primary-600' : 'text-slate-500 hover:text-primary-600'
              }`
            }
          >
            Shop
          </NavLink>
          <NavLink
            to="/cart"
            className={({ isActive }) =>
              `text-sm font-bold tracking-wide transition-colors ${
                isActive ? 'text-primary-600' : 'text-slate-500 hover:text-primary-600'
              }`
            }
          >
            Orders
          </NavLink>
        </nav>

        {/* Mobile Actions */}
        <div className="flex items-center space-x-2 md:space-x-4">
          {/* Search Button */}
          <button
            onClick={() => setIsSearchOpen(!isSearchOpen)}
            className={`p-2.5 rounded-full transition-all ${
              isSearchOpen ? 'bg-primary-50 text-primary-600' : 'text-slate-500 hover:bg-slate-50'
            }`}
          >
            {isSearchOpen ? <X size={20} /> : <Search size={20} />}
          </button>

          {/* Cart */}
          <Link
            to="/cart"
            className="group relative p-3 bg-slate-900 text-white rounded-2xl hover:bg-primary-600 hover:shadow-xl hover:shadow-primary-100 transition-all active:scale-95"
          >
            <ShoppingCart size={20} />
            {cartCount > 0 && (
              <span className="absolute -top-1.5 -right-1.5 bg-primary-500 text-white text-[10px] font-black rounded-full h-5 w-5 flex items-center justify-center ring-4 ring-white group-hover:scale-110 transition-transform">
                {cartCount}
              </span>
            )}
          </Link>

          {/* Hamburger Menu - Right Side */}
          <button
            className="md:hidden p-2 text-slate-500 ml-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-slate-100">
          <nav className="flex flex-col text-center space-y-4 px-4 py-4">
            <NavLink
              to="/"
              onClick={() => setIsMenuOpen(false)}
              className={({ isActive }) =>
                `text-base font-bold tracking-wide transition-colors ${
                  isActive ? 'text-primary-600' : 'text-slate-500 hover:text-primary-600'
                }`
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/products"
              onClick={() => setIsMenuOpen(false)}
              className={({ isActive }) =>
                `text-base font-bold tracking-wide transition-colors ${
                  isActive ? 'text-primary-600' : 'text-slate-500 hover:text-primary-600'
                }`
              }
            >
              Shop
            </NavLink>
            <NavLink
              to="/cart"
              onClick={() => setIsMenuOpen(false)}
              className={({ isActive }) =>
                `text-base font-bold tracking-wide transition-colors ${
                  isActive ? 'text-primary-600' : 'text-slate-500 hover:text-primary-600'
                }`
              }
            >
              Orders
            </NavLink>
          </nav>
        </div>
      )}

      {/* Search Bar Overlay */}
      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out bg-white border-b border-slate-100 ${
          isSearchOpen ? 'max-h-20 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="container mx-auto px-4 py-4 max-w-7xl">
          <form onSubmit={handleSearch} className="relative group">
            <Search
              className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-primary-500 transition-colors"
              size={20}
            />
            <input
              type="text"
              placeholder="Search for premium tech, lifestyle accessories..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-16 pr-8 py-4 bg-slate-50 rounded-2xl border-none focus:ring-2 focus:ring-primary-500/20 text-slate-900 font-medium placeholder:text-slate-400 transition-all"
              autoFocus={isSearchOpen}
            />
          </form>
        </div>
      </div>
    </header>
  );
};

export default Header;
