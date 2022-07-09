import React from 'react';
import './Blogs.css';
import PageTitle from '../../shared/PageTitle/PageTitle';
import Underline from '../../../Images/underline.png';

const Blogs = () => {
    return (
        <section id='blog-id'>
            <PageTitle title='Blog'></PageTitle>
            <div className='blog'>
                <h1 className='blog-page-title'>Blog</h1>
                <img className='blog-underline' src={Underline} alt='underlineImage' />
                <p className='blog-article'>Coming Soon....</p>
            </div>
        </section>
    );
};

export default Blogs;