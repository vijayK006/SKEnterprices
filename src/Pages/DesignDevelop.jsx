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
import whyImg from '../img/whiychoose.jpg';


const DesignDevelop = () => {
  return (
    <>
      <Navbar/>
      <div className='leave-navbar'/>
      <section className='breadcrumb '>

<div className='crumb-content'>
  <h1>Design And Development</h1>

</div>
<div className='bg-black-banner'/>
      </section>

<div className='container pt-5' >
    <div className='row pt-5 pb-5'>
        <div className='col-lg-6 pt-1 pb-2'>
<img src={whyImg} alt='secimg' className='bread-innerImg2'/>
        </div>

        <div className='col-lg-6 pt-1 pb-2'>
            <p style={{fontWeight:"500"}}>
Design & Development 
Closely cooperating with you means our engineering team translates your wishes
 into concrete form. This is how we identify substantial
 savings potentials even in the initial stages of your project.</p>

 <p style={{fontWeight:"500"}}>Equally important is our extensive planning of your plant layout.
  During this design phase, we analyze the interfaces and battery limits as well as the various
   production stages, equipment, and disciplines. That allows you to optimize the complex interaction
  between all investment and process-related factors.</p>

  <p style={{fontWeight:"500"}}>Expressed simply,  you find out at an early stage that it pays to have

SK Enterprise handle your entire project. This not only reduces interfaces, 
but also ensures smooth plant integration and short project times</p>
        </div>
    </div>
</div>


      <Contact/>
      <Footer/>
    </>
  )
}

export default DesignDevelop;
