import { Link } from 'react-router-dom';
import { Trash2, Plus, Minus } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import useStore from '../store/useStore';
import toast from 'react-hot-toast';

const Cart = () => {
  const { cart, removeFromCart, updateCartQuantity, clearCart } = useStore();

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const tax = Math.round(total * 0.18);
  const finalTotal = total + tax;

  const handleCheckout = () => {
    toast.success('Proceeding to checkout...');
    // Implement checkout logic
  };

  if (cart.length === 0) {
    return (
      <>
        <Helmet>
          <title>Cart - J.K.Y Mart</title>
        </Helmet>
        <div className="max-w-7xl mx-auto px-4 py-16 text-center">
          <h1 className="text-4xl font-bold mb-4">Your Cart is Empty</h1>
          <p className="text-slate-600 dark:text-slate-400 mb-8">Start shopping to add items to your cart</p>
          <Link to="/" className="inline-block bg-accent text-white px-8 py-3 rounded-lg font-bold hover:bg-accent/90 transition">
            Continue Shopping
          </Link>
        </div>
      </>
    );
  }

  return (
    <>
      <Helmet>
        <title>Cart - J.K.Y Mart</title>
      </Helmet>
      <div className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8">Shopping Cart</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {cart.map((item) => (
              <div key={item.id} className="glass rounded-xl p-6 flex gap-6">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-24 h-24 object-cover rounded-lg"
                />

                <div className="flex-1">
                  <h3 className="font-bold text-lg mb-2">{item.name}</h3>
                  <p className="text-accent font-bold mb-4">₹{item.price}</p>

                  {/* Quantity Controls */}
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => updateCartQuantity(item.id, Math.max(1, item.quantity - 1))}
                      className="p-2 hover:bg-slate-100 dark:hover:bg-secondary rounded-lg transition"
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="font-bold w-8 text-center">{item.quantity}</span>
                    <button
                      onClick={() => updateCartQuantity(item.id, item.quantity + 1)}
                      className="p-2 hover:bg-slate-100 dark:hover:bg-secondary rounded-lg transition"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                <div className="flex flex-col items-end justify-between">
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-500 hover:text-red-700 transition"
                  >
                    <Trash2 className="w-5 h-5" />
                  </button>
                  <p className="font-bold">₹{item.price * item.quantity}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="glass rounded-xl p-6 h-fit sticky top-24">
            <h2 className="text-2xl font-bold mb-6">Order Summary</h2>

            <div className="space-y-4 mb-6 pb-6 border-b border-slate-200 dark:border-slate-700">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span className="font-bold">₹{total}</span>
              </div>
              <div className="flex justify-between">
                <span>Tax (18%)</span>
                <span className="font-bold">₹{tax}</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping</span>
                <span className="font-bold text-green-600">FREE</span>
              </div>
            </div>

            <div className="flex justify-between text-2xl font-bold mb-6">
              <span>Total</span>
              <span className="text-accent">₹{finalTotal}</span>
            </div>

            <button
              onClick={handleCheckout}
              className="w-full bg-accent text-white py-3 rounded-lg font-bold hover:bg-accent/90 transition mb-4"
            >
              Proceed to Checkout
            </button>

            <button
              onClick={() => clearCart()}
              className="w-full border border-slate-300 dark:border-slate-600 py-3 rounded-lg font-bold hover:bg-slate-50 dark:hover:bg-secondary transition"
            >
              Clear Cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
