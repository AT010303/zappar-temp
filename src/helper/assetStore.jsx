import { create } from 'zustand';

export const useAssetStore = create((set) => ({
    loading : true,
    loaded : () => {
        set((state) => ({
            loading : state.loading = false
        }))
    },

}))