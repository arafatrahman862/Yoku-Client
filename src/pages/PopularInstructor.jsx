import React from 'react';

const PopularInstructor = () => {
    return (
        <div>
           
            <div>
            <p className='font-bold md:text-6xl text-5xl my-12 text-center'>Popular Instructors</p>
            <div className='grid grid-cols-1 md:grid md:grid-cols-3 gap-4 my-12 '>
                <div className="card card-compact w-full bg-base-100 shadow-xl">
                    <figure><img  src="https://i.ibb.co/vHHMHCN/gallery1.jpg"  /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Mildred Reed</h2>
                        
                        
                    </div>
                </div>
                <div className="card card-compact w-full md:h-[80%] bg-base-100 shadow-xl">
                    <figure><img src="https://i.ibb.co/3dsBFpd/h1-blog-list-img-new.jpg"  /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Madison Diaz</h2>
                        
                        
                    </div>
                </div>
                <div className="card card-compact w-full md:h-[60%] bg-base-100 shadow-xl">
                    <figure><img src="https://i.ibb.co/LJ91vSq/main-home-video-gallery-1.jpg"  /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Brenda Robertson</h2>
                        
                        
                    </div>
                </div>
                <div className="card card-compact w-full md:h-[100%] bg-base-100 shadow-xl">
                    <figure><img src="https://i.ibb.co/6vcXVmb/main-home-video-gallery-3.jpg"  /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Madison Diaz</h2>
                       
                        
                    </div>
                </div>
                <div className="card card-compact w-full bg-base-100 shadow-xl">
                    <figure><img src="https://i.ibb.co/ZdmNjnn/main-home-video-gallery-2.jpg"  /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Brenda Robertson</h2>
                        
                       
                    </div>
                </div>
                <div className="card card-compact w-full bg-base-100 shadow-xl">
                    <figure><img src="https://i.ibb.co/nMcdGQk/main-home-video-gallery-4.jpg"  /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Mildred Reed</h2>
                        
                        
                    </div>
                </div>
            </div>
            </div>
        </div>
    );
};

export default PopularInstructor;