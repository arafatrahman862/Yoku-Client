import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const Banner = () => {
    return (
        <Carousel>
                <div>
                    <img src="https://images.pexels.com/photos/3984340/pexels-photo-3984340.jpeg?auto=compress&cs=tinysrgb&w=600" />
            <p className='text-6xl text-orange-400 -mt-96 '>Basic Yoga And Meditation For Beginer</p>
                </div>
                <div>
                    <img src="https://images.pexels.com/photos/4056535/pexels-photo-4056535.jpeg?auto=compress&cs=tinysrgb&w=600" />
                    <p className='text-6xl text-orange-400 -mt-96 '>Keeping Your Mind In Best Condition</p>
                </div>
                <div>
                    <img src="https://images.pexels.com/photos/5384538/pexels-photo-5384538.jpeg?auto=compress&cs=tinysrgb&w=600" />
                    <p className='text-6xl text-orange-400  '>A Complete WorkOut From Head To Toe</p>
                </div>
            </Carousel>
    );
};

export default Banner;