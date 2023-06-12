import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const SelectedClass = () => {
    const [joinedClasses, setJoinedClasses] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/student/classes', {
            headers: { authorization: 'Token: ' + localStorage.getItem('userAuth') }
        })
            .then(res => res.json())
            .then(setJoinedClasses)
    }, [])
    console.log(joinedClasses)
    return (
        <div>

        </div>
    );
};

export default SelectedClass;