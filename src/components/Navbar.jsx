import React from 'react';
import navlogo from '../img/logo/LOGO-SKE_Logo.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <>

<nav className='nav'>
    <div className='container'>
        <div className='nav-flex'>
            <div className='nav-logo'>
                <img src={navlogo} alt='logo' />
            </div>

            <div className='nav-item'>
                <ul className='nav-items'>
                <li><Link to="/" className='link-black'>Home</Link></li>

                    <li><Link to="/WhyChoose" className='link-black'>Why Choose Us</Link></li>

                    <li><a href='#' className='link-black'>Our Services</a></li>

                    <li><a href='#' className='link-black'>Industries</a></li>

                    <li><a href='#' className='link-black'>Contact Us</a></li>

                    <li><a href='#' className='link-black'>Our Products</a></li>

                    <li><a href='#' className='link-black'>Login</a></li>
                </ul>
            </div>
        </div>
    </div>
</nav>
    </>
  )
}

export default Navbar