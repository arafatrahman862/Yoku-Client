import React from 'react';
import Banner from '../Banner/Banner';
import PopularClass from '../../PopularClass';
import PopularInstructor from '../../PopularInstructor';
import ExtraSection from '../../ExtraSection';
import { Helmet } from 'react-helmet-async';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Yoku | Home</title>
            </Helmet>
            <Banner></Banner>
            <PopularClass></PopularClass>
            <PopularInstructor></PopularInstructor>
            <ExtraSection></ExtraSection>
        </div>
    );
};

export default Home;