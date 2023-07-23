const UserList = (user) => {
    return (
        <div className='card'>
            <h1>Name : {user?.name}</h1>
            <h1>Email : {user?.email}</h1>
            <h1>Mobile : {user?.mobile}</h1>
            <hr />
        </div>
    );
};

export default UserList;
