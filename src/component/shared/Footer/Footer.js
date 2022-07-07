import React from 'react';
import './Footer.css';
import Logo from '../../../Images/logo/softcent.png';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faCopyright } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
    return (
        <footer id='footer-id'>
            <div className='footer'>
                <div className='footer-contact-bar'>
                    <div>
                        <h2 className='footer-contact-title'>Looking for a software partner?</h2>
                    </div>
                    <div>
                        <button className='footer-btn'>start a project</button>
                    </div>
                </div>

                <div className='footer-content-link'>
                    <div className='footer-content'>
                        <div>
                            <Link to='/'><img className='footer-logo' src={Logo} alt='logo' /></Link>
                            <p className='footer-logo-subtitle'>Get a fully stacked design team that will give you accessible design, exhaustive research, and an outstanding experience.</p>
                            <p>Email: info@softcent.eu</p>
                            <p className='footer-phone'>Phone: +(372) 57836500</p>
                            <Link to='/'><FontAwesomeIcon className='social-icon color-f' icon={faFacebook} /></Link>
                            <Link to='/'><FontAwesomeIcon className='social-icon color' icon={faWhatsapp} /></Link>
                            <Link to='/'><FontAwesomeIcon className='social-icon color' icon={faTwitter} /></Link>
                            <Link to='/'><FontAwesomeIcon className='social-icon color' icon={faInstagram} /></Link>
                        </div>
                        <div className='footer-content-list'>
                            <p className='content-list-title'>Company</p>
                            <Link className='content-list' to='/'>About us</Link>
                            <Link className='content-list' to='/'>Our portfolio</Link>
                            <Link className='content-list' to='/'>Our Product</Link>
                            <Link className='content-list' to='/'>Our Team</Link>
                            <Link className='content-list' to='/'>Our Pricing</Link>
                            <Link className='content-list' to='/'>Testimonials</Link>
                            <Link className='content-list' to='/'>Contact Us</Link>
                        </div>
                        <div className='footer-content-list-second'>
                            <p className='content-list-title'>Our Service</p>
                            <Link className='content-list-second' to='/'>Marketing</Link>
                            <Link className='content-list-second' to='/'>UI/UX Design</Link>
                            <Link className='content-list-second' to='/'>Graphic Design (Branding)</Link>
                            <Link className='content-list-second' to='/'>Development</Link>
                            <Link className='content-list-second' to='/'>New Products</Link>
                        </div>
                        <div className='footer-content-list'>
                            <p className='content-list-title'>Supports</p>
                            <Link className='content-list' to='/'>FAQs</Link>
                            <Link className='content-list' to='/'>Support Policy</Link>
                            <Link className='content-list' to='/'>Privacy Policy</Link>
                            <Link className='content-list' to='/'>Trams of Service</Link>
                            <Link className='content-list' to='/'>Refund Policy</Link>
                        </div>
                    </div>
                </div>

                <hr />

                <div>
                    <p className='footer-copyright'><FontAwesomeIcon icon={faCopyright} /> 2021, Softcent EU, A European IT company</p>
                </div>
            </div>
        </footer>

    );
};

export default Footer;