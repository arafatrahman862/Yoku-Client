import React from 'react';
import { useEffect, useState } from 'react';
import * as api from '../api.js';
import Swal from 'sweetalert2';


const SelectedClass = () => {
    const [joinedClasses, setJoinedClasses] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/student/classes', {
            headers: { authorization: 'Token: ' + localStorage.getItem('userAuth') }
        })
            .then(res => res.json())
            .then(setJoinedClasses)
    }, []);
    const handleDelete = deleted_id => {
       
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
                api.removeClass({ class_id: deleted_id }, localStorage.getItem('userAuth'))
                setJoinedClasses(joinedClasses.filter(({ _id }) => _id != deleted_id))
              Swal.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'
              )
            }
          })
    }
    return (
        <div className='grid grid-cols-3 my-12'>
            {
                joinedClasses.map(({ _id, img, instructor_name, class_name, available_seat, price, }) => <div className="card card-compact w-96 bg-base-100 shadow-xl">
                    <figure><img src={img} /></figure>
                    <div className="card-body">
                        <h2 className="card-title"><span className='text-green-400'>Class Name:</span> {class_name}</h2>
                        <p className='text-lg font-semibold'><span className='text-green-400'>Instructor Name:</span> {instructor_name}</p>
                        <p className='text-lg font-semibold'><span className='text-green-400'>Available Seat:</span> {available_seat}</p>
                        <p className='text-lg font-semibold'><span className='text-green-400'>Price:</span> ${price}</p>
                        <button onClick={() => handleDelete(_id)} className='btn bg-red-400 text-black hover:bg-red-800'>Delete</button>
                        <button className='btn bg-green-400 text-black hover:bg-green-800'>Pay</button>

                    </div>
                </div>)
            }

        </div>
    );
};

export default SelectedClass;