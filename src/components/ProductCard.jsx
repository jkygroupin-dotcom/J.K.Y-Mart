import { useState } from 'react';
import { Heart, ShoppingCart, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import useStore from '../store/useStore';
import toast from 'react-hot-toast';

const ProductCard = ({ product }) => {
  const [isWishlisted, setIsWishlisted] = useState(false);
  const { addToCart, addToWishlist, removeFromWishlist } = useStore();

  const handleAddToCart = () => {
    addToCart(product);
    toast.success('Added to cart!');
  };

  const handleWishlist = () => {
    if (isWishlisted) {
      removeFromWishlist(product.id);
      setIsWishlisted(false);
      toast.success('Removed from wishlist');
    } else {
      addToWishlist(product);
      setIsWishlisted(true);
      toast.success('Added to wishlist!');
    }
  };

  return (
    <div className="group glass rounded-2xl overflow-hidden hover:shadow-luxury transition-all duration-300">
      {/* Image */}
      <div className="relative overflow-hidden bg-light dark:bg-secondary h-48">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        {product.discount && (
          <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
            -{product.discount}%
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-4">
        {/* Category */}
        <p className="text-xs text-accent font-semibold mb-2">{product.category}</p>

        {/* Name */}
        <Link to={`/product/${product.id}`}>
          <h3 className="font-bold text-lg line-clamp-2 hover:text-accent transition mb-2">
            {product.name}
          </h3>
        </Link>

        {/* Rating */}
        <div className="flex items-center gap-2 mb-3">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-4 h-4 ${i < product.rating ? 'fill-yellow-400 text-yellow-400' : 'text-slate-300'}`}
              />
            ))}
          </div>
          <span className="text-xs text-slate-500">({product.reviews})</span>
        </div>

        {/* Price */}
        <div className="flex items-baseline gap-2 mb-4">
          <span className="text-2xl font-bold text-accent">₹{product.price}</span>
          {product.originalPrice && (
            <span className="text-sm text-slate-400 line-through">₹{product.originalPrice}</span>
          )}
        </div>

        {/* Actions */}
        <div className="flex gap-2">
          <button
            onClick={handleAddToCart}
            className="flex-1 bg-accent text-white py-2 rounded-lg font-semibold hover:bg-accent/90 transition flex items-center justify-center gap-2"
          >
            <ShoppingCart className="w-4 h-4" /> Add
          </button>
          <button
            onClick={handleWishlist}
            className={`p-2 rounded-lg border transition ${
              isWishlisted
                ? 'bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800'
                : 'border-slate-200 dark:border-slate-600 hover:border-red-200'
            }`}
          >
            <Heart className={`w-5 h-5 ${isWishlisted ? 'fill-red-500 text-red-500' : ''}`} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
