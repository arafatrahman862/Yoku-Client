import React, { useEffect, useState } from "react";
import useAxiosPublic from "../hooks/useAxiosPublic";

const PopularClass = () => {
    const axiosPublic = useAxiosPublic();
    const [classes, setClasses] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        const fetchClasses = async () => {
            try {
                console.log("📡 Fetching /class ...");
                const res = await axiosPublic.get("/class");
                console.log("✅ Backend response:", res.data);

                const raw = Array.isArray(res.data) ? res.data : res.data.classes;

                if (!raw) {
                    setClasses([]);
                    setError("Backend did not return a list.");
                    return;
                }

                const popular = raw
                    .filter((cls) => cls.status === "approved") // you can remove this filter to test
                    .sort((a, b) => (b.number_of_students || 0) - (a.number_of_students || 0))
                    .slice(0, 6);

                setClasses(popular);
            } catch (err) {
                console.error("❌ Error fetching /class:", err);
                setError(err.message || "Failed to load classes.");
            } finally {
                setLoading(false);
            }
        };

        fetchClasses();
    }, [axiosPublic]);

    if (loading) {
        return (
            <p className="text-center text-xl py-10 font-bold">
                Loading popular classes...
            </p>
        );
    }

    if (error) {
        return (
            <div className="text-center text-red-600 font-semibold py-10">
                Error: {error}
            </div>
        );
    }

    if (!classes.length) {
        return (
            <div className="px-4 md:px-10 py-10">
                <p className="font-bold text-4xl md:text-6xl my-6 text-center">
                    Popular Classes
                </p>
                <p className="text-center text-gray-600 font-semibold">
                    No classes found. Check console for details.
                </p>
            </div>
        );
    }

    return (
        <div className="px-4 md:px-10 py-10">
            <p className="font-bold text-4xl md:text-6xl my-6 text-center">
                Popular Classes
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {classes.map(({ _id, class_name, number_of_students, img }) => (
                    <div
                        key={_id}
                        className="card card-compact bg-base-100 shadow-xl"
                    >
                        <figure>
                            <img
                                src={img}
                                alt={class_name}
                                className="w-full h-52 object-cover"
                            />
                        </figure>

                        <div className="card-body">
                            <h2 className="card-title">{class_name}</h2>
                            <p>{number_of_students || 0} Students Enrolled</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PopularClass;
