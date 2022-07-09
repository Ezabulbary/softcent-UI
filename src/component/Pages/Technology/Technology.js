import React from 'react';
import './Technology.css';
import Underline from '../../../Images/underline.png';
import DevImage1 from '../../../Images/technology/php.png'
import DevImage2 from '../../../Images/technology/js.png'
import DevImage3 from '../../../Images/technology/html.png'
import DevImage4 from '../../../Images/technology/css.png'
import DevImage5 from '../../../Images/technology/bash.png'
import DesignImage1 from '../../../Images/technology/figma.png'
import DesignImage2 from '../../../Images/technology/in.png'
import DesignImage3 from '../../../Images/technology/XD.png'
import DesignImage4 from '../../../Images/technology/Adobe-ps.png'
import DesignImage5 from '../../../Images/technology/ai.png'

const Technology = () => {
    return (
        <section id='technology-id'>
            <div className='technology'>
                <div>
                    <h1 className='dev-technology-page-title'>Our Dev Technology</h1>
                    <img className='dev-technology-underline' src={Underline} alt='underlineImage' />
                    <div className='dev-list-container'>
                        <ul>
                            <li className='dev-list fancy-border'>Programming Languages</li>
                            <li className='dev-list'>Frameworks</li>
                            <li className='dev-list'>Databases</li>
                            <li className='dev-list'>Mobile Platforms</li>
                        </ul>
                    </div>

                    <div className='dev-image-container'>
                        <img className='technology-image' src={DevImage1} alt="DevImage" />
                        <img className='technology-image' src={DevImage2} alt="DevImage" />
                        <img className='technology-image' src={DevImage3} alt="DevImage" />
                        <img className='technology-image' src={DevImage4} alt="DevImage" />
                        <img className='technology-image' src={DevImage5} alt="DevImage" />
                    </div>
                </div>

                <div>
                    <h1 className='design-technology-page-title'>Our Design Technology</h1>
                    <img className='design-technology-underline' src={Underline} alt='underlineImage' />

                    <div className='design-image-container'>
                        <img className='technology-image' src={DesignImage1} alt="DevImage" />
                        <img className='technology-image' src={DesignImage2} alt="DevImage" />
                        <img className='technology-image' src={DesignImage3} alt="DevImage" />
                        <img className='technology-image' src={DesignImage4} alt="DevImage" />
                        <img className='technology-image' src={DesignImage5} alt="DevImage" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Technology;