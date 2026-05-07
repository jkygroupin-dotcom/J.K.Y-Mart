import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, ShoppingCart, Heart, User, Menu, X, Moon, Sun } from 'lucide-react';
import useStore from '../store/useStore';

const Navbar = ({ darkMode, toggleDarkMode }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const { cart, wishlist, user } = useStore();

  const cartTotal = cart.reduce((sum, item) => sum + item.quantity, 0);
  const wishlistTotal = wishlist.length;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-slate-200 dark:border-slate-700">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 text-2xl font-bold gradient-text">
          <span className="text-3xl">✨</span> J.K.Y Mart
        </Link>

        {/* Search Bar - Desktop */}
        <div className="hidden md:flex flex-1 mx-8">
          <div className="w-full relative">
            <input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-2 rounded-full bg-light dark:bg-secondary border border-slate-300 dark:border-slate-600 focus:outline-none focus:ring-2 focus:ring-accent"
            />
            <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
          </div>
        </div>

        {/* Right Icons */}
        <div className="flex items-center gap-4">
          {/* Theme Toggle */}
          <button
            onClick={toggleDarkMode}
            className="p-2 hover:bg-slate-100 dark:hover:bg-secondary rounded-full transition"
          >
            {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>

          {/* Wishlist */}
          <Link to="/wishlist" className="relative p-2 hover:bg-slate-100 dark:hover:bg-secondary rounded-full transition">
            <Heart className="w-5 h-5" />
            {wishlistTotal > 0 && (
              <span className="absolute top-0 right-0 bg-accent text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {wishlistTotal}
              </span>
            )}
          </Link>

          {/* Cart */}
          <Link to="/cart" className="relative p-2 hover:bg-slate-100 dark:hover:bg-secondary rounded-full transition">
            <ShoppingCart className="w-5 h-5" />
            {cartTotal > 0 && (
              <span className="absolute top-0 right-0 bg-accent text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {cartTotal}
              </span>
            )}
          </Link>

          {/* User */}
          <Link to={user ? '/profile' : '/login'} className="p-2 hover:bg-slate-100 dark:hover:bg-secondary rounded-full transition">
            <User className="w-5 h-5" />
          </Link>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 hover:bg-slate-100 dark:hover:bg-secondary rounded-full transition"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-slate-200 dark:border-slate-700 p-4 space-y-4">
          <input
            type="text"
            placeholder="Search products..."
            className="w-full px-4 py-2 rounded-full bg-light dark:bg-secondary border border-slate-300 dark:border-slate-600 focus:outline-none"
          />
        </div>
      )}
    </nav>
  );
};

export default Navbar;
