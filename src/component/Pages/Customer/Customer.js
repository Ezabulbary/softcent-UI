import React from 'react';
import './Customer.css';
import Underline from '../../../Images/underline.png';
import Customer1 from '../../../Images/customars-logo/UBS.png';
import Customer2 from '../../../Images/customars-logo/HSBC.png';
import Customer3 from '../../../Images/customars-logo/my_fitlab.png';
import Customer4 from '../../../Images/customars-logo/appsero.png';

const Customer = () => {
    return (
        <section className='customer-id'>
            <div className='customer'>
                <div className='customer-title-container'>
                    <h1 className='customer-title'>Our Customers</h1>
                    <img className='customer-underline' src={Underline} alt={Underline} />
                </div>
                <div className='customer-logo-container'>
                    <img src={Customer1} alt='logo' />
                    <img src={Customer2} alt='logo' />
                    <img src={Customer3} alt='logo' />
                    <img src={Customer4} alt='logo' />
                </div>
            </div>
        </section>
    );
};

export default Customer;