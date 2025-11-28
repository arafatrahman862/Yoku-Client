import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

import pic1 from "../../../assets/1.jpg";
import pic2 from "../../../assets/2.jpg";
import pic3 from "../../../assets/3.jpg";

const Banner = () => {
    return (
        <div className="w-full min-h-screen">
            <Carousel>
                <div className="w-full">
                    <img src={pic1} alt="Banner 1" />
                </div>
                <div className="w-full">
                    <img src={pic2} alt="Banner 2" />
                </div>
                <div className="w-full">
                    <img src={pic3} alt="Banner 3" />
                </div>
            </Carousel>
        </div>
    );
};

export default Banner;
