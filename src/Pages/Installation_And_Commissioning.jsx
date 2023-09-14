import React from 'react';
import { Link } from 'react-router-dom';

// Swiper
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import './styles.css';


import product1 from '../img/products/transformers.jpg';
import {TiTick} from 'react-icons/ti';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Contact from '../components/Contact';

const Installation_And_Commissioning = () => {
  return (
    <>
      <Navbar/>
      <div className='leave-navbar'/>
      <section className='breadcrumb '>

<div className='crumb-content'>
  <h1>Installation & Commissioning Support</h1>

</div>
<div className='bg-black-banner'/>
      </section>



      <Contact/>
      <Footer/>
    </>
  )
}

export default Installation_And_Commissioning;
