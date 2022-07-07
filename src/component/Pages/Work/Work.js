import React from 'react';
import './Work.css';
import PageTitle from '../../shared/PageTitle/PageTitle';
import Underline from '../../../Images/underline.png';
import work1 from '../../../Images/what-we-do/branding.png';
import work2 from '../../../Images/what-we-do/ui-ux-design.png';
import work3 from '../../../Images/what-we-do/Development.png';

const Work = () => {
    return (
        <section id='work-id'>
            <div className='work'>
                <PageTitle title='Work'></PageTitle>
                <div className='work-title-container'>
                    <p className='work-title'>What We Do</p>
                    <img className='work-underline' src={Underline} alt='underlineImage' />
                </div>
                <div className='work-container'>
                    <div>
                        <div className='work-list-title'>
                            <img className='work-image' src={work1} alt="workImage" />
                            <p className='work-list-title'>Branding</p>
                        </div>
                        <div className='work-list'>
                            <li>Brand Strategy</li>
                            <li>Social media</li>
                            <li>Marketing Assets</li>
                            <li>Presentations</li>
                            <li>Build MVP Version</li>
                            <li>Pitch Deck</li>
                        </div>
                    </div>
                    <div>
                        <div className='work-list-title'>
                            <img className='work-image' src={work2} alt="workImage" />
                            <p className='work-list-title'>UI/UX Design</p>
                        </div>
                        <div className='work-list'>
                            <li>User Interface</li>
                            <li>User Experience</li>
                            <li>Design System</li>
                            <li>Wireframe</li>
                            <li>Prototype</li>
                            <li>Website & Mobile App</li>
                            <li>IOS + Android</li>
                        </div>
                    </div>
                    <div>
                        <div className='work-list-title'>
                            <img className='work-image' src={work3} alt="workImage" />
                            <p className='work-list-title'>Development</p>
                        </div>
                        <div className='work-list'>
                            <li>Front End (HTML, CSS, React)</li>
                            <li>Backend (Node.js, MongoDB)</li>
                            <li>iOS (Swift)</li>
                            <li>Android (Kotlin, Flutter)</li>
                            <li>Blockchain Development (NFT)</li>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Work;