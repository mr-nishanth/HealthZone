import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Hero } from './pages/Hero';
import { SignUp } from './pages/SignUp';
import { LogIn } from './pages/LogIn';
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Toaster } from 'react-hot-toast';
import useAuthStore from './store/AuthStore';
import { useEffect } from 'react';
export default function App() {
    const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
    console.log({ isAuthenticated });
    useEffect(() => {}, []);
    return (
        <>
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route
                        path='/'
                        element={<Hero />}
                    />
                    <Route
                        path='/sign-up'
                        element={<SignUp />}
                    />
                    <Route
                        path='/login'
                        element={<LogIn />}
                    />
                    {isAuthenticated && (
                        <>
                            <Route
                                path='/dashboard'
                                element={<Dashboard />}
                            />
                            <Route
                                path='/profile'
                                element={<Profile />}
                            />
                        </>
                    )}
                </Routes>
                <Footer />
                <Toaster />
            </BrowserRouter>
        </>
    );
}
