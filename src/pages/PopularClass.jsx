import React from 'react';

const PopularClass = () => {
    return (
        <div>
            <p className='font-bold text-6xl my-4 text-center'>Popular Classes</p>
            <div className='grid grid-cols-3 gap-4 my-4'>
                <div className="card card-compact w-96 bg-base-100 shadow-xl">
                    <figure><img src="https://a6e8z9v6.stackpathcdn.com/yoku/demo1/wp-content/uploads/sites/2/2019/01/shutterstock_1556637371-950x1075.jpg"  /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Yamas and Niyamas</h2>
                        <p>192 Students Enrolled</p>
                        
                    </div>
                </div>
                <div className="card card-compact w-96 bg-base-100 shadow-xl">
                    <figure><img src="https://a6e8z9v6.stackpathcdn.com/yoku/demo1/wp-content/uploads/sites/2/2019/04/shutterstock_1450570574-950x1075.jpg"  /></figure>
                    <div className="card-body">
                        <h2 className="card-title">The Smart Flow Yoga</h2>
                        <p>190 Students Enrolled</p>
                        
                    </div>
                </div>
                <div className="card card-compact w-96 bg-base-100 shadow-xl">
                    <figure><img src="https://a6e8z9v6.stackpathcdn.com/yoku/demo1/wp-content/uploads/sites/2/2019/04/shutterstock_1408641290-950x1075.jpg"  /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Yoga for Beginners Course</h2>
                        <p>185 Students Enrolled</p>
                        
                    </div>
                </div>
                <div className="card card-compact w-96 bg-base-100 shadow-xl">
                    <figure><img src="https://a6e8z9v6.stackpathcdn.com/yoku/demo1/wp-content/uploads/sites/2/2019/04/shutterstock_1371365447-950x1075.jpg"  /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Nine days of Pranayama</h2>
                        <p>188 Students Enrolled</p>
                        
                    </div>
                </div>
                <div className="card card-compact w-96 bg-base-100 shadow-xl">
                    <figure><img src="https://a6e8z9v6.stackpathcdn.com/yoku/demo1/wp-content/uploads/sites/2/2019/04/shutterstock_1371365420-950x1075.jpg"  /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Mastering Anxiety</h2>
                        <p>182 Students Enrolled</p>
                       
                    </div>
                </div>
                <div className="card card-compact w-96 bg-base-100 shadow-xl">
                    <figure><img src="https://a6e8z9v6.stackpathcdn.com/yoku/demo1/wp-content/uploads/sites/2/2019/04/shutterstock_396913060-950x1075.jpg"  /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Self Care Through Ayurveda</h2>
                        <p>191 Students Enrolled</p>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PopularClass;