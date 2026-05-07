import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import HeroBanner from '../components/HeroBanner';
import ProductCard from '../components/ProductCard';
import useStore from '../store/useStore';

const Home = () => {
  const { products, setProducts } = useStore();

  useEffect(() => {
    // Mock products - Replace with Firebase fetch
    const mockProducts = [
      {
        id: 1,
        name: 'Premium Wireless Headphones',
        price: 8999,
        originalPrice: 15999,
        image: 'https://via.placeholder.com/300x200?text=Headphones',
        category: 'Electronics',
        rating: 4,
        reviews: 1250,
        discount: 44,
      },
      {
        id: 2,
        name: 'Luxury Watch Collection',
        price: 24999,
        originalPrice: 49999,
        image: 'https://via.placeholder.com/300x200?text=Watch',
        category: 'Fashion',
        rating: 5,
        reviews: 850,
        discount: 50,
      },
      {
        id: 3,
        name: 'Smart Home Device',
        price: 3999,
        image: 'https://via.placeholder.com/300x200?text=Smart+Home',
        category: 'Home',
        rating: 4,
        reviews: 450,
      },
      {
        id: 4,
        name: 'Premium Camera Kit',
        price: 59999,
        originalPrice: 99999,
        image: 'https://via.placeholder.com/300x200?text=Camera',
        category: 'Electronics',
        rating: 5,
        reviews: 320,
        discount: 40,
      },
    ];
    setProducts(mockProducts);
  }, [setProducts]);

  return (
    <>
      <Helmet>
        <title>J.K.Y Mart - Luxury Shopping Experience</title>
        <meta name="description" content="Premium e-commerce platform with luxury products" />
      </Helmet>

      <div className="max-w-7xl mx-auto px-4">
        {/* Hero Banner */}
        <HeroBanner />

        {/* Flash Deals Section */}
        <section className="my-16">
          <h2 className="text-4xl font-bold mb-8 gradient-text">🔥 Flash Deals</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>

        {/* Best Under 500 */}
        <section className="my-16">
          <h2 className="text-4xl font-bold mb-8 gradient-text">Best Under ₹500</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.slice(0, 2).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>

        {/* All Products */}
        <section className="my-16">
          <h2 className="text-4xl font-bold mb-8 gradient-text">Featured Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
