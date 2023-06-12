
import React, { useEffect, useState } from 'react';
import ClassDetail from './ClassDetail';
import { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import * as api from '../api.js';
import { Helmet } from 'react-helmet-async';


const Class = () => {
    const { user } = useContext(AuthContext)
    const [classes, setClasses] = useState([])
    const [totalSeat, setTotalSeat] = useState(0);

    useEffect(() => {
        console.count('Class');
        api.getClasses({
            find: { status: 'approved' },
            limit: 10,
        }).then(data => {
            // console.log(data);
            setClasses(data)
        })

        api.availableSeats().then(setTotalSeat)
    }, [])
    return (
        <div>
            <Helmet>
                <title>Yoku | Classes</title>
            </Helmet>
            <p className='font-bold text-6xl my-8  text-center'>Classes</p>

            <div className='grid grid-cols-3 gap-4 my-4'>
                {
                    classes.map(classes => <ClassDetail
                        key={classes._id}
                        classes={classes}
                        user={user}
                        totalSeat={totalSeat}
                    />)
                }
            </div>
        </div>
    );
};

export default Class;