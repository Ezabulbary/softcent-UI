import React from 'react';
import './Products.css';
import PageTitle from '../../shared/PageTitle/PageTitle';
import Underline from '../../../Images/underline.png';
import product1 from '../../../Images/product/phone-ui1.png'
import product2 from '../../../Images/product/phone-ui.png'
import { Link } from 'react-router-dom';

const Products = () => {
    return (
        <section id='product-id'>
            <div>
                <PageTitle title='Premium Products'></PageTitle>
                <div className='product-title-container'>
                    <p className='product-page-title'>Our Products</p>
                    <img className='product-underline' src={Underline} alt='underlineImage' />
                    <div className='product-sub-title-container'>
                        <p className='product-page-sub-title'>We believe that great design should not be out of reach, so our services are less than half the price of a full-time designer.</p>
                        <Link to='/products'><button className='product-btn1'>See More</button></Link>
                    </div>
                </div>

                <div className='product-container'>
                    <div className='product'>
                        <div className='product-details'>
                            <p className='product-title'>SwipeXYZ Product</p>
                            <p className='product-sub-title'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                            <button className='product-btn'>View product</button>
                        </div>
                        <div>
                            <img className='product-image' src={product1} alt="productImage" />
                        </div>
                    </div>
                    <div className='product1'>
                        <div>
                            <img className='product-image' src={product2} alt="productImage" />
                        </div>
                        <div className='product-details'>
                            <p className='product-title'>Cashback Product</p>
                            <p className='product-sub-title'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                            <button className='product-btn'>View product</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Products;