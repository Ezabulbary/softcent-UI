import React from 'react';
import PageTitle from '../../shared/PageTitle/PageTitle';
import Underline from '../../../Images/underline.png';
import image1 from '../../../Images/about/about-us.png';
import image2 from '../../../Images/boder-box.png';
import quoteLeft from '../../../Images/about/quote-left.png';
import quoteRight from '../../../Images/about/quote-right.png';
import person from '../../../Images/about/person.png';
import './About.css';

const About = () => {
    return (
        <section id='about-id'>
            <PageTitle title='About'></PageTitle>
            <div className='about'>
                <div>
                    <h1 className='about-page-title'>Talk About Us!</h1>
                    <img className='about-underline' src={Underline} alt='underlineImage' />
                </div>

                <div className='about-container'>
                    <div>
                        <img className='article-quote1' src={quoteLeft} alt="quote" />
                        <p className='about-article'>We had a bit of a slow and bumpy start, but after changing the designer on their side everything went in a very good direction. The designers were talented and easy to work with.</p>
                        <img className='article-quote2' src={quoteRight} alt="quote" />

                        <div className='about-profile'>
                            <div>
                                <img className='about-person-image' src={person} alt="personImage" />
                            </div>
                            <div>
                                <h4 className='about-person-name'>Shuvo Roy</h4>
                                <p className='about-person-position'>Softcent Co-Founder</p>
                            </div>
                        </div>

                        <div className='dot-container'>
                            <div className="dot-span"></div>
                            <div className="dot-span1"></div>
                            <div className="dot-span1"></div>
                        </div>
                    </div>

                    <div>
                        <img className='about-image1' src={image1} alt="borderBox" />
                        <img className='about-image2' src={image2} alt="aboutImage" />
                    </div>

                </div>
            </div>
        </section>
    );
};

export default About;