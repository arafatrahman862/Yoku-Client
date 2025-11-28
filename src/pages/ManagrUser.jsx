import React from "react";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { FaUserShield, FaUserGraduate, FaUser } from "react-icons/fa";

const ManageUser = () => {
    const axiosSecure = useAxiosSecure();

    const { data: users = [], isLoading, refetch } = useQuery({
        queryKey: ["users"],
        queryFn: async () => {
            const res = await axiosSecure.get("/users");
            return res.data;
        },
    });

    const promoteUser = async (email, role) => {
        try {
            const url =
                role === "admin"
                    ? `/users/admin/${email}`
                    : `/users/instructor/${email}`;

            await axiosSecure.patch(url);

            Swal.fire({
                title: "Success!",
                text: `${email} is now ${role}!`,
                icon: "success",
            });

            refetch();
        } catch (err) {
            Swal.fire("Error", "Failed to promote user", "error");
            console.error(err);
        }
    };

    return (
        <div className="p-4 md:p-6 bg-gradient-to-r from-orange-100 via-white to-orange-50 min-h-screen">
            <h1 className="text-3xl md:text-4xl font-extrabold text-orange-600 mb-6 text-center">
                Manage Users
            </h1>

            {/* Loading Spinner */}
            {isLoading && (
                <div className="flex justify-center py-10">
                    <span className="loading loading-spinner text-orange-600 text-3xl"></span>
                </div>
            )}

            {/* DESKTOP TABLE */}
            {!isLoading && (
                <div className="hidden md:block overflow-x-auto shadow-2xl rounded-xl border border-orange-200 bg-white">
                    <table className="table w-full text-black">
                        <thead className="bg-gradient-to-r from-orange-500 to-orange-600 text-white text-lg">
                            <tr>
                                <th>#</th>
                                <th>User</th>
                                <th>Email</th>
                                <th>Role</th>
                                <th className="text-center">Actions</th>
                            </tr>
                        </thead>

                        <tbody>
                            {users.length === 0 ? (
                                <tr>
                                    <td colSpan="5" className="text-center p-8 text-gray-600 text-lg">
                                        No users found.
                                    </td>
                                </tr>
                            ) : (
                                users.map((user, index) => (
                                    <tr
                                        key={user._id}
                                        className={`transition-all duration-200 hover:bg-orange-50 ${index % 2 === 0 ? "bg-white" : "bg-orange-50/40"
                                            }`}
                                    >
                                        <td className="font-semibold">{index + 1}</td>

                                        <td className="font-semibold flex items-center gap-3">
                                            <div className="avatar">
                                                <div className="w-10 rounded-full ring ring-orange-300 ring-offset-2">
                                                    <img
                                                        src={user.photoURL || "/avatar.webp"}
                                                        alt={user.name}
                                                    />
                                                </div>
                                            </div>
                                            <span className="capitalize">{user.name}</span>
                                        </td>

                                        <td className="text-gray-600">{user.email}</td>

                                        <td>
                                            <span
                                                className={`px-4 py-1 rounded-full text-sm font-semibold flex items-center gap-1 w-fit
                          ${user.role === "admin"
                                                        ? "bg-red-100 text-red-700"
                                                        : user.role === "instructor"
                                                            ? "bg-blue-100 text-blue-700"
                                                            : "bg-green-100 text-green-700"
                                                    }`}
                                            >
                                                {user.role === "admin" && <FaUserShield />}
                                                {user.role === "instructor" && <FaUserGraduate />}
                                                {user.role === "student" && <FaUser />}
                                                {user.role}
                                            </span>
                                        </td>

                                        <td>
                                            <div className="flex justify-center gap-3 mx-3">
                                                <button
                                                    disabled={user.role === "admin"}
                                                    onClick={() => promoteUser(user.email, "admin")}
                                                    className="btn btn-sm bg-orange-500 hover:bg-orange-600 text-white shadow-md disabled:opacity-40"
                                                >
                                                    MAKE ADMIN
                                                </button>

                                                <button
                                                    disabled={user.role === "instructor"}
                                                    onClick={() => promoteUser(user.email, "instructor")}
                                                    className="btn btn-sm bg-blue-500 hover:bg-blue-700 text-white shadow-md disabled:opacity-40"
                                                >
                                                    MAKE INSTRUCTOR
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                </div>
            )}

            {/* MOBILE CARD VIEW */}
            <div className="md:hidden grid grid-cols-1 gap-6 mt-6">
                {users.map((user, index) => (
                    <div
                        key={user._id}
                        className="p-4 bg-white rounded-xl shadow-lg border border-orange-200 w-full"
                    >
                        {/* Top Row */}
                        <div className="flex items-start gap-4">

                            {/* Avatar */}
                            <div className="avatar">
                                <div className="w-16 rounded-full ring ring-orange-300 ring-offset-2">
                                    <img
                                        src={user.photoURL || "/avatar.webp"}
                                        alt={user.name}
                                        className="object-cover"
                                    />
                                </div>
                            </div>

                            {/* User info */}
                            <div className="flex flex-col min-w-0">
                                <h2 className="text-lg font-bold capitalize break-words">
                                    {user.name}
                                </h2>

                                <p className="text-gray-600 text-sm break-all">
                                    {user.email}
                                </p>

                                <span
                                    className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold mt-2 w-fit
                        ${user.role === "admin"
                                            ? "bg-red-100 text-red-700"
                                            : user.role === "instructor"
                                                ? "bg-blue-100 text-blue-700"
                                                : "bg-green-100 text-green-700"
                                        }`}
                                >
                                    {user.role === "admin" && <FaUserShield />}
                                    {user.role === "instructor" && <FaUserGraduate />}
                                    {user.role === "student" && <FaUser />}
                                    {user.role}
                                </span>
                            </div>
                        </div>

                        {/* Buttons */}
                        <div className="mt-4 grid grid-cols-2 gap-3 w-full">
                            <button
                                disabled={user.role === "admin"}
                                onClick={() => promoteUser(user.email, "admin")}
                                className="btn btn-sm bg-orange-500 hover:bg-orange-600 text-white w-full disabled:opacity-40"
                            >
                                MAKE ADMIN
                            </button>

                            <button
                                disabled={user.role === "instructor"}
                                onClick={() => promoteUser(user.email, "instructor")}
                                className="btn btn-sm bg-blue-500 hover:bg-blue-700 text-white w-full disabled:opacity-40"
                            >
                                MAKE INSTRUCTOR
                            </button>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    );
};

export default ManageUser;
