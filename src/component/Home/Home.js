import React from 'react';
import Customer from '../Pages/Customer/Customer';
import Hero from '../Pages/Hero/Hero';
import Products from '../Pages/Products/Products';
import Work from '../Pages/Work/Work';
import PageTitle from '../shared/PageTitle/PageTitle';
import './Home.css'

const Home = () => {
    return (
        <div>
            <PageTitle title='Home' />
            <Hero/>
            <Customer/>
            <Work/>
            <Products/>
        </div>
    );
};

export default Home;