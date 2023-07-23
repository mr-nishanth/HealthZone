import { createBrowserRouter } from 'react-router-dom';

import ErrorPage from '../components/ErrorPage';
import Home from '../pages/Home';
import BaseLayout from '../layouts/BaseLayout';
import SignUp from '../pages/SignUp';
import SignUpTs from '../pages/SignUpTs';
// import LogIn from '../pages/LogIn';
import LogInTs from '../pages/LogInTs';
import Dashboard from '../pages/Dashboard';
import Profile from '../pages/Profile';

export const router = createBrowserRouter([
    {
        path: '/',
        id: 'Home',
        element: (
            <BaseLayout>
                <Home />
            </BaseLayout>
        ),

        errorElement: <ErrorPage />,
    },
    {
        path: '/sign-up',
        id: 'SignUp',
        element: (
            <BaseLayout>
                <SignUpTs />
                {/* <SignUp /> */}
            </BaseLayout>
        ),
        errorElement: <ErrorPage />,
    },
    {
        path: '/login',
        id: 'Login',
        element: (
            <BaseLayout>
                {/* <LogIn /> */}
                <LogInTs />
            </BaseLayout>
        ),
        errorElement: <ErrorPage />,
    },
    {
        path: '/dashboard',
        id: 'dashboard',
        element: (
            <BaseLayout>
                <Dashboard />
            </BaseLayout>
        ),
        errorElement: <ErrorPage />,
    },
    {
        path: '/profile',
        id: 'profile',
        element: (
            <BaseLayout>
                <Profile />
            </BaseLayout>
        ),
        errorElement: <ErrorPage />,
    },
]);
