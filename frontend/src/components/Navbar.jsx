import React from 'react';
import { Menu, X, HeartPulse } from 'lucide-react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import useAuthStore from '../store/AuthStore';

export function Navbar() {
    const navigate = useNavigate();
    const [isAuthenticated, logout, user] = useAuthStore((state) => [
        state.isAuthenticated,
        state.logout,
        state.user,
    ]);
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleLogout = () => {
        logout();
        navigate('/login');
    };
    return (
        <div className='relative w-full bg-slate-100  shadow-lg h-16'>
            <div className='mx-auto flex max-w-7xl items-center justify-between px-4 py-2 sm:px-6 lg:px-8'>
                <Link to={'/'}>
                    <div className='inline-flex items-center space-x-2'>
                        <span>
                            <HeartPulse />
                        </span>
                        <span className='font-bold'>Health Zone</span>
                    </div>
                </Link>
                <div className='hidden space-x-2 lg:block'>
                    {isAuthenticated ? (
                        <div className='flex space-x-2 items-center'>
                            <button
                                type='button'
                                className='rounded-md border border-black px-3 py-2 text-sm font-semibold text-black shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black'
                                onClick={handleLogout}
                            >
                                Logout
                            </button>
                            <h2 className='text-blue-600'>
                                {user?.name?.toUpperCase()}
                            </h2>
                        </div>
                    ) : (
                        <>
                            <Link to={'/sign-up'}>
                                <button
                                    type='button'
                                    className='rounded-md bg-transparent px-3 py-2 text-sm font-semibold text-black hover:bg-black/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black'
                                >
                                    Sign Up
                                </button>
                            </Link>
                            <Link to={'/login'}>
                                <button
                                    type='button'
                                    className='rounded-md border border-black px-3 py-2 text-sm font-semibold text-black shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black'
                                >
                                    Log In
                                </button>
                            </Link>
                        </>
                    )}
                </div>
                <div className='lg:hidden'>
                    <Menu
                        onClick={toggleMenu}
                        className='h-6 w-6 cursor-pointer'
                    />
                </div>
                {isMenuOpen && (
                    <div className='absolute inset-x-0 top-0 z-50 origin-top-right transform p-2 transition lg:hidden'>
                        <div className='divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5'>
                            <div className='px-5 pb-6 pt-5'>
                                <div className='flex items-center justify-between'>
                                    <Link to={'/'}>
                                        <div className='inline-flex items-center space-x-2'>
                                            <span>
                                                <HeartPulse />
                                            </span>
                                            <span className='font-bold'>
                                                Health Zone
                                            </span>
                                        </div>
                                    </Link>
                                    <div className='-mr-2'>
                                        <button
                                            type='button'
                                            onClick={toggleMenu}
                                            className='inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black'
                                        >
                                            <span className='sr-only'>
                                                Close menu
                                            </span>
                                            <X
                                                className='h-6 w-6'
                                                aria-hidden='true'
                                            />
                                        </button>
                                    </div>
                                </div>

                                <div className='mt-2 space-y-2'>
                                    <NavLink to='/sign-up'>
                                        <button
                                            type='button'
                                            className='mb-2  w-full rounded-md border border-black px-3 py-2 text-sm font-semibold text-black shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black'
                                        >
                                            Sign Up
                                        </button>
                                    </NavLink>
                                    <NavLink to={'/login'}>
                                        <button
                                            type='button'
                                            className='w-full rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black'
                                        >
                                            Log In
                                        </button>
                                    </NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
