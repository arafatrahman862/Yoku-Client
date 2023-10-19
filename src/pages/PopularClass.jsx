import React, { useEffect, useState } from 'react';
import * as api from '../api.js';

const PopularClass = () => {
    const [classes, setClasses] = useState([]);

    useEffect(() => {
        const query = {
            find: { status: 'approved' },
            limit: 6,
            sort: { number_of_students: -1 }
        };
        api.getClasses(query).then(setClasses)

    }, [])
    return (
        <div>
            <p className='font-bold md:text-6xl text-5xl my-4 text-center'>Popular Classes</p>
            <div className='grid grid-cols-1 md:grid md:grid-cols-3'>

                {
                    classes.map(({ _id, class_name, number_of_students, img }) => <div className='grid grid-cols-1 md:grid md:grid-cols-1 gap-6 mx-4 my-4'>
                        <div className="card card-compact w-full md:h-[100%] bg-base-100  shadow-xl">
                            <figure><img  src={img} /></figure>
                            <div className="card-body">
                                <h2 className="card-title">{class_name}</h2>
                                <p>{number_of_students} Students Enrolled</p>

                            </div>
                        </div>

                    </div>)
                }
            </div>

        </div>
    );
};

export default PopularClass;