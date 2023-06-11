import React, { useEffect, useState } from 'react';

const ManagrUser = () => {
    const [users, setUsers] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/user')
            .then(res => res.json())
            .then(data => setUsers(data))
    }, [])
    return (
        <div>

            <div className="overflow-x-auto ">
                <table className="table text-black">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => <tr key={user._id}>
                                <th>{index + 1}</th>
                                <td>{user.name}</td>
                                <td>{user._id}</td>
                                <td>{user.role === 'admin' ? 'admin' :
                                    <button className="btn btn-ghost bg-orange-600  text-white">Make Admin</button>
                                }</td>
                                <td><button className="btn btn-ghost bg-orange-600  text-white">Make Instructor</button></td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManagrUser;