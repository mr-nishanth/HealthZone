import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { Hero } from './pages/Hero';
import { SignUp } from './pages/SignUp';
import { LogIn } from './pages/LogIn';
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Toaster } from 'react-hot-toast';
import useAuthStore from './store/useAuthStore';
import { useEffect } from 'react';
export default function App() {
    const [isAuthenticated, getProfile] = useAuthStore((state) => [
        state.isAuthenticated,

        state.getProfile,
    ]);

    console.log({ isAuthenticated });

    useEffect(() => {
        getProfile();
    }, []);

    return (
        <>
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route
                        path='/'
                        element={
                            isAuthenticated ? (
                                <Navigate to='/dashboard' />
                            ) : (
                                <Hero />
                            )
                        }
                    />
                    <Route
                        path='/sign-up'
                        element={
                            isAuthenticated ? (
                                <Navigate to='/dashboard' />
                            ) : (
                                <SignUp />
                            )
                        }
                    />
                    <Route
                        path='/login'
                        element={
                            isAuthenticated ? (
                                <Navigate to='/dashboard' />
                            ) : (
                                <LogIn />
                            )
                        }
                    />

                    <Route
                        path='/dashboard'
                        element={
                            isAuthenticated ? (
                                <Dashboard />
                            ) : (
                                <Navigate to='/login' />
                            )
                        }
                    />
                    <Route
                        path='/profile'
                        element={
                            isAuthenticated ? (
                                <Profile />
                            ) : (
                                <Navigate to='/login' />
                            )
                        }
                    />
                </Routes>
                <Footer />
                <Toaster />
            </BrowserRouter>
        </>
    );
}
