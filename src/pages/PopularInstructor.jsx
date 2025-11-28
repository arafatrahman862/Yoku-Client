import React from "react";
import tec1 from "../assets/tec1.jpg";
import tec2 from "../assets/tec2.jpg";
import tec3 from "../assets/tec3.jpg";
import tec4 from "../assets/tec4.jpg";
import tec5 from "../assets/tec5.jpg";
import tec6 from "../assets/tec6.jpg";

const PopularInstructor = () => {
    return (
        <div className="py-12">
            <p className="font-bold text-4xl md:text-6xl text-center mb-12">
                Popular Instructors
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 md:px-0">

                {/* Instructor 1 */}
                <div className="card bg-base-100 shadow-xl">
                    <figure>
                        <img src={tec1} alt="Instructor Mildred Reed" className="w-full" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">Mildred Reed</h2>
                    </div>
                </div>

                {/* Instructor 2 */}
                <div className="card bg-base-100 shadow-xl">
                    <figure>
                        <img src={tec2} alt="Instructor Madison Diaz" className="w-full" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">Madison Diaz</h2>
                    </div>
                </div>

                {/* Instructor 3 */}
                <div className="card bg-base-100 shadow-xl">
                    <figure>
                        <img src={tec3} alt="Instructor Brenda Robertson" className="w-full" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">Brenda Robertson</h2>
                    </div>
                </div>

                {/* Instructor 4 */}
                <div className="card bg-base-100 shadow-xl">
                    <figure>
                        <img
                            src={tec4}
                            alt="Instructor"
                            className="w-full"
                        />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">Sarah Johnson</h2>
                    </div>
                </div>

                {/* Instructor 5 */}
                <div className="card bg-base-100 shadow-xl">
                    <figure>
                        <img
                            src={tec5}
                            alt="Instructor"
                            className="w-full"
                        />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">Emily Carter</h2>
                    </div>
                </div>

                {/* Instructor 6 */}
                <div className="card bg-base-100 shadow-xl">
                    <figure>
                        <img
                            src={tec6}
                            alt="Instructor"
                            className="w-full"
                        />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">Olivia Martinez</h2>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default PopularInstructor;
