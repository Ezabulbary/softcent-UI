import React from 'react';
import Logo from '../../../Images/logo/softcent.png';
import { Link, Outlet } from "react-router-dom";
import CustomLink from '../CustomLink/CustomLink';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav id='navbar-id'>
            <div className='navbar'>
                <div>
                    <Link to='/'><img className='nav-logo' src={Logo} alt={Logo} /></Link>
                </div>
                <div className='nav-menu'>
                    <ul>
                        <li><CustomLink to='/'>Home</CustomLink></li>
                        <li><CustomLink to='/about'>About</CustomLink></li>
                        <li><CustomLink to='/work'>Work</CustomLink></li>
                        <li><CustomLink to='/products'>Premium Products</CustomLink></li>
                        <li><CustomLink to='/blogs'>Blog</CustomLink></li>
                        <button className='nav-btn'>start a project</button>
                    </ul>
                </div>
            </div>
            <Outlet />
        </nav>
    );
};

export default Navbar;