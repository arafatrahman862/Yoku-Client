import React from 'react';

const ExtraSection = () => {
    return (
        <div className='my-16'>
            <p className='font-bold text-6xl my-8 text-center'>We are featured in</p>
            <div className='flex gap-4 justify-evenly '>
                <img className='w-48' src="https://a6e8z9v6.stackpathcdn.com/yoku/demo1/wp-content/uploads/sites/2/2020/08/banner-5.png" alt="" />
                <img className='w-48' src="https://a6e8z9v6.stackpathcdn.com/yoku/demo1/wp-content/uploads/sites/2/2020/08/banner-4.png" alt="" />
                <img className='w-48' src="https://a6e8z9v6.stackpathcdn.com/yoku/demo1/wp-content/uploads/sites/2/2020/08/banner-3.png" alt="" />
                <img className='w-48' src="https://a6e8z9v6.stackpathcdn.com/yoku/demo1/wp-content/uploads/sites/2/2020/08/banner-2.png" alt="" />
                <img className='w-48' src="https://a6e8z9v6.stackpathcdn.com/yoku/demo1/wp-content/uploads/sites/2/2020/08/banner-1.png" alt="" />
            </div>
        </div>
    );
};

export default ExtraSection;