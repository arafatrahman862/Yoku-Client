import React from "react";

import img1 from "../assets/tec1.jpg";
import img2 from "../assets/tec2.jpg";
import img3 from "../assets/tec3.jpg";
import img4 from "../assets/tec4.jpg";
import img5 from "../assets/tec5.jpg";
import img6 from "../assets/tec6.jpg";

const InstructorDetail = ({ instructor }) => {
    const { name, email, image } = instructor || {};

    // fallback images for instructors without photos
    const fallbackImages = [img1, img2, img3, img4, img5, img6];
    const fallbackImage = fallbackImages[name?.length % 6] || img1;

    return (
        <div className="w-full max-w-sm mx-auto">
            <div className="card bg-white shadow-xl rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300">

                {/* Image */}
                <figure>
                    <img
                        src={image || fallbackImage}
                        alt={name}
                        className="w-full h-56 md:h-64 object-cover"
                    />
                </figure>

                {/* Body */}
                <div className="card-body p-5 space-y-3">

                    <h2 className="text-xl font-bold text-gray-900 text-center">
                        {name}
                    </h2>

                    <p className="text-green-600 font-semibold">
                        Instructor Name: <span className="text-gray-900">{name}</span>
                    </p>

                    <p className="text-green-600 font-semibold">
                        Email: <span className="text-gray-900">{email}</span>
                    </p>

                </div>
            </div>
        </div>
    );
};

export default InstructorDetail;
