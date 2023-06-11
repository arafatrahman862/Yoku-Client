import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../providers/AuthProvider';
import { Link, useNavigate } from 'react-router-dom';
import * as api from '../../api.js';
import Swal from 'sweetalert2';


const SingUp = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { createUser, updateUserProfile } = useContext(AuthContext)
    const navigate = useNavigate();
    const onSubmit = data => {
        api.register({
            email: data.email,
            password: data.password,
            name: data.name,
        })
        .then(() => { })
        .catch(() => {})

        createUser(data.email, data.password)
            .then(result => {

                const loggedUser = result.user;
                console.log(loggedUser)
                updateUserProfile(data.name, data.photo)
                    .then(() => {
                        console.log('user profile info updated')
                        reset();
                        Swal.fire({
                            position: 'top-middle',
                            icon: 'success',
                            title: 'User created successfully',
                            showConfirmButton: false,
                            timer: 1500
                        })
                        navigate('/')
                    })
                    .catch(error => console.log(error))
            })
    }

    return (
        <div className="hero min-h-screen bg-white">
            <div className="hero-content flex-col ">
                <div className="text-center ">
                    <h1 className="text-5xl font-bold">Sing Up</h1>

                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body bg-orange-300  rounded">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-black font-semibold">Name</span>
                            </label>
                            <input type="text" placeholder="name" {...register("name", { required: true })} name='name' className="input input-bordered" />
                            {errors.name && <span className='text-red-600'>Name is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-black font-semibold">Email</span>
                            </label>
                            <input type="email" {...register("email", { required: true })} name='email' placeholder="email" className="input input-bordered" />
                            {errors.email && <span className='text-red-500'>Email is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-black font-semibold">Photo URL</span>
                            </label>
                            <input type="text" {...register("photo", { required: true })} name='photo' placeholder="photo url" className="input input-bordered" />
                            {errors.photo && <span className='text-red-500'>Photo URL is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-black font-semibold">Password</span>
                            </label>
                            <input type="password" {...register("password", {
                                required: true,
                                minLength: 6,
                                maxLength: 20,
                                pattern: /(?=.*[!@#$%^&*])(?=.*[!@#$*])/
                            })} name='password' placeholder="password" className="input input-bordered" />
                            {errors.password?.type === 'required' && <p className='text-red-600'>Password is required</p>}
                            {errors.password?.type === 'minLength' && <p className='text-red-600'>Password must be 6 characters</p>}
                            {errors.password?.type === 'maxLength' && <p className='text-red-600'>Password must be less then 20 characters</p>}
                            {errors.password?.type === 'pattern' && <p className='text-red-600'>Password must have one special character and one upper case</p>}


                        </div>
                        <div className="form-control mt-6">
                            <input className="btn btn-primary" type="submit" value="Sing Up" />

                        </div>
                        <div>
                            <p className='text-black'>Already Have an account? please <Link to="/login"><span className='text-blue-700'>login</span></Link></p>
                        </div>
                    </form>

                </div>
            </div>
        </div>
    );
};

export default SingUp;