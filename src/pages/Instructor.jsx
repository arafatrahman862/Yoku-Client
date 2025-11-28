import React, { useEffect, useState } from 'react';
import InstructorDetail from './InstructorDetail';
import { Helmet } from 'react-helmet-async';

const Instructor = () => {

    const [instructors, setInstructors] = useState([]);

    useEffect(() => {
        fetch('/instructor.json')
            .then(res => res.json())
            .then(data => setInstructors(data));
    }, []);

    return (
        <div className="px-4 md:px-10 py-10">
            <Helmet>
                <title>Yoku | Instructors</title>
            </Helmet>

            <p className="font-bold text-4xl md:text-6xl my-8 text-center">
                Instructors
            </p>

            <div
                className="
                grid
                grid-cols-1
                sm:grid-cols-2
                lg:grid-cols-3
                gap-6
                place-items-center
                "
            >
                {instructors.map((instructor) => (
                    <InstructorDetail
                        key={instructor.id}
                        instructor={instructor}
                    />
                ))}
            </div>
        </div>
    );
};

export default Instructor;
