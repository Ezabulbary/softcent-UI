import React from 'react';
import Hero from '../Pages/Hero/Hero';
import PageTitle from '../shared/PageTitle/PageTitle';
import './Home.css'

const Home = () => {
    return (
        <div>
            <PageTitle title='Home'></PageTitle>
            <Hero/>
        </div>
    );
};

export default Home;