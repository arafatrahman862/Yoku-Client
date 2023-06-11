import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import * as api from '../api.js';

const AddClass = () => {
    const { user } = useContext(AuthContext);

    const handleSubmit = async event => {
        try {
            event.preventDefault()
            const form = event.target;
            const className = form.className.value;
            const classImg = form.classImg.value;
            const instructorName = form.instructorName.value;
            const instructorEmail = form.instructorEmail.value;
            const availableSeats = form.availableSeats.value;
            const price = form.price.value;
            
            await api.addClass({
                className, classImg, instructorName, instructorEmail, availableSeats, price
            })
        } catch (error) {

        }
    }

    return (
        <div className="hero  bg-white">
            <div className="hero-content flex-col ">

                <div className="card  w-full max-w-lg shadow-2xl bg-base-100">
                    <form onSubmit={handleSubmit} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Class Name</span>
                            </label>
                            <input type="text" name='className' placeholder="Class Name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Class Image</span>
                            </label>
                            <input type="text" name='classImg' placeholder="Class Image" className="input input-bordered" />

                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Instructor Name</span>
                            </label>
                            <input type="text" name='instructorName' defaultValue={user?.displayName} placeholder="Instructor Name" className="input input-bordered" />

                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Instructor Email</span>
                            </label>
                            <input type="text" name='instructorEmail' defaultValue={user?.email} placeholder="Instructor Email" className="input input-bordered" />

                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Available Seats</span>
                            </label>
                            <input type="text" name='availableSeats' placeholder="Available Seats" className="input input-bordered" />

                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <input type="text" name='price' placeholder="Price" className="input input-bordered" />

                        </div>
                        <div className="form-control mt-6">
                            <input className="btn btn-primary" type="submit" value="Add Class" />

                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddClass;