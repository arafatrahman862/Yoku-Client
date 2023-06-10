import React from 'react';
import Banner from '../Banner/Banner';
import PopularClass from '../../PopularClass';
import PopularInstructor from '../../PopularInstructor';
import ExtraSection from '../../ExtraSection';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <PopularClass></PopularClass>
            <PopularInstructor></PopularInstructor>
            <ExtraSection></ExtraSection>
        </div>
    );
};

export default Home;