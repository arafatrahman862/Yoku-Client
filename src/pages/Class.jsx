import React from 'react';
import ClassDetail from './ClassDetail';
import { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { Helmet } from 'react-helmet-async';
import useAxiosPublic from '../hooks/useAxiosPublic';
import { useQuery } from '@tanstack/react-query';

const Class = () => {
    const { user } = useContext(AuthContext);
    const axiosPublic = useAxiosPublic();

    // Load approved classes
    const { data: classes = [] } = useQuery({
        queryKey: ["approvedClasses"],
        queryFn: async () => {
            const res = await axiosPublic.get("/class");
            return res.data.filter(cls => cls.status === "approved");
        }
    });

    // Load available seats
    const { data: seatsData = {} } = useQuery({
        queryKey: ["totalSeats"],
        queryFn: async () => {
            const res = await axiosPublic.get("/class/available/seats");
            return res.data;
        }
    });

    const totalSeat = seatsData.totalSeats || 0;

    return (
        <div className="px-4 md:px-10 py-8">
            <Helmet>
                <title>Yoku | Classes</title>
            </Helmet>

            <p className="font-bold text-4xl md:text-6xl my-6 text-center">
                Classes
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
                {classes.map(cls => (
                    <ClassDetail
                        key={cls._id}
                        classes={cls}
                        user={user}
                        totalSeat={totalSeat}
                    />
                ))}
            </div>
        </div>
    );
};

export default Class;
