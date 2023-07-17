import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Hero } from './pages/Hero';
import { SignUp } from './pages/SignUp';
import { LogIn } from './pages/LogIn';
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
export default function App() {
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
                    <Route
                        path='/dashboard'
                        element={<Dashboard />}
                    />
                    <Route
                        path='/profile'
                        element={<Profile />}
                    />
                </Routes>
                <Footer />
            </BrowserRouter>
        </>
    );
}
