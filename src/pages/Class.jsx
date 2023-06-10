
import React, { useEffect, useState } from 'react';
import ClassDetail from './ClassDetail';

const Class = () => {
    const [classes, setClasses] = useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/class')
        .then(res => res.json())
        .then(data => setClasses(data))
    },[])
    // console.log(data)
    return (
        <div>
            <p className='font-bold text-6xl my-8  text-center'>Classes</p>
            
          <div className='grid grid-cols-3 gap-4 my-4'>
            {
                classes.map(classes => <ClassDetail
                key={classes._id}
                classes={classes}
                >

                </ClassDetail>)
            }
          </div>
        </div>
    );
};

export default Class;