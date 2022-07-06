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
                <div>
                    <h1 className='customer-title'>Our Customers<img className='underline' src={Underline} alt={Underline} /></h1>
                </div>
                <div>
                    <img src={Customer1} alt={Customer1} />
                    <img src={Customer2} alt={Customer2} />
                    <img src={Customer3} alt={Customer3} />
                    <img src={Customer4} alt={Customer4} />
                </div>
            </div>
        </section>
    );
};

export default Customer;