import { SideBar } from '../components/SideBar';
import UserList from '../components/UserList.jsx';
import useAuthStore from '../store/useAuthStore';

const Dashboard = () => {
    const [user, getAllUser, users] = useAuthStore((state) => [
        state.user,
        state.getAllUser,
        state.users,
    ]);
    console.log({ Role: user?.role });
    return (
        <div className='h-[79vh] w-full bg-slate-100 flex'>
            <SideBar />
            <div>
                {user?.role === 'admin' ? (
                    <div className='space-y-3 p-3'>
                        <div className=''>
                            <button
                                className='inline-flex w-full items-center justify-center rounded-md bg-black px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80'
                                type='button'
                                onClick={getAllUser}
                            >
                                Get All User
                            </button>
                        </div>
                        <div>
                            {users &&
                                users?.map((user) => (
                                    <UserList
                                        {...user}
                                        key={user._id}
                                    />
                                ))}
                        </div>
                    </div>
                ) : (
                    <h1 className='p-56  text-3xl text-red-600'>
                        Sorry!, Dashboard only for admin.
                    </h1>
                )}
            </div>
        </div>
    );
};

export default Dashboard;
