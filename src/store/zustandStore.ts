import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface Item {
  id: string;
  title: string;
  image: string;
}

interface StoreState {
  favorites: Item[];
  cart: Item[];
  addToFavorites: (item: Item) => void;
  removeFromFavorites: (id: string) => void;
  addToCart: (item: Item) => void;
  removeFromCart: (id: string) => void;
}

export const useStore = create<StoreState>()(
  persist(
    (set, get) => ({
      favorites: [],
      cart: [],
      addToFavorites: (item) => {
        if (!get().favorites.find((f) => f.id === item.id)) {
          set((state) => ({ favorites: [...state.favorites, item] }));
        }
      },
      removeFromFavorites: (id) => {
        set((state) => ({
          favorites: state.favorites.filter((f) => f.id !== id),
        }));
      },
      addToCart: (item) => {
        if (!get().cart.find((c) => c.id === item.id)) {
          set((state) => ({ cart: [...state.cart, item] }));
        }
      },
      removeFromCart: (id) => {
        set((state) => ({ cart: state.cart.filter((c) => c.id !== id) }));
      },
    }),
    {
      name: 'shop-storage',
    },
  ),
);
