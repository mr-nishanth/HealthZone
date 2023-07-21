import { useState } from 'react';
import { SideBar } from '../components/SideBar';
import { UserInput } from '../components/UserInput';
import useAuthStore from '../store/AuthStore';

const Profile = () => {
    const [editProfile, setEditProfile] = useState(false);
    const [user] = useAuthStore((state) => [state.user]);

    return (
        <div className='flex  h-[79vh] w-full'>
            <SideBar />
            <div className='p-10 shadow-xl w-full'>
                <div className='flex justify-between items-center'>
                    <h1 className='font-serif font-medium '>User profile</h1>
                    <button
                        type='button'
                        className='rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-600/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600'
                        onClick={() => setEditProfile(!editProfile)}
                    >
                        Edit Profile
                    </button>
                </div>
                {editProfile ? (
                    <div className='flex-col justify-start items-center m-6'>
                        <form>
                            <UserInput
                                inputLabel='Username'
                                inputType='text'
                                value={user.name}
                            />
                            <UserInput
                                inputLabel='Email'
                                inputType='email'
                                value={user.email}
                            />
                            <UserInput
                                inputLabel='Mobile Number'
                                inputType='text'
                                value={user.mobile}
                            />
                            <button
                                type='button'
                                className='rounded-md bg-teal-400 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-600/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600'
                            >
                                Save Profile
                            </button>
                        </form>
                    </div>
                ) : (
                    <div className='flex-col justify-start items-center m-6'>
                        <div className='flex justify-start items-center mb-2'>
                            <h4>Username : </h4>
                            <p> {user.name}</p>
                        </div>
                        <div className='flex justify-start items-center mb-2'>
                            <h4>Email : </h4>
                            <p> {user.email}</p>
                        </div>
                        <div className='flex justify-start items-center mb-2'>
                            <h4>Mobile : </h4>
                            <p> {user.mobile}</p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Profile;
