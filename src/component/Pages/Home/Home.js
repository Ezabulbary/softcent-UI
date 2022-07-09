import React from 'react';
import About from '../About/About';
import Customer from '../Customer/Customer';
import Hero from '../Hero/Hero';
import Package from '../Package/Package';
import Portfolio from '../Portfolio/Portfolio';
import Products from '../Products/Products';
import Technology from '../Technology/Technology';
import Work from '../Work/Work';
import Workflow from '../Workflow/Workflow';
import PageTitle from '../../shared/PageTitle/PageTitle';
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