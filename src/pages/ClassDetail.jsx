import React from 'react';
import Swal from 'sweetalert2';
import useAxiosSecure from '../hooks/useAxiosSecure';

const ClassDetail = ({ classes, user, totalSeat }) => {
    const axiosSecure = useAxiosSecure();

    const { img, instructor_name, class_name, available_seat, price, _id } = classes;

    const isDisable = !user || totalSeat === 0 || available_seat === 0;

    async function joinClass() {
        try {
            await axiosSecure.post("/student/join", { class_id: _id });

            Swal.fire({
                position: 'top-center',
                icon: 'success',
                title: 'Class Selected Successfully',
                showConfirmButton: false,
                timer: 1500
            });
        } catch (error) {
            Swal.fire({
                position: 'top-center',
                icon: 'error',
                title: error?.response?.data?.message || 'Failed to join class',
                showConfirmButton: false,
                timer: 1500
            });
        }
    }

    return (
        <div className="w-full max-w-sm mx-auto">
            <div className="card bg-white shadow-xl rounded-xl overflow-hidden hover:shadow-2xl transition-all duration-300">

                {/* Image */}
                <figure>
                    <img
                        src={img}
                        alt={class_name}
                        className="w-full h-48 object-cover md:h-56"
                    />
                </figure>

                {/* Card Body */}
                <div className="card-body px-5 py-4 space-y-2">

                    <h2 className="card-title text-xl font-bold">
                        <span className="text-green-500">Class:</span> {class_name}
                    </h2>

                    <p className="font-semibold">
                        <span className="text-green-500">Instructor:</span> {instructor_name}
                    </p>

                    <p className="font-semibold">
                        <span className="text-green-500">Seats Left:</span>{" "}
                        {available_seat}
                    </p>

                    <p className="font-semibold">
                        <span className="text-green-500">Price:</span> ${price}
                    </p>

                    {/* Button / No Seats */}
                    {available_seat === 0 ? (
                        <div className="w-full bg-red-600 text-white text-center py-2 rounded-lg font-semibold shadow">
                            No Seats Available
                        </div>
                    ) : (
                        <button
                            onClick={joinClass}
                            disabled={isDisable}
                            className="btn w-full bg-green-500 text-white font-bold hover:bg-green-700 
                            disabled:bg-gray-400 disabled:cursor-not-allowed shadow"
                        >
                            Select Class
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ClassDetail;
