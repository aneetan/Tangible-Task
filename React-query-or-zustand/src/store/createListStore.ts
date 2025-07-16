import { create } from "zustand";
import type { PostData } from "../pages/PostList";

type Filter = 'all' | 'active' |'completed'

interface ListStore {
    items: PostData[];
    filter: Filter;
    setFilter: (filter: Filter) => void;
    setItems: (items: PostData[]) => void;
    addItem: (items: PostData) => void;
    updateItem: (id: string, updates: Partial<PostData>) => void;
    deleteItem: (id: string) => void;
    getFilteredItems: () => PostData[];
    getCounts: () => {
        total: number;
        active: number;
        completed: number;
    };
}

 export const useListStore = create<ListStore>((set, get) => ({
    items: [],
    filter: 'all',

    setFilter: (filter) => set({filter}),
    setItems: (items) => set({items}),

    addItem: (item) => set(state => ({ items: [...state.items, item] })),
    
    updateItem: (id, updates) => 
        set(state => ({
            items: state.items.map(item => 
                item.id === id ? { ...item, ...updates } : item
            )
        })),

    deleteItem: (id) => 
        set(state => ({
            items: state.items.filter(item => item.id !== id)
        })),

    getFilteredItems: () => {
        const { items, filter } = get();
        return items.filter(item => {
            if (filter === 'all') return true;
            if (filter === 'active') return item.status !== "completed";
            return item.status === "completed";
        });
    },

    getCounts: () => {
        const items = get().items;
        const completed = items.filter(item => item.status === "completed").length;
        return {
            total: items.length,
            active: items.length - completed,
            completed
        };
    },
}));



