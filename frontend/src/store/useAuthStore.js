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
                set({ isAuthenticated: false, user: {} });
                return true;
            }
        } catch (error) {
            console.error('Error While Logout', error);
            return false;
        }
    },

    // USER
    getProfile: async () => {
        try {
            const response = await api.get('/api/v1/myprofile');
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
            const response = await api.put('/api/v1/update', {
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

export default useAuthStore;
