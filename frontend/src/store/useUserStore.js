import axios from 'axios';
import { create } from 'zustand';
import useAuthStore from './useAuthStore';

const api = axios.create({
    baseURL: 'http://localhost:3500',
    withCredentials: true,
});

const useUserStore = create((set) => ({
    setIsAuthenticated: (isAuthenticated) => {
        useAuthStore.getState().set({ isAuthenticated }); // Update the isAuthenticated field in useAuthStore
    },
    user: {},
    getProfile: async () => {
        try {
            const response = await api.get('/myprofile');
            console.log({ PROFILE_RESPONSE: response });
            if (response.status === 200) {
                set({
                    isAuthenticated: true,
                    user: response.data.user,
                });
                return response.data;
            }
        } catch (error) {
            console.error('Login failed:', error);
            return error;
        }
    },

    updateProfile: async (username, email, mobile) => {
        try {
            const response = await api.post('/api/v1/update', {
                name: username,
                email,
                mobile,
            });
            console.log({ UPDATE_PROFILE_RESPONSE: response });
            if (response.status === 200) {
                set({
                    user: response.data.user,
                });
                return response.data;
            }
        } catch (error) {
            console.error('Update Profile failed:', error);
            return error;
        }
    },
}));

export default useUserStore;
