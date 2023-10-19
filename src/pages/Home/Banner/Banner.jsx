import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';


const Banner = () => {
    return (
        <div className='w-full h-full'>
            <Carousel className='w-full h-1/2'>
                <div className='w-full h-full' >
                    <img className='object-cover'  src="https://i.ibb.co/87pmhHL/team-gallery.jpg" />
            
                </div>
                <div className='w-full h-full'>
                    <img className='object-cover'  src="https://i.ibb.co/kG1fTbC/team-single-gallery5.jpg" />
                    
                </div>
                <div className='w-full h-full'>
                    <img className='object-cover'  src="https://i.ibb.co/87pmhHL/team-gallery.jpg" />
                    
                </div>
            </Carousel>
             
        </div>
    );
};

export default Banner;