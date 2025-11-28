import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../providers/AuthProvider';
import { Link, useNavigate } from 'react-router-dom';
import useAxiosPublic from '../../hooks/useAxiosPublic';

import Swal from 'sweetalert2';
import { Helmet } from 'react-helmet-async';

const SingUp = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { createUser, updateUserProfile } = useContext(AuthContext);
    const axiosPublic = useAxiosPublic();
    const navigate = useNavigate();

    const onSubmit = async (data) => {
        try {
            // 1️⃣ Firebase create user
            const result = await createUser(data.email, data.password);

            // 2️⃣ Update Firebase display name + photo
            await updateUserProfile(data.name, data.photo);

            // 3️⃣ Request JWT from backend
            const jwtRes = await axiosPublic.post('/jwt', { email: data.email });
            const token = jwtRes.data.token;
            localStorage.setItem("access-token", token);

            // 4️⃣ Save user to backend database
            await axiosPublic.post(
                '/user',
                {
                    email: data.email,
                    role: "student",
                    name: data.name,
                    photoURL: data.photo,
                },
                {
                    headers: {
                        authorization: `Bearer ${token}`,
                    }
                }
            );

            // 5️⃣ Success UI
            reset();
            Swal.fire({
                position: 'top',
                icon: 'success',
                title: 'User created successfully!',
                showConfirmButton: false,
                timer: 1500
            });

            // 6️⃣ Redirect
            navigate('/');

        } catch (error) {
            console.log(error);

            Swal.fire({
                position: 'top',
                icon: 'error',
                title: 'Registration failed',
                text: error.message,
                showConfirmButton: true,
            });
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-orange-100 via-orange-200 to-orange-300 flex items-center justify-center px-4 py-10">

            <Helmet>
                <title>Yoku | Register</title>
            </Helmet>

            <div className="w-full max-w-2xl bg-white shadow-2xl rounded-2xl border border-orange-300 p-10">

                <h1 className="text-4xl md:text-5xl font-extrabold text-orange-600 text-center mb-8">
                    Create Account
                </h1>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">

                    {/* Name */}
                    <div className="form-control">
                        <label className="label font-semibold text-gray-700">Name</label>
                        <input
                            type="text"
                            placeholder="Enter your name"
                            {...register("name", { required: true })}
                            className="input input-bordered w-full rounded-lg border-orange-300 focus:ring-2 focus:ring-orange-500"
                        />
                        {errors.name && <span className="text-red-600">Name is required</span>}
                    </div>

                    {/* Email */}
                    <div className="form-control">
                        <label className="label font-semibold text-gray-700">Email</label>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            {...register("email", { required: true })}
                            className="input input-bordered w-full rounded-lg border-orange-300 focus:ring-2 focus:ring-orange-500"
                        />
                        {errors.email && <span className="text-red-600">Email is required</span>}
                    </div>

                    {/* Photo URL */}
                    <div className="form-control">
                        <label className="label font-semibold text-gray-700">Photo URL</label>
                        <input
                            type="text"
                            placeholder="Your photo URL"
                            {...register("photo", { required: true })}
                            className="input input-bordered w-full rounded-lg border-orange-300 focus:ring-2 focus:ring-orange-500"
                        />
                        {errors.photo && <span className="text-red-600">Photo URL is required</span>}
                    </div>

                    {/* Password */}
                    <div className="form-control">
                        <label className="label font-semibold text-gray-700">Password</label>
                        <input
                            type="password"
                            placeholder="Enter password"
                            {...register("password", {
                                required: true,
                                minLength: 6,
                                maxLength: 20,
                                pattern: /(?=.*[!@#$%^&*])(?=.*[A-Z])/,
                            })}
                            className="input input-bordered w-full rounded-lg border-orange-300 focus:ring-2 focus:ring-orange-500"
                        />
                        {errors.password?.type === 'required' && <p className='text-red-600'>Password is required</p>}
                        {errors.password?.type === 'minLength' && <p className='text-red-600'>Password must be at least 6 characters</p>}
                        {errors.password?.type === 'maxLength' && <p className='text-red-600'>Password must be less than 20 characters</p>}
                        {errors.password?.type === 'pattern' && (
                            <p className="text-red-600">
                                Password must contain one uppercase letter and one special character
                            </p>
                        )}
                    </div>

                    {/* Button */}
                    <div className="form-control">
                        <button className="btn bg-orange-600 hover:bg-orange-700 text-white w-full rounded-lg text-lg font-bold shadow-md">
                            Sign Up
                        </button>
                    </div>

                    {/* Redirect */}
                    <div className="text-center text-gray-700">
                        Already have an account?{" "}
                        <Link to="/login" className="text-orange-600 font-bold hover:underline">
                            Login
                        </Link>
                    </div>

                </form>
            </div>
        </div>
    );
};

export default SingUp;
