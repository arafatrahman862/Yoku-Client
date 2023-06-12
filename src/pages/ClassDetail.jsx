import React from 'react';
import * as api from '../api';
import Swal from 'sweetalert2';


const ClassDetail = ({ classes, user, totalSeat }) => {
    const { img, instructor_name, class_name, available_seat, price, _id } = classes;
    const isDisable = !user || totalSeat == 0;
    function joinClass() {
        
       
        api.joinClass({ class_id: _id }, localStorage.getItem('userAuth'))
        Swal.fire({
            position: 'top-center',
            icon: 'success',
            title: 'Added Successfull',
            showConfirmButton: false,
            timer: 1500
          })
    }
    return (
        <div>
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
                <figure><img src={img} /></figure>
                <div className="card-body">
                    <h2 className="card-title"><span className='text-green-400'>Class Name:</span> {class_name}</h2>
                    <p className='text-lg font-semibold'><span className='text-green-400'>Instructor Name:</span> {instructor_name}</p>
                    <p className='text-lg font-semibold'><span className='text-green-400'>Available Seat:</span> {available_seat}</p>
                    <p className='text-lg font-semibold'><span className='text-green-400'>Price:</span> ${price}</p>
                    {
                        totalSeat === 0 ? <div className="card card-compact w-96  shadow-xl bg-red-700"/>
                        :
                        <button onClick={joinClass} disabled={isDisable} className='btn bg-green-400 text-black hover:bg-green-800'>Select</button>
                    }

                </div>
            </div>
        </div>
    );
};

export default ClassDetail;