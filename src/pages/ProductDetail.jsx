import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Star, Heart, ShoppingCart } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import useStore from '../store/useStore';
import toast from 'react-hot-toast';

const ProductDetail = () => {
  const { id } = useParams();
  const { products, addToCart, addToWishlist } = useStore();
  const [quantity, setQuantity] = useState(1);
  const [isWishlisted, setIsWishlisted] = useState(false);

  const product = products.find((p) => p.id === parseInt(id)) || products[0];

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart(product);
    }
    toast.success(`Added ${quantity} item(s) to cart!`);
  };

  const handleWishlist = () => {
    addToWishlist(product);
    setIsWishlisted(!isWishlisted);
    toast.success(isWishlisted ? 'Removed from wishlist' : 'Added to wishlist!');
  };

  return (
    <>
      <Helmet>
        <title>{product?.name} - J.K.Y Mart</title>
      </Helmet>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Product Image */}
          <div className="flex flex-col gap-4">
            <div className="glass rounded-2xl overflow-hidden h-96">
              <img
                src={product?.image}
                alt={product?.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Product Details */}
          <div className="flex flex-col gap-6">
            <div>
              <p className="text-accent font-semibold mb-2">{product?.category}</p>
              <h1 className="text-4xl font-bold mb-4">{product?.name}</h1>

              {/* Rating */}
              <div className="flex items-center gap-2 mb-4">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${i < (product?.rating || 0) ? 'fill-yellow-400 text-yellow-400' : 'text-slate-300'}`}
                    />
                  ))}
                </div>
                <span className="text-slate-600">({product?.reviews} reviews)</span>
              </div>
            </div>

            {/* Price */}
            <div className="glass rounded-xl p-6">
              <div className="flex items-baseline gap-3 mb-4">
                <span className="text-4xl font-bold text-accent">₹{product?.price}</span>
                {product?.originalPrice && (
                  <>
                    <span className="text-xl text-slate-400 line-through">₹{product?.originalPrice}</span>
                    <span className="text-lg font-bold text-red-500">{product?.discount}% OFF</span>
                  </>
                )}
              </div>
              <p className="text-green-600 font-semibold">Free Shipping on this item</p>
            </div>

            {/* Quantity & Actions */}
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <label className="font-semibold">Quantity:</label>
                <div className="flex items-center border border-slate-300 dark:border-slate-600 rounded-lg">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-4 py-2 hover:bg-slate-100 dark:hover:bg-secondary"
                  >
                    −
                  </button>
                  <span className="px-6 py-2 font-semibold">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-4 py-2 hover:bg-slate-100 dark:hover:bg-secondary"
                  >
                    +
                  </button>
                </div>
              </div>

              <div className="flex gap-4">
                <button
                  onClick={handleAddToCart}
                  className="flex-1 bg-accent text-white py-3 rounded-lg font-bold hover:bg-accent/90 transition flex items-center justify-center gap-2 text-lg"
                >
                  <ShoppingCart className="w-6 h-6" /> Add to Cart
                </button>
                <button
                  onClick={handleWishlist}
                  className={`p-3 rounded-lg border transition ${
                    isWishlisted
                      ? 'bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800'
                      : 'border-slate-200 dark:border-slate-600'
                  }`}
                >
                  <Heart className={`w-6 h-6 ${isWishlisted ? 'fill-red-500 text-red-500' : ''}`} />
                </button>
              </div>
            </div>

            {/* Description */}
            <div className="glass rounded-xl p-6">
              <h3 className="font-bold text-lg mb-4">About this product</h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                Premium quality product with excellent features and durability. Perfect for those seeking luxury and performance.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
