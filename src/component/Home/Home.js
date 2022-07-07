import React from 'react';
import Customer from '../Pages/Customer/Customer';
import Hero from '../Pages/Hero/Hero';
import Work from '../Pages/Work/Work';
import PageTitle from '../shared/PageTitle/PageTitle';
import './Home.css'

const Home = () => {
    return (
        <div>
            <PageTitle title='Home'></PageTitle>
            <Hero/>
            <Customer/>
            <Work/>
        </div>
    );
};

export default Home;