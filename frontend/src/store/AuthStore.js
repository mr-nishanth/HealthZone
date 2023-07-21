import axios from 'axios';
import { create } from 'zustand';

const api = axios.create({
    baseURL: 'http://localhost:3500',
    withCredentials: true,
});

const useAuthStore = create((set) => ({
    isAuthenticated: false,
    user: {},
    login: async (email, password) => {
        try {
            const response = await api.post('/api/v1/login', {
                email,
                password,
            });
            console.log({ LOGIN_RESPONSE: response });
            if (response.status === 200) {
                set({
                    isAuthenticated: true,
                    user: response.data.userObj,
                });
                return response.data;
            }
        } catch (error) {
            console.error('Login failed:', error);
            return error;
        }
    },

    register: async (username, password, email, mobile) => {
        try {
            const response = await api.post('/api/v1/register', {
                username,
                password,
                email,
                mobile,
            });
            console.log({ REGISTER_RESPONSE: response });
            if (response.status === 201) {
                set({
                    // isAuthenticated: true,
                    user: response.data.userObj,
                });
                return response.data;
            }
        } catch (error) {
            console.error('Registration failed:', error);
            return error;
        }
    },

    logout: async () => {
        try {
            const response = await api.get('/api/v1/logout');
            console.log({ LOGOUT_RESPONSE: response });
            if (response.status === 200) {
                set({ isAuthenticated: false, username: '', email: '' });
                return true;
            }
        } catch (error) {
            console.error('Error While Logout', error);
            return false;
        }
    },
}));

export default useAuthStore;
