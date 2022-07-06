import React from 'react';
import './Hero.css';
import HeroMp4 from '../../../Images/banar-mp4/softcent.mp4';
import Underline from '../../../Images/underline.png';
import DemoBox from '../../../Images/boder-box.png';

const Hero = () => {
    return (
        <section id='hero-id'>
            <div className='hero'>
                <div className='hero-article'>
                    <div>
                        <h1 className='hero-title'>Software service for startups without limits..<img className='underline' src={Underline} alt={Underline} /></h1>
                        <p className='hero-sub-title'>we believe that great design should not be out of reach, so our services are less than half the price of a full-time designer.</p>
                    </div>
                    <div className='hero-demo-box'>
                        <img src={DemoBox} alt={DemoBox} />
                    </div>
                </div>
                <video className='hero-video' src={HeroMp4} controls muted autoPlay loop></video>
            </div>
        </section>
    );
};

export default Hero;