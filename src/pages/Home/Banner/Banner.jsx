import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const Banner = () => {
    return (
        <div className='w-[100%] min-h-screen'>
            <Carousel>
                <div className='w-full ' >
                    <img  src="https://a6e8z9v6.stackpathcdn.com/yoku/demo1/wp-content/uploads/sites/2/2019/04/shutterstock_396913060-950x1075.jpg" />
            
                </div>
                <div className='w-full'>
                    <img src="https://a6e8z9v6.stackpathcdn.com/yoku/demo1/wp-content/uploads/sites/2/2019/04/shutterstock_1371365420-950x1075.jpg" />
                    
                </div>
                <div className='w-full'>
                    <img src="https://a6e8z9v6.stackpathcdn.com/yoku/demo1/wp-content/uploads/sites/2/2019/04/shutterstock_1371365447-950x1075.jpg" />
                    
                </div>
            </Carousel>
        </div>
    );
};

export default Banner;