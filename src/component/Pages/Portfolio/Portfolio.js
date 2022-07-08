import React from 'react';
import './Portfolio.css';
import Underline from '../../../Images/underline.png';
import leftCircle from '../../../Images/protfolio/arrow_left_circle.png';
import Image1 from '../../../Images/protfolio/color-system.png';
import Image2 from '../../../Images/protfolio/logo-design.png';
import Image3 from '../../../Images/protfolio/UI-UX-design.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleArrowRight } from '@fortawesome/free-solid-svg-icons';

const Portfolio = () => {
    return (
        <section id='portfolio-id'>
            <div className='portfolio'>

                <div className='portfolio-title-container'>
                    <div>
                        <p className='portfolio-page-title'>Our Portfolio</p>
                        <img className='portfolio-underline' src={Underline} alt='underlineImage' />
                    </div>
                    <div>
                        <img className='portfolio-arrow-icon-left' src={leftCircle} alt="leftCircle" />
                        <FontAwesomeIcon className='portfolio-arrow-icon-right' icon={faCircleArrowRight} />
                    </div>
                </div>

                <div className='portfolio-container'>
                    <div>
                        <img className='portfolio-image' src={Image1} alt="portfolioImage" />
                        <h4 className='portfolio-name'>Color System Design</h4>
                    </div>
                    <div>
                        <img className='portfolio-image' src={Image2} alt="portfolioImage" />
                        <h4 className='portfolio-name'>Color System Design</h4>
                    </div>
                    <div>
                        <img className='portfolio-image' src={Image3} alt="portfolioImage" />
                        <h4 className='portfolio-name'>Color System Design</h4>
                    </div>
                </div>

                <div>
                    <button className='portfolio-btn'>See All Portfolio</button>
                </div>
            </div>
        </section>
    );
};

export default Portfolio;