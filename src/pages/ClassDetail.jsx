import React from 'react';

const ClassDetail = ({classes}) => {

    const {img, instructor_name, class_name, available_seat, price} = classes;
    return (
        <div>
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
                    <figure><img src={img}  /></figure>
                    <div className="card-body">
                        <h2 className="card-title"><span  className='text-green-400'>Class Name:</span> {class_name}</h2>
                        <p className='text-lg font-semibold'><span className='text-green-400'>Instructor Name:</span> {instructor_name}</p>
                        <p className='text-lg font-semibold'><span className='text-green-400'>Available Seat:</span> {available_seat}</p>
                        <p className='text-lg font-semibold'><span className='text-green-400'>Price:</span> {price}</p>
                        
                    </div>
                </div>
        </div>
    );
};

export default ClassDetail;