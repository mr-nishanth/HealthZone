import { ArrowRight } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import useAuthStore from '../store/useAuthStore';
import { toast } from 'react-hot-toast';

export function LogIn() {
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const [login] = useAuthStore((state) => [state.login]);

    const onSubmit = async (data) => {
        const { email, password } = data;
        const result = await login(email, password);

        console.log({ LOGIN: result });
        if (result.success) {
            toast.success('Login Successful');
            navigate('/dashboard');
        } else {
            const message = result?.response?.data?.message ?? 'Login error';
            toast.error(message);
        }
    };

    return (
        <div className='h-[79vh] flex items-center justify-center bg-white px-4 py-10 sm:px-6 sm:py-16 lg:px-8'>
            <div className='xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md'>
                <h2 className='text-2xl font-bold leading-tight text-black'>
                    Log in to your account
                </h2>
                <p className='mt-2text-sm text-gray-600 '>
                    Don&apos;t have an account?{' '}
                    <Link
                        to={'/sign-up'}
                        className='font-semibold text-black transition-all duration-200 hover:underline'
                    >
                        Create a free account
                    </Link>
                </p>
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className='mt-8'
                >
                    <div className='space-y-5'>
                        <div>
                            <label
                                htmlFor=''
                                className='text-base font-medium text-gray-900'
                            >
                                {' '}
                                Email address{' '}
                            </label>
                            <div className='mt-2'>
                                <input
                                    className='flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50'
                                    type='email'
                                    {...register('email', {
                                        required: 'Email is required',
                                    })}
                                    placeholder='Email address'
                                />
                                {errors.email && <p>{errors.email.message}</p>}
                            </div>
                        </div>
                        <div>
                            <div className='flex items-center justify-between'>
                                <label
                                    htmlFor=''
                                    className='text-base font-medium text-gray-900'
                                >
                                    {' '}
                                    Password{' '}
                                </label>
                            </div>
                            <div className='mt-2'>
                                <input
                                    className='flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50'
                                    type='password'
                                    {...register('password', {
                                        required: 'Password is required',
                                    })}
                                    placeholder='Password'
                                />
                                {errors.password && (
                                    <p>{errors.password.message}</p>
                                )}
                            </div>
                        </div>
                        <div>
                            <button
                                type='submit'
                                className='inline-flex w-full items-center justify-center rounded-md bg-black px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80'
                            >
                                Get started{' '}
                                <ArrowRight
                                    className='ml-2'
                                    size={16}
                                />
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}
