import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import useStore from '../store/useStore';
import ProductCard from '../components/ProductCard';

const Wishlist = () => {
  const { wishlist } = useStore();

  if (wishlist.length === 0) {
    return (
      <>
        <Helmet>
          <title>Wishlist - J.K.Y Mart</title>
        </Helmet>
        <div className="max-w-7xl mx-auto px-4 py-16 text-center">
          <h1 className="text-4xl font-bold mb-4">Your Wishlist is Empty</h1>
          <p className="text-slate-600 dark:text-slate-400 mb-8">Add items to your wishlist to save them for later</p>
          <Link to="/" className="inline-block bg-accent text-white px-8 py-3 rounded-lg font-bold hover:bg-accent/90 transition">
            Start Shopping
          </Link>
        </div>
      </>
    );
  }

  return (
    <>
      <Helmet>
        <title>Wishlist - J.K.Y Mart</title>
      </Helmet>
      <div className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8">My Wishlist ({wishlist.length})</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {wishlist.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Wishlist;
