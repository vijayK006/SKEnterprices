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


const Turnkey_Project = () => {
  return (
    <>
      <Navbar/>
      <div className='leave-navbar'/>
      <section className='breadcrumb '>

<div className='crumb-content'>
  <h1>Turnkey Projects</h1>
  <p style={{fontWeight:"500", color:"white"}}></p>

</div>
<div className='bg-black-banner'/>
      </section>

      <div className='container pt-5'>
        <div className='row pt-5'>

          <div className='col-lg-7 pb-5'>
<img src={whyImg} alt='secimg' className='bread-innerImg2'/>
          </div>

          <div className='col-lg-5 pt-1 '>
            <p style={{fontWeight:"500", textAlign:"justify"}}>
            
            Whether you want a new production plant or a 
  revamp of your existing equipment, it's crucial that you have a reliable partner with extensive
   know-how and experience. <br/><br/>

            SK Enterprise builds turnkey solutions based on innovative
plant technology, complete with buildings and infrastructure,
tailor-made logistics, and all the auxiliary equipment you
need. That’s a sound basis for the results you want!</p>

<p style={{fontWeight:"500", textAlign:"justify"}}>We implement your project perfectly as a general
contractor or leading partner in a consortium.
There's more to our service than simply supplying
plant. What's also vital is to ensure your systems are
immediately ready for operation. So you can focus
on your core business: successful production.</p>
          </div>

        </div>
      </div>

      <div className='container '>
        <div className='row pb-5'>

        <div className='col-lg-12 pt-1 '>
            <p style={{fontWeight:"500", textAlign:"justify"}}>
            
            We take overall responsibility for planning and execution. As a general contractor
             or leading partner in international consortiums, SK Enterprise has a wealth of 
             experience in implementing large-scale turnkey projects in the Power system,
              steel as well as non-ferrous metals industry. That means you discuss everything
               with just one contact. Wherever you want to build your new project, you benefit 
               from our global presence and the extensive know-how of our experts. It's an 
               added advantage for you that we maintain strategic partnerships to cover the
                entire range of turnkey solutions.</p>

<p style={{fontWeight:"500", textAlign:"justify"}}>SK India cooperates with engineering 
companies, representatives, and local partners worldwide. That ensures we are perfectly
 positioned to guarantee the success of all your project phases.</p>
          </div>       

        </div>
      </div>



      <Contact/>
      <Footer/>
    </>
  )
}

export default Turnkey_Project;
