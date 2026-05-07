import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Plus, Edit, Trash2 } from 'lucide-react';
import useStore from '../store/useStore';
import toast from 'react-hot-toast';

const Admin = () => {
  const { products, setProducts } = useStore();
  const [showAddForm, setShowAddForm] = useState(false);
  const [newProduct, setNewProduct] = useState({
    name: '',
    price: 0,
    category: '',
    image: '',
    rating: 0,
    reviews: 0,
  });

  const handleAddProduct = (e) => {
    e.preventDefault();
    const product = {
      ...newProduct,
      id: Date.now(),
      price: parseInt(newProduct.price),
    };
    setProducts([...products, product]);
    setNewProduct({ name: '', price: 0, category: '', image: '', rating: 0, reviews: 0 });
    setShowAddForm(false);
    toast.success('Product added successfully!');
  };

  const handleDeleteProduct = (id) => {
    setProducts(products.filter((p) => p.id !== id));
    toast.success('Product deleted!');
  };

  return (
    <>
      <Helmet>
        <title>Admin Dashboard - J.K.Y Mart</title>
      </Helmet>
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold">Admin Dashboard</h1>
          <button
            onClick={() => setShowAddForm(!showAddForm)}
            className="flex items-center gap-2 bg-accent text-white px-6 py-3 rounded-lg font-bold hover:bg-accent/90 transition"
          >
            <Plus className="w-5 h-5" /> Add Product
          </button>
        </div>

        {/* Add Product Form */}
        {showAddForm && (
          <div className="glass rounded-xl p-8 mb-8">
            <h2 className="text-2xl font-bold mb-6">Add New Product</h2>
            <form onSubmit={handleAddProduct} className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="Product Name"
                value={newProduct.name}
                onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
                className="px-4 py-2 rounded-lg border border-slate-300 dark:border-slate-600 bg-light dark:bg-secondary focus:outline-none focus:ring-2 focus:ring-accent"
                required
              />
              <input
                type="number"
                placeholder="Price"
                value={newProduct.price}
                onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
                className="px-4 py-2 rounded-lg border border-slate-300 dark:border-slate-600 bg-light dark:bg-secondary focus:outline-none focus:ring-2 focus:ring-accent"
                required
              />
              <input
                type="text"
                placeholder="Category"
                value={newProduct.category}
                onChange={(e) => setNewProduct({ ...newProduct, category: e.target.value })}
                className="px-4 py-2 rounded-lg border border-slate-300 dark:border-slate-600 bg-light dark:bg-secondary focus:outline-none focus:ring-2 focus:ring-accent"
                required
              />
              <input
                type="text"
                placeholder="Image URL"
                value={newProduct.image}
                onChange={(e) => setNewProduct({ ...newProduct, image: e.target.value })}
                className="px-4 py-2 rounded-lg border border-slate-300 dark:border-slate-600 bg-light dark:bg-secondary focus:outline-none focus:ring-2 focus:ring-accent"
                required
              />
              <button
                type="submit"
                className="md:col-span-2 bg-accent text-white py-2 rounded-lg font-bold hover:bg-accent/90 transition"
              >
                Add Product
              </button>
            </form>
          </div>
        )}

        {/* Products Table */}
        <div className="glass rounded-xl overflow-hidden">
          <table className="w-full">
            <thead className="bg-accent text-white">
              <tr>
                <th className="px-6 py-4 text-left font-bold">Product</th>
                <th className="px-6 py-4 text-left font-bold">Price</th>
                <th className="px-6 py-4 text-left font-bold">Category</th>
                <th className="px-6 py-4 text-left font-bold">Rating</th>
                <th className="px-6 py-4 text-left font-bold">Actions</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product.id} className="border-t border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-secondary transition">
                  <td className="px-6 py-4 font-semibold">{product.name}</td>
                  <td className="px-6 py-4">₹{product.price}</td>
                  <td className="px-6 py-4">{product.category}</td>
                  <td className="px-6 py-4">⭐ {product.rating}/5</td>
                  <td className="px-6 py-4 flex gap-4">
                    <button className="text-blue-500 hover:text-blue-700 transition">
                      <Edit className="w-5 h-5" />
                    </button>
                    <button
                      onClick={() => handleDeleteProduct(product.id)}
                      className="text-red-500 hover:text-red-700 transition"
                    >
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Admin;
