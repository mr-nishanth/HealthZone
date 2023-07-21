// useStore.js
import useAuthStore from './useAuthStore';
import useUserStore from './useUserStore';

const useStore = () => {
    const authStore = useAuthStore();
    const userStore = useUserStore();

    return {
        isAuthenticated: authStore.isAuthenticated,
        user: authStore.user ?? useAuthStore.user,
    };
};

export default useStore;
