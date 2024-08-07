import { create } from "zustand";


interface AuthStore {
    user: string;
    logIn: () => void;
    logOut: () => void;
}

const useAuthStore = create<AuthStore>(set => ({
    user: '',
    logIn: () => set(store => ({ user: store.user = 'eddy.rhenals' })),
    logOut: () => set(store => ({ user: store.user = '' }))
}));

export default useAuthStore;