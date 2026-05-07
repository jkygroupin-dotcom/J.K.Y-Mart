import { create } from 'zustand';

const useStore = create((set) => ({
  // Auth
  user: null,
  setUser: (user) => set({ user }),
  logout: () => set({ user: null }),

  // Cart
  cart: [],
  addToCart: (product) =>
    set((state) => {
      const existing = state.cart.find((item) => item.id === product.id);
      if (existing) {
        return {
          cart: state.cart.map((item) =>
            item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
          ),
        };
      }
      return { cart: [...state.cart, { ...product, quantity: 1 }] };
    }),
  removeFromCart: (productId) =>
    set((state) => ({
      cart: state.cart.filter((item) => item.id !== productId),
    })),
  updateCartQuantity: (productId, quantity) =>
    set((state) => ({
      cart: state.cart.map((item) =>
        item.id === productId ? { ...item, quantity } : item
      ),
    })),
  clearCart: () => set({ cart: [] }),

  // Wishlist
  wishlist: [],
  addToWishlist: (product) =>
    set((state) => {
      const exists = state.wishlist.find((item) => item.id === product.id);
      if (exists) return { wishlist: state.wishlist };
      return { wishlist: [...state.wishlist, product] };
    }),
  removeFromWishlist: (productId) =>
    set((state) => ({
      wishlist: state.wishlist.filter((item) => item.id !== productId),
    })),

  // Products
  products: [],
  setProducts: (products) => set({ products }),
  filters: { priceRange: [0, 100000], rating: 0, category: 'all' },
  setFilters: (filters) => set({ filters }),
}));

export default useStore;
