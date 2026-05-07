import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
} from 'firebase/auth';
import { auth } from '../config/firebase';

const googleProvider = new GoogleAuthProvider();

const useAuthStore = create(
  persist(
    (set) => ({
      user: null,
      loading: true,
      error: null,

      setUser: (user) => set({ user }),

      signUp: async (email, password) => {
        try {
          set({ loading: true, error: null });
          const result = await createUserWithEmailAndPassword(auth, email, password);
          set({ user: result.user });
          return result.user;
        } catch (error) {
          set({ error: error.message });
          throw error;
        } finally {
          set({ loading: false });
        }
      },

      signIn: async (email, password) => {
        try {
          set({ loading: true, error: null });
          const result = await signInWithEmailAndPassword(auth, email, password);
          set({ user: result.user });
          return result.user;
        } catch (error) {
          set({ error: error.message });
          throw error;
        } finally {
          set({ loading: false });
        }
      },

      signInWithGoogle: async () => {
        try {
          set({ loading: true, error: null });
          const result = await signInWithPopup(auth, googleProvider);
          set({ user: result.user });
          return result.user;
        } catch (error) {
          set({ error: error.message });
          throw error;
        } finally {
          set({ loading: false });
        }
      },

      logOut: async () => {
        try {
          set({ loading: true });
          await signOut(auth);
          set({ user: null });
        } catch (error) {
          set({ error: error.message });
          throw error;
        } finally {
          set({ loading: false });
        }
      },

      initializeAuth: () => {
        return new Promise((resolve) => {
          const unsubscribe = onAuthStateChanged(auth, (user) => {
            set({ user, loading: false });
            resolve(user);
          });
        });
      },
    }),
    {
      name: 'auth-store',
      partialize: (state) => ({ user: state.user }),
    }
  )
);

export default useAuthStore;
