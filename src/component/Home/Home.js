import React from 'react';
import About from '../Pages/About/About';
import Customer from '../Pages/Customer/Customer';
import Hero from '../Pages/Hero/Hero';
import Package from '../Pages/Package/Package';
import Portfolio from '../Pages/Portfolio/Portfolio';
import Products from '../Pages/Products/Products';
import Technology from '../Pages/Technology/Technology';
import Work from '../Pages/Work/Work';
import Workflow from '../Pages/Workflow/Workflow';
import PageTitle from '../shared/PageTitle/PageTitle';
import './Home.css'

const Home = () => {
    return (
        <>
            <PageTitle title='Home'></PageTitle>
            <Hero></Hero>
            <Customer></Customer>
            <Work></Work>
            <Products></Products>
            <Package></Package>
            <About></About>
            <Portfolio></Portfolio>
            <Technology></Technology>
            <Workflow></Workflow>
        </>
    );
};

export default Home;