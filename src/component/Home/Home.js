import React from 'react';
import Customer from '../Pages/Customer/Customer';
import Hero from '../Pages/Hero/Hero';
import PageTitle from '../shared/PageTitle/PageTitle';
import './Home.css'

const Home = () => {
    return (
        <div>
            <PageTitle title='Home'></PageTitle>
            <Hero/>
            <Customer/>
        </div>
    );
};

export default Home;