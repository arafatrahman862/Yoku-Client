import React from 'react';

const InstructorDetail = ({instructor}) => {

const {name, image, email } = instructor;

    return (
        <div >
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
                    <figure><img  src={image}  /></figure>
                    <div className="card-body">
                        <h2 className="card-title"><span className='text-green-400'>Instructor Name:</span> {name}</h2>
                        <p className='font-semibold text-lg'><span className='text-green-400'> Email:</span> {email}</p>
                        
                        
                    </div>
                </div>
        </div>
    );
};

export default InstructorDetail;