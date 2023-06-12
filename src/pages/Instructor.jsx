import React, { useEffect, useState } from 'react';
import InstructorDetail from './InstructorDetail';
import { Helmet } from 'react-helmet-async';

const Instructor = () => {

    const [instructors, setInstructors] = useState([])

    useEffect(() => {
        fetch('instructor.json')
            .then(res => res.json())
            .then(data => setInstructors(data))
    }, [])

    return (
        <div>
            <Helmet>
                <title>Yoku | Instructors</title>
            </Helmet>
            <p className='font-bold text-6xl my-12 text-center'>Instractors</p>

            <div className='grid grid-cols-3 gap-4 my-12'>
                {
                    instructors.map(instructor => <InstructorDetail
                        key={instructor.id}
                        instructor={instructor}
                    >

                    </InstructorDetail>)
                }
            </div>
        </div>
    );
};

export default Instructor;