import React, { useEffect } from "react";

import Navbar from '../components/Navbar';

import bannerimg1 from '../img/banner1.jpg';
import bannerimg2 from '../img/banner2.jpg';
import bannerimg3 from '../img/backgroundBanner.jpg';

import aboutsecImg from '../img/aboutus.jpg';
import offerImg from '../img/wesupport.jpg';
import product1 from '../img/products/transformers.jpg';

import { Link } from 'react-router-dom';

import { AiOutlineSolution, AiOutlineFundProjectionScreen, AiOutlineProject } from 'react-icons/ai';
import { BsTruck } from 'react-icons/bs';
import { LiaConnectdevelop } from 'react-icons/lia';
import { FaTowerCell } from 'react-icons/fa6';
import { SiAntdesign } from 'react-icons/si';


import Contact from '../components/Contact';
import Footer from '../components/Footer';

// Swiper
import { Pagination, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import navlogo from '../img/logo/LOGO-SKE_Logo.png';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import WeOffer from '../components/WeOffer';
import Features from '../components/Features';
import Products from '../components/Products';
// import './styles.css';

import AOS from "aos";
import "aos/dist/aos.css";

const Home = () => {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);

    return (
        <>
            <Navbar />

            {/* <nav className='nav'>
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

                    <li><Link to="/Industries" className='link-black'>Industries</Link></li>

                    <li><a href='#contact' className='link-black'>Contact Us</a></li>

                    <li><a href='#' className='link-black'>Our Products</a></li>

                    <li><a href='#' className='link-black'>Login</a></li>
                </ul>
            </div>
        </div>
    </div>
</nav> */}

            <div className='leave-navbar'>
            <div id="demo" className="carousel slide" data-bs-ride="carousel">

  <div className="carousel-indicators">
    <button type="button" data-bs-target="#demo" data-bs-slide-to="0" className="active"></button>
    <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
    <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
  </div>
  
  <div className="carousel-inner">
    <div className="carousel-item active position-relative">
      <img src={bannerimg1} alt="Los Angeles" className="d-block banner-img" style={{width:"100%"}}/>
      <div className="carousel-caption position-absolute">
        <h1 style={{textAlign:"left"}} data-aos="fade-up" data-aos-duration="3000" data-aos-anchor-placement="top-bottom">SK Enterprise</h1>
        <p className='bg-black-opacity' data-aos="fade-down" data-aos-duration="3000" data-aos-anchor-placement="center-bottom">We are  proficient  in  the execution of  pre-design, design solution & build projects.</p>
      </div>
      <div className='bg-black-banner'/>
    </div>
    <div className="carousel-item position-relative">
      <img src={bannerimg2} alt="Chicago" className="d-block banner-img" style={{width:"100%"}}/>
      <div className="carousel-caption position-absolute">


        <p className='bg-black-opacity' data-aos="fade-down" data-aos-duration="3000" data-aos-anchor-placement="center-bottom">Our field of experience cover all types of services in projects as diverse  as Design and Development,   Supply  of Electrical  Switchgears, Control    Gears,  Cables,  Motors   etc.,</p>
      </div> 
      <div className='bg-black-banner'/>
    </div>
    <div className="carousel-item position-relative">
      <img src={bannerimg3} alt="New York" className="d-block banner-img" style={{width:"100%"}}/>
      <div className="carousel-caption position-absolute">


        <p className='bg-black-opacity'>In addition, we can also provide  Pre-Planning,  Analysis,  Testing, Supervision of Erection & Commissioning</p>
      </div>
      <div className='bg-black-banner'/>  
    </div>
  </div>
  
  <button className="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
    <span className="carousel-control-prev-icon"></span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
    <span className="carousel-control-next-icon"></span>
  </button>
</div>

            </div>
          

            {/* About Us Section Start */}

            <section className='bg-default pt-5' >
                <div className="container">
                    <div className='row align-items-center' >
                        <div className='col-lg-6'>
                            <h2 className='section-heading pb-5'>About Us</h2>

                            <p style={{ textAlign: "justify", fontWeight: "500" }}>Our Objective is to provide solution to electrical and automation
                                requirements of clients in a positive closly controlled well-managed & professional manner.</p>

                            <p style={{ textAlign: "justify", fontWeight: "500" }}>We believe there are better ways to do business and kickoff a startup with the right
                                use of precise electrical solutions. A more innovative,
                                effective use of technology to maximize our business potential.</p>

                            <p style={{ textAlign: "justify", fontWeight: "500" }}>SK Enterprises believe's that engineering is the key to industrialization and growth.
                                From the beginning our focus will be on servicing the Electrical Engineering industry as an
                                importer, distributor, and service provider and exporter.</p>

                            <p style={{ textAlign: "justify", fontWeight: "500" }}>Belief, Integrity, Innovativeness, in exceeding our goals have been the basis of our rally to success.</p>

                        </div>
                        <div className='col-lg-6' >
                            <img src={aboutsecImg} className='sectionImg' alt="about" />
                        </div>
                    </div>
                </div>

                <div className='container-fluid' id="service">
                    <div className='row pt-5 pb-5'>
                        <div className='col-build-5 col-md-3 col-12 pt-1 pb-1'>
                            <div className='card-about'>
                                <div className='position-relative thumber'>
                                    <div className='thumb' />
                                    <AiOutlineSolution className="about-icons" />
                                </div>
                                <h5>End-to-End Solution</h5>
                                <p>With a wide range of services and skills, we can provide end-to-end solutions
                                    for different needs to become a strategic  partner for most of our clients</p>

                                <Link to="/" className='btn-learn'>Learn More</Link>
                            </div>
                        </div>

                        <div className='col-build-5 col-md-3 col-12 pt-1 pb-1'>
                            <div className='card-about'>
                                <div className='position-relative thumber'>
                                    <div className='thumb' />
                                    <BsTruck className="about-icons" />
                                </div>
                                <h5>
                                    Supply of Equiptment</h5>
                                <p>SKE Global co-operates with the leading domestic and foreign plants and factories what allows
                                    us to secure supplies and to use innovative technologies in production</p>

                                <Link to="/" className='btn-learn'>Learn More</Link>
                            </div>
                        </div>

                        <div className='col-build-5 col-md-3 col-12 pt-1 pb-1'>
                            <div className='card-about'>
                                <div className='position-relative thumber'>
                                    <div className='thumb' />
                                    <LiaConnectdevelop className="about-icons" />
                                </div>
                                <h5>
                                    Design & Development</h5>
                                <p>We help clients to effectively develop systems that meets their requirements,

                                </p>

                                <Link to="/" className='btn-learn'>Learn More</Link>
                            </div>
                        </div>

                        <div className='col-build-5 col-md-3 col-12 pt-1 pb-1'>
                            <div className='card-about'>
                                <div className='position-relative thumber'>
                                    <div className='thumb' />
                                    <FaTowerCell className="about-icons" />
                                </div>
                                <h5>
                                    Installation & Commissioning</h5>
                                <p>Our service team comprises of certified engineers, having
                                    vast experience in installation, erection & commissioning works</p>

                                <Link to="/" className='btn-learn'>Learn More</Link>
                            </div>
                        </div>

                        <div className='col-build-5 col-md-3 col-12 pt-1 pb-1'>
                            <div className='card-about'>
                                <div className='position-relative thumber'>
                                    <div className='thumb' />
                                    <AiOutlineFundProjectionScreen className="about-icons" />
                                </div>
                                <h5>Turnkey
                                    Projects</h5>
                                <p>We build turnkey solutions based on innovative plant technology, complete with
                                    buildings and infrastructure, tailor-made logistics, and all the auxiliary equipment
                                    you need. That’s a sound basis for the results you want! </p>

                                <Link to="/" className='btn-learn'>Learn More</Link>
                            </div>
                        </div>


                    </div>
                </div>
            </section>

            {/* About Us Section End */}

            {/* We Support Start */}
            <div className='container pb-5 pt-3'>
<h2 className='section-heading  text-center pb-5'>We Support</h2>

                <div className='row align-items-center'>
                    <div className='col-lg-6'>


<div className='row'>
    <div className='col-lg-6 pt-3 pb-3'>
    <div className='offer-card'>
    <div className='d-flex justify-content-center'>
<div className='offer-thumb'>
        <SiAntdesign className="thumb-icon"/>
    </div>
    </div> 
   
    <p className='text-center font-weight-500'>System Design</p>

    </div>
    </div>

    <div className='col-lg-6 pt-3 pb-3'>
    <div className='offer-card'>
    <div className='d-flex justify-content-center'>
    <div className='offer-thumb'>
<AiOutlineProject className="thumb-icon"/>
    </div>
    </div>
    <p className='text-center font-weight-500'>Project Management</p>

    </div>
    </div>

    <div className='col-lg-6 pt-3 pb-3'>
    <div className='offer-card'>
    <div className='d-flex justify-content-center'>
    <div className='offer-thumb'>
    <AiOutlineProject className="thumb-icon"/>

    </div>
    </div>
    <p className='text-center font-weight-500'>Design & Development</p>

    </div>
    </div>

    <div className='col-lg-6 pt-3 pb-3'>
    <div className='offer-card'>
    <div className='d-flex justify-content-center'>
    <div className='offer-thumb'>
    <AiOutlineProject className="thumb-icon"/>

    </div>
    </div>
    <p className='text-center font-weight-500'>Pre-Planning and Analysis</p>

    </div>
    </div>
</div>
                    </div>

                    <div className='col-lg-6'>
                    <img src={offerImg} className='sectionImg' alt="about" />

                    </div>
                </div>
            </div>
            {/* We Support End */}

        {/* We Offer section Start*/}
        <WeOffer/>
        {/* We Offer section End*/}


{/* Standard Motor Section Start */}
<section className='bg-satndardmotors'>

<div className='bg-content'>
        <h2>Standard Motors</h2>

    <p className='justify-t-inmobile'>We can supply a wide range of
IC low-voltage asynchronous industrial motors from 0.09 KW to 5 MW. IC motors
 provide a high reliability and efficiency, are suitable for all industries and
  applications, meet all standard
 requirements and fulfill international and local regulations</p>


 <h5 className='pt-5'>IE2 High / IE3 Premium Efficiency Motors</h5>

 <ul className='seclist' >
    <li>Frames: 63 to 35SLX</li>
    <li>Rating: 0.12 to 315.0 kW</li>
    <li>Poles: 2, 4, 6, 8</li>
    <li>Mtg.: B3, BS, B14 & comb.</li>
    <li>Prot.: IP55</li>
    <li>Enci.: TEFC</li>
 </ul>

 <h5>Multi speed Motors</h5>
<ul className='seclist'>
   <li>Frames: 71 to 355LX</li>
   <li>Rating:  0.12 to 150.0 kW</li>
   <li>Poles: 4/2, 8/4, 6/4, 8/6 8 others</li>
   <li>Mtg.: B3, BS, B14 & comb.</li>
   <li>Prot.: IP55</li>
   <li>Enci.: TEFC</li>
</ul>
</div>

</section>
{/* Standard Motor Section End */}

            {/* Our Products section Start*/}
<Features/>
            {/* Our Products section End*/}

{/* Our Products Start */}
<Products/>
{/* Our Products End */}

            {/* Find Out More Section Start */}
<div className='pt-3 pb-3' style={{backgroundColor:"#41516a"}}>
      <div className='container'>
                <h2 className='text-center pb-5' style={{color:"white"}}>Ready to find out more?</h2>
                <p className='text-center' style={{color:"white"}}>To  ensure  success, we believe in  providing right  solution with the      right      technology    and specialized  experience. If   you wish to find out more or engage with our    solution,   Please   do not hesitate to  contact us.
                    We look forward to have you as a part of our family.</p>
            </div>

            <div className='d-flex justify-content-center pt-4'>
                <button type='button' className='btn-find-model'>Get free evaluation</button>
            </div>
</div>
          
            {/* Find Out More Section End */}

<Contact/>
<Footer/>

        </>
    )
}

export default Home