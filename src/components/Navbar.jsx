import React, { useEffect } from "react";

import navlogo from '../img/logo/LOGO-SKE_Logo.png';
import { Link,NavLink } from 'react-router-dom';

import AOS from "aos";
import "aos/dist/aos.css";
import { IoColorFill } from "react-icons/io5";

const Navbar = () => {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);

      const navListOnclickActive =({isActive})=>{
return{
    color: isActive ? '#41516a' : 'black',

      };

      }
  return (
    <>

<nav className='navi mobile-view-nodeed' data-aos="fade-down" data-aos-duration="1000">
    <div className='container'>
        <div className='nav-flex '>
            <div className='nav-logo'>
                <img src={navlogo} alt='logo' />
            </div>

            <div className='nav-item submenu'>
                <ul className='nav-items'>
                <li><NavLink to="/" className='link-black' style={navListOnclickActive}>Home</NavLink></li>

                    <li className="submenu-list"><NavLink to="/WhyChoose" className='link-black' style={navListOnclickActive}>Why Choose Us</NavLink>
                    <ul className="inner-menu-items">
                        <li><NavLink to='/' className="link-black" style={navListOnclickActive}>Downloads</NavLink></li>
                        </ul>
                    </li>


                    <li className="submenu-list"><a href='#service' className='link-black '>Our Services</a>
                    <ul className="inner-menu-items">
                        <li><NavLink to='/' className="link-black" style={navListOnclickActive}>End to End Solution</NavLink></li>
                        <li><NavLink to='/' className="link-black" style={navListOnclickActive}>Supply Of Equipments</NavLink></li>
                        <li><NavLink to='/DesignDevelop' className="link-black" style={navListOnclickActive}>Design & Development</NavLink></li>
                        <li><NavLink to='/' className="link-black" style={navListOnclickActive}>Installation And Commissioning</NavLink></li>
                        <li><NavLink to='/Turnkey_Project' className="link-black" style={navListOnclickActive}>Turnkey Projects</NavLink></li>
                    </ul>
                    </li>

                    <li><NavLink to="/Industries" className='link-black' style={navListOnclickActive}>Industries</NavLink></li>

                    <li><a href='#contact' className='link-black'>Contact Us</a></li>

                    <li><NavLink to="/Our_Products" className='link-black' style={navListOnclickActive}>Our Products</NavLink></li>

                    <li><a href='#' className='link-black' >Login</a></li>
                </ul>
            </div>
        </div>
    </div>
</nav>

<nav className="navbar navbar-expand-sm only-mobile">
  <div className="container-fluid">
    <Link className="navbar-brand" href="#">
        <img src={navlogo} alt="logo-mobile" className="mobile-logo"/>
    </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="collapsibleNavbar">
      <ul className="navbar-nav">
        <li className="nav-item">
          <NavLink to="/" className="nav-link" >Home</NavLink>
        </li>
        
        <li className="nav-item dropdown">
          <NavLink className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">Why Choose Us</NavLink>
          <ul className="dropdown-menu">
            <li><NavLink to="/" className="dropdown-item">Downloads</NavLink></li>
          </ul>
        </li>

        <li className="nav-item dropdown">
          <NavLink className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">Our Services</NavLink>
          <ul className="dropdown-menu">
            <li><NavLink to="/" className="dropdown-item">Downloads</NavLink></li>
            <li><NavLink to='/' className="dropdown-item">End to End Solution</NavLink></li>
            <li><NavLink to='/' className="dropdown-item">Supply Of Equipments</NavLink></li>
            <li><NavLink to='/DesignDevelop' className="dropdown-item">Design & Development</NavLink></li>
            <li><NavLink to='/' className="dropdown-item">Installation And Commissioning</NavLink></li>
            <li><NavLink to='/Turnkey_Project' className="dropdown-item">Turnkey Projects</NavLink></li>

          </ul>
        </li>

        <li className="nav-item">
          <NavLink to="/Industries" className="nav-link">Industries</NavLink>
        </li>
        <li className="nav-item">
          <a href="#contact" className="nav-link">Contact Us</a>
        </li> 

        <li className="nav-item">
          <NavLink to="/Our_Products" className="nav-link">Our Products</NavLink>
        </li> 

        <li className="nav-item">
          <NavLink to="/" className="nav-link">Login</NavLink>
        </li> 

      </ul>
    </div>
  </div>
</nav>
    </>
  )
}

export default Navbar