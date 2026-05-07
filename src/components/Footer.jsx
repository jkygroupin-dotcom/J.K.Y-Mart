import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary text-light border-t border-slate-700">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold gradient-text mb-4">✨ J.K.Y Mart</h3>
            <p className="text-slate-400">Luxury shopping experience at your fingertips.</p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-bold mb-4">Shop</h4>
            <ul className="space-y-2 text-slate-400">
              <li><a href="#" className="hover:text-accent transition">All Products</a></li>
              <li><a href="#" className="hover:text-accent transition">Best Under ₹500</a></li>
              <li><a href="#" className="hover:text-accent transition">Flash Deals</a></li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="font-bold mb-4">Support</h4>
            <ul className="space-y-2 text-slate-400">
              <li><a href="#" className="hover:text-accent transition">Contact Us</a></li>
              <li><a href="#" className="hover:text-accent transition">FAQ</a></li>
              <li><a href="#" className="hover:text-accent transition">Shipping Info</a></li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-bold mb-4">Follow Us</h4>
            <div className="flex gap-4">
              <a href="#" className="hover:text-accent transition"><Facebook className="w-6 h-6" /></a>
              <a href="#" className="hover:text-accent transition"><Twitter className="w-6 h-6" /></a>
              <a href="#" className="hover:text-accent transition"><Instagram className="w-6 h-6" /></a>
              <a href="#" className="hover:text-accent transition"><Linkedin className="w-6 h-6" /></a>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-700 pt-8 flex flex-col md:flex-row justify-between items-center text-slate-400 text-sm">
          <p>&copy; 2026 J.K.Y Mart. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-accent transition">Privacy Policy</a>
            <a href="#" className="hover:text-accent transition">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
