import { useForm } from 'react-hook-form';
import useAuthStore from '../store/useAuthStore';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
export function EditProfile() {
    const [user, updateProfile] = useAuthStore((state) => [
        state.user,
        state.updateProfile,
    ]);
    console.log({ user });

    const {
        register,
        handleSubmit,

        formState: { errors },
    } = useForm({ defaultValues: { ...user, username: user.name } });

    const onSubmit = async (data) => {
        console.log({ data });
        const { username, email, mobile } = data;
        const result = await updateProfile(username, email, mobile);

        console.log({ updateProfile: result });

        if (result.success) {
            toast.success('Update Successful');
        } else {
            toast.error('Update error');
        }
    };

    return (
        <div className='flex-col justify-start items-center m-6'>
            <form
                onSubmit={handleSubmit(onSubmit)}
                className='mt-8'
            >
                <div className='space-y-5'>
                    <div>
                        <label
                            htmlFor='name'
                            className='text-base font-medium text-gray-900'
                        >
                            {' '}
                            Full Name{' '}
                        </label>
                        <div className='mt-2'>
                            <input
                                className='flex h-10 w-72 rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50'
                                type='text'
                                id='name'
                                {...register('username', {
                                    required: 'Username is required',
                                })}
                                placeholder='Username'
                            />
                            {errors.username && (
                                <p>{errors.username.message}</p>
                            )}
                        </div>
                    </div>
                    <div>
                        <label
                            htmlFor='email'
                            className='text-base font-medium text-gray-900'
                        >
                            {' '}
                            Email address{' '}
                        </label>
                        <div className='mt-2'>
                            <input
                                className='flex h-10 w-72 rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50'
                                type='email'
                                placeholder='Email'
                                id='email'
                                {...register('email', {
                                    required: 'Email is required',
                                })}
                            />
                            {errors.email && <p>{errors.email.message}</p>}
                        </div>
                    </div>
                    <div>
                        <label
                            htmlFor='mobile'
                            className='text-base font-medium text-gray-900'
                        >
                            {' '}
                            Mobile Number{' '}
                        </label>
                        <div className='mt-2'>
                            <input
                                className='flex h-10 w-72 rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50'
                                type='text'
                                placeholder='Mobile Number'
                                id='mobile'
                                {...register('mobile', {
                                    required: 'Mobile Number is required',
                                })}
                            />
                            {errors.mobile && <p>{errors.mobile.message}</p>}
                        </div>
                    </div>

                    <div>
                        <button
                            type='submit'
                            className='rounded-md bg-teal-400 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-600/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600'
                        >
                            Save Profile
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
}
