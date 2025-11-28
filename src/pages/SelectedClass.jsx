import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import useAxiosSecure from "../hooks/useAxiosSecure";

const SelectedClass = () => {
    const axiosSecure = useAxiosSecure();
    const [joinedClasses, setJoinedClasses] = useState([]);

    useEffect(() => {
        axiosSecure
            .get("/student/classes")
            .then((res) => setJoinedClasses(res.data))
            .catch((err) => console.error("Error loading classes:", err));
    }, [axiosSecure]);

    const handleDelete = (deleted_id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "This class will be removed from your selected list.",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete!",
        }).then(async (result) => {
            if (result.isConfirmed) {
                try {
                    await axiosSecure.post("/student/remove", { class_id: deleted_id });

                    setJoinedClasses(
                        joinedClasses.filter((cls) => cls._id !== deleted_id)
                    );

                    Swal.fire("Deleted!", "Class removed successfully.", "success");
                } catch (err) {
                    Swal.fire("Failed!", "Unable to remove the class.", "error");
                }
            }
        });
    };

    return (
        <div className="p-4 sm:p-6 lg:p-8">

            {/* No classes selected */}
            {joinedClasses.length === 0 && (
                <p className="text-center text-gray-600 font-semibold text-lg">
                    No classes selected yet.
                </p>
            )}

            {/* Responsive Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">

                {joinedClasses.map(
                    ({
                        _id,
                        img,
                        instructor_name,
                        class_name,
                        available_seat,
                        price,
                    }) => (
                        <div
                            key={_id}
                            className="bg-white rounded-xl shadow-lg border border-orange-200 overflow-hidden hover:shadow-2xl transition-all duration-300"
                        >
                            {/* Image */}
                            <figure className="h-48 md:h-56 w-full overflow-hidden">
                                <img
                                    src={img}
                                    alt={class_name}
                                    className="w-full h-full object-cover"
                                />
                            </figure>

                            {/* Content */}
                            <div className="p-4 space-y-2">

                                <h2 className="text-xl font-bold leading-tight">
                                    <span className="text-green-500">Class:</span> {class_name}
                                </h2>

                                <p className="font-semibold">
                                    <span className="text-green-500">Instructor:</span>{" "}
                                    {instructor_name}
                                </p>

                                <p className="font-semibold">
                                    <span className="text-green-500">Seats:</span>{" "}
                                    {available_seat}
                                </p>

                                <p className="font-semibold">
                                    <span className="text-green-500">Price:</span> ${price}
                                </p>

                                {/* Buttons */}
                                <div className="grid grid-cols-2 gap-3 pt-3">

                                    <button
                                        onClick={() => handleDelete(_id)}
                                        className="btn bg-red-500 hover:bg-red-700 text-white w-full rounded-md"
                                    >
                                        Delete
                                    </button>

                                    <button
                                        className="btn bg-green-500 hover:bg-green-700 text-white w-full rounded-md"
                                    >
                                        Pay
                                    </button>

                                </div>

                            </div>
                        </div>
                    )
                )}
            </div>
        </div>
    );
};

export default SelectedClass;
