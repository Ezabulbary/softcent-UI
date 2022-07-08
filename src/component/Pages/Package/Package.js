import React from 'react';
import './Package.css';
import Underline from '../../../Images/underline.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

const Package = () => {
    return (
        <section id='package-id'>
            <div className='package'>
                <div>
                    <h1 className='package-page-title'>Pricing Package Choose Your Plan</h1>
                    <img className='package-underline' src={Underline} alt='underlineImage' />
                    <p className='package-page-sub-title'>We believe that great design should not be out of reach, so our services are less than half the price of a full-time designer.</p>
                    <div className='page-button-container'>
                        <button className='package-btn1'>Monthly</button>
                        <button className='package-btn2'>Yearly</button>
                    </div>
                </div>

                <div className='package-list-container'>
                    <div className="list-container">
                        <div className="list-title">
                            <p className='title'>Marketing</p>
                            <p className='price'>$899/ mo</p>
                        </div>
                        <div className="list">
                            <li><FontAwesomeIcon className='check' icon={faCheck}/>Dedicated Designer</li>
                            <li><FontAwesomeIcon className='check' icon={faCheck}/>Unlimited requests</li>
                            <li><FontAwesomeIcon className='check' icon={faCheck}/>Unlimited brand profiles</li>
                            <li><FontAwesomeIcon className='check' icon={faCheck}/>Native source files</li>
                            <li><FontAwesomeIcon className='check' icon={faCheck}/>Real-time collaboration</li>
                            <li><FontAwesomeIcon className='check' icon={faCheck}/>Banner Ads</li>
                            <li><FontAwesomeIcon className='check' icon={faCheck}/>Clothing & Merchandise Design</li>
                            <li><FontAwesomeIcon className='check' icon={faCheck}/>Packaging & Label</li>
                            <li><FontAwesomeIcon className='check' icon={faCheck}/>Logo & Brand Guide</li>
                        </div>
                        <div>
                            <button className='list-btn'>$899 / mo</button>
                        </div>
                    </div>
                    <div className="list-container-second">
                        <div className="list-title">
                            <p className='title'>UI/UX Design</p>
                            <p className='price'>$1000/ mo</p>
                        </div>
                        <div className="list">
                            <li><FontAwesomeIcon className='check' icon={faCheck}/>Dedicated Designer</li>
                            <li><FontAwesomeIcon className='check' icon={faCheck}/>Unlimited requests</li>
                            <li><FontAwesomeIcon className='check' icon={faCheck}/>Unlimited brand profiles</li>
                            <li><FontAwesomeIcon className='check' icon={faCheck}/>Native source files</li>
                            <li><FontAwesomeIcon className='check' icon={faCheck}/>Real-time collaboration</li>
                            <li><FontAwesomeIcon className='check' icon={faCheck}/>Banner Ads</li>
                            <li><FontAwesomeIcon className='check' icon={faCheck}/>Clothing & Merchandise Design</li>
                            <li><FontAwesomeIcon className='check' icon={faCheck}/>Packaging & Label</li>
                            <li><FontAwesomeIcon className='check' icon={faCheck}/>Logo & Brand Guide</li>
                        </div>
                        <div>
                            <button className='list-btn'>$1000 / mo</button>
                        </div>
                    </div>
                    <div className="list-container">
                        <div className="list-title">
                            <p className='title'>Development</p>
                            <p className='price'>$1000/ mo</p>
                        </div>
                        <div className="list">
                            <li><FontAwesomeIcon className='check' icon={faCheck}/>Dedicated Designer</li>
                            <li><FontAwesomeIcon className='check' icon={faCheck}/>Unlimited requests</li>
                            <li><FontAwesomeIcon className='check' icon={faCheck}/>Unlimited brand profiles</li>
                            <li><FontAwesomeIcon className='check' icon={faCheck}/>Native source files</li>
                            <li><FontAwesomeIcon className='check' icon={faCheck}/>Real-time collaboration</li>
                            <li><FontAwesomeIcon className='check' icon={faCheck}/>Banner Ads</li>
                            <li><FontAwesomeIcon className='check' icon={faCheck}/>Clothing & Merchandise Design</li>
                            <li><FontAwesomeIcon className='check' icon={faCheck}/>Packaging & Label</li>
                            <li><FontAwesomeIcon className='check' icon={faCheck}/>Logo & Brand Guide</li>
                        </div>
                        <div>
                            <button className='list-btn'>$1000 / mo</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Package;