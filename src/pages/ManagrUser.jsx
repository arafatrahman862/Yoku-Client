import React, { useEffect, useState } from 'react';
import * as api from '../api.js';

const ManagrUser = () => {
    const [users, setUsers] = useState([])
    useEffect(() => {
        fetch('https://assingment12-server-arafatrahman862.vercel.app/user')
            .then(res => res.json())
            .then(data => setUsers(data))
    }, []);
// console.log(users)
    const promoteUser = async (email, role) => {
        try {
            await api.promoteUser({ email, role }, localStorage.getItem("adminAuthToken"))
        } catch (error) {
            console.log('Promote error:',error);
        }
    }

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
                                <td>{user.role}</td>
                                <td>{user.role === 'admin' 
                                    ? <button onClick={() => promoteUser(user._id, 'instructor')} className="btn btn-ghost bg-orange-600  text-white">Make Instructor</button>
                                    : <button onClick={() => promoteUser(user._id, 'admin')} className="btn btn-ghost bg-orange-600  text-white">Make Admin</button>
                                }</td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManagrUser;