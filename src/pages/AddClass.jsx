import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import useAxiosSecure from '../hooks/useAxiosSecure';
import Swal from "sweetalert2";

const AddClass = () => {
    const { user } = useContext(AuthContext);
    const axiosSecure = useAxiosSecure();

    const handleSubmit = async (event) => {
        event.preventDefault();
        const form = event.target;

        const newClass = {
            class_name: form.className.value,
            img: form.classImg.value,
            instructor_name: form.instructorName.value,
            instructor_email: form.instructorEmail.value,
            available_seat: parseInt(form.availableSeats.value),
            price: parseFloat(form.price.value)
        };

        try {
            const res = await axiosSecure.post("/class", newClass);

            if (res.data.insertedId || res.data.acknowledged) {
                Swal.fire({
                    icon: "success",
                    title: "Class Added Successfully!",
                    timer: 1500,
                    showConfirmButton: false
                });
                form.reset();
            }

        } catch (error) {
            Swal.fire({
                icon: "error",
                title: "Failed to add class",
                text: error?.response?.data?.message,
            });
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-orange-100 to-orange-300 flex items-center justify-center px-4 py-12">

            <div className="w-full max-w-2xl bg-white rounded-2xl shadow-xl p-6 md:p-10 border border-orange-200">

                <h1 className="text-3xl font-extrabold text-orange-600 text-center mb-8">
                    Add a New Class
                </h1>

                {/* 🔥 Responsive Grid Form */}
                <form
                    onSubmit={handleSubmit}
                    className="grid grid-cols-1 md:grid-cols-2 gap-6"
                >

                    {/* Class Name */}
                    <div className="form-control md:col-span-2">
                        <label className="label font-semibold text-gray-700">
                            Class Name
                        </label>
                        <input
                            type="text"
                            name="className"
                            required
                            placeholder="Enter class name"
                            className="input input-bordered w-full rounded-lg border-orange-300 focus:ring-2 focus:ring-orange-500"
                        />
                    </div>

                    {/* Class Image */}
                    <div className="form-control md:col-span-2">
                        <label className="label font-semibold text-gray-700">
                            Class Image URL
                        </label>
                        <input
                            type="text"
                            name="classImg"
                            required
                            placeholder="Paste image URL"
                            className="input input-bordered w-full rounded-lg border-orange-300 focus:ring-2 focus:ring-orange-500"
                        />
                    </div>

                    {/* Instructor Name */}
                    <div className="form-control">
                        <label className="label font-semibold text-gray-700">
                            Instructor Name
                        </label>
                        <input
                            type="text"
                            name="instructorName"
                            defaultValue={user?.displayName}
                            readOnly
                            className="input input-bordered w-full rounded-lg bg-gray-100 border-orange-300"
                        />
                    </div>

                    {/* Instructor Email */}
                    <div className="form-control">
                        <label className="label font-semibold text-gray-700">
                            Instructor Email
                        </label>
                        <input
                            type="email"
                            name="instructorEmail"
                            defaultValue={user?.email}
                            readOnly
                            className="input input-bordered w-full rounded-lg bg-gray-100 border-orange-300"
                        />
                    </div>

                    {/* Seats */}
                    <div className="form-control">
                        <label className="label font-semibold text-gray-700">
                            Available Seats
                        </label>
                        <input
                            type="number"
                            name="availableSeats"
                            min="1"
                            required
                            placeholder="Number of seats"
                            className="input input-bordered w-full rounded-lg border-orange-300 focus:ring-2 focus:ring-orange-500"
                        />
                    </div>

                    {/* Price */}
                    <div className="form-control">
                        <label className="label font-semibold text-gray-700">
                            Price (USD)
                        </label>
                        <input
                            type="number"
                            name="price"
                            min="1"
                            required
                            placeholder="Enter price"
                            className="input input-bordered w-full rounded-lg border-orange-300 focus:ring-2 focus:ring-orange-500"
                        />
                    </div>

                    {/* Submit Button */}
                    <div className="form-control md:col-span-2 pt-2">
                        <button
                            type="submit"
                            className="btn bg-orange-600 hover:bg-orange-700 text-white w-full rounded-lg text-lg font-bold shadow-md"
                        >
                            Add Class
                        </button>
                    </div>

                </form>
            </div>
        </div>
    );
};

export default AddClass;
