import { HeartPulseIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import SocialIcons from './SocialIcons';
import useAuthStore from '../store/useAuthStore';

const links = [
    {
        name: 'Privacy Policy',
        href: '#',
    },
    {
        name: 'Terms of Service',
        href: '#',
    },
    {
        name: 'Contact',
        href: '#',
    },
];

export function Footer() {
    const user = useAuthStore((state) => state.user);
    return (
        <footer className='relative overflow-hidden bg-white  py-8'>
            <div className='container relative z-10 mx-auto px-4'>
                <div className='-m-8 flex flex-wrap items-center justify-between'>
                    <div className='w-auto p-8'>
                        <Link to={'/'}>
                            <div className='inline-flex items-center'>
                                <HeartPulseIcon />
                                <span className='ml-4 text-lg font-bold'>
                                    {user?.name}
                                </span>
                            </div>
                        </Link>
                    </div>
                    <div className='w-auto p-8'>
                        <ul className='-m-5 flex flex-wrap items-center'>
                            {links?.map((link) => (
                                <li
                                    className='p-5'
                                    key={link?.name}
                                >
                                    <Link
                                        className='font-medium text-gray-600 hover:text-gray-700'
                                        to={link.href}
                                    >
                                        {link?.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className='w-auto p-8'>
                        <SocialIcons />
                    </div>
                </div>
            </div>
        </footer>
    );
}
