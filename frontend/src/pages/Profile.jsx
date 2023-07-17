import { useState } from 'react';
import { SideBar } from '../components/SideBar';
import { UserInput } from '../components/UserInput';

const Profile = () => {
    const [editProfile, setEditProfile] = useState(false);

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
                            />
                            <UserInput
                                inputLabel='Email'
                                inputType='email'
                            />
                            <UserInput
                                inputLabel='Mobile Number'
                                inputType='text'
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
                            <p> Nishanth</p>
                        </div>
                        <div className='flex justify-start items-center mb-2'>
                            <h4>Email : </h4>
                            <p> nishanthtemp@gmail.com</p>
                        </div>
                        <div className='flex justify-start items-center mb-2'>
                            <h4>Mobile : </h4>
                            <p> 9876543210</p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Profile;
