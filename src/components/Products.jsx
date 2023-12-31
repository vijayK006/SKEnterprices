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

const Products = () => {
  return (
    <>
      <section className='container pb-5'>
    <h2 className='section-heading pb-5'>Our Products</h2>

    <Swiper
        slidesPerView={1}
        // spaceBetween={10}

        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}

        loop={true}
        navigation={true} 
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          900: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          1400: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
        }}
        modules={[Pagination, Navigation, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
            <div className='card-swiper-offer3'>
<img src={product1} alt="swiper-img2" className='swipimgcard2'/>
&nbsp;
&nbsp;
&nbsp;
<div className='content2'>
<h4 className='pt-2'>AC Motor</h4>

<div className='row'>
    <div className='col-lg-6 col-md-6 col-12'>
<ul className='single-list'> 
    <li style={{listStyle:"none"}}><TiTick/> High Voltage Motor</li>
    <li style={{listStyle:"none"}}><TiTick/> Rerolling Mill Duty Motor</li>
    <li style={{listStyle:"none"}}><TiTick/> Closed Cage Type Motor</li>
    <li style={{listStyle:"none"}}><TiTick/> Flame Proof Motors</li>
<li style={{listStyle:"none"}}><TiTick/> Non-Sparkling Motors</li>
<li style={{listStyle:"none"}}><TiTick/> Vertical Hollow Shaft Motors</li>
    </ul>
</div>

<div className='col-lg-6 col-md-6 col-12'>
<ul className='single-list'>
<li style={{listStyle:"none"}}><TiTick/> Open Type Cage Motor</li>
<li style={{listStyle:"none"}}><TiTick/> Wound Open Type Motor</li>
<li style={{listStyle:"none"}}><TiTick/> Wound Close Type Motor</li>
<li style={{listStyle:"none"}}><TiTick/> Crane Duty/ Slipering Motors</li>
   <li style={{listStyle:"none"}}><TiTick/> Roller Table Motors</li>
   <li style={{listStyle:"none"}}><TiTick/> Cooling Tower Motors</li>
</ul>
</div>


</div>




</div>

            </div>
        </SwiperSlide>

        <SwiperSlide>
            <div className='card-swiper-offer3'>
<img src={product1} alt="swiper-img2" className='swipimgcard2'/>
&nbsp;
&nbsp;
&nbsp;
<div className='content2'>
<h4 className='pt-2'>DC Motors </h4>

<div className='row'>
    <div className='col-lg-6 col-md-6 col-12'>
<ul className='single-list'> 
    <li style={{listStyle:"none"}}><TiTick/> Laminated yoke DC Motors</li>
    <li style={{listStyle:"none"}}><TiTick/> Mill Duty DC Motors</li>
    <li style={{listStyle:"none"}}><TiTick/> Solid yoke DC Motors</li>

    </ul>
</div>

</div>




</div>

            </div>
        </SwiperSlide>
   
        <SwiperSlide>
            <div className='card-swiper-offer3 '>
<img src={product1} alt="swiper-img2" className='swipimgcard2'/>
&nbsp;
&nbsp;
&nbsp;
<div className='content2'>
<h4 className='pt-2'>Transformers</h4>

<div className='row'>
    <div className='col-lg-6 col-md-6 col-12'>
<ul className='single-list'> 
    <li style={{listStyle:"none"}}><TiTick/> <b>Oil Immersed</b>
    <ul>
        <li>Power Tranformer</li>
        <li>Distribution Transformer</li>
        <li>EHV Transformer</li>
        <li>Furnace</li>
        <li>CSS</li>
    </ul>
    </li>

    </ul>
</div>

<div className='col-lg-6 col-md-6 col-12'>
<ul className='single-list'>
<li style={{listStyle:"none"}}><TiTick/> <b>Dry Type Transformer</b>
<ul>
    <li>UPT</li>
    <li>CRT</li>
</ul>
</li>

</ul>
</div>


</div>




</div>

            </div>
        </SwiperSlide>

        <SwiperSlide>
            <div className='card-swiper-offer3 '>
<img src={product1} alt="swiper-img2" className='swipimgcard2'/>
&nbsp;
&nbsp;
&nbsp;
<div className='content2'>
<h4 className='pt-2'>Gearbox</h4>

<div className='row'>
    <div className='col-lg-6 col-md-6 col-12'>
<ul className='single-list'> 
<li style={{listStyle:"none"}}><TiTick/> Planitery Gear Box</li>
<li style={{listStyle:"none"}}><TiTick/> Worm Gear Box</li>
    </ul>
</div>

<div className='col-lg-6 col-md-6 col-12'>
<ul className='single-list'>
<li style={{listStyle:"none"}}><TiTick/> <b>Helical Gear Box</b>
<ul>
    <li>Inline Helical</li>
    <li>Bevel Helical</li>
    <li>Parlel Helical</li>
</ul>
</li>

</ul>
</div>


</div>




</div>

            </div>
        </SwiperSlide>

        <SwiperSlide>
            <div className='card-swiper-offer3 '>
<img src={product1} alt="swiper-img2" className='swipimgcard2'/>
&nbsp;
&nbsp;
&nbsp;
<div className='content2'>
<h4 className='pt-2'>Switchgear Panels</h4>

<ul className="nav nav-tabs" role="tablist">
    <li className="nav-item">
      <a className="nav-link active" data-bs-toggle="pill" href="#home">Medium Voltage Panels</a>
    </li>
    <li className="nav-item">
      <a className="nav-link" data-bs-toggle="pill" href="#menu1">Low Voltage Panels</a>
    </li>
    <li className="nav-item">
      <a className="nav-link" data-bs-toggle="pill" href="#menu2">Special</a>
    </li>
  </ul>

  <div className="tab-content">
    <div id="home" className="container tab-pane active"><br/>

      <h3 >Medium Voltage Panels</h3>

      <ul className='list-content_li'>
      <div className='row'>
        <div className='col-6'>
          <li>3.3 KV to 33 KV CICO Panels</li>
  <li>3.3 KV to 33 KV Line-up  Panels</li>
        </div>
        <div className='col-6'>
  <li>Medium Voltage Soft Starters</li>
  <li>Neutral Groundis Resistors Panels</li>
        </div>
      </div>


  </ul>
    </div>
    <div id="menu1" className="container tab-pane fade"> <br/>
      <h3>Low Voltage Panels</h3>
      <div className='row'>
    <div className='col-6'><ul>
<li>PCC</li>
  <li>MCC</li>
  <li>Soft Starter Panels</li>
  <li>VFD Panels</li>
  </ul>
  </div>
    <div className='col-6'>
        <ul>
  <li>DC Drive Panels</li>
  <li>Distribution Boards</li>
  <li>Control Desks</li>
  <li>Fire Fighting Panels</li>
</ul>
    </div>
  </div>
    </div>
    <div id="menu2" className="container tab-pane fade"><br/>
    <h3>Special</h3>

      <ul>
    <li>Control & Relay Panels</li>
  <li>Bus Ducts</li>
  <li>DBR</li>
  <li>Compact Substations</li>
  </ul>
    </div>
  </div>



</div>

            </div>
        </SwiperSlide>

        <SwiperSlide>
            <div className='card-swiper-offer3'>
<img src={product1} alt="swiper-img2" className='swipimgcard2'/>
&nbsp;
&nbsp;
&nbsp;
<div className='content2'>
<h4 className='pt-2'>Supply of Spares</h4>

<div className='row'>
    <div className='col-lg-6 col-md-6 col-12'>
<ul className='single-list'> 
<li style={{listStyle:"none"}}><TiTick/> Substation Equipments</li>
<li style={{listStyle:"none"}}><TiTick/> Switchgear MV Panel Spares</li>
<li style={{listStyle:"none"}}><TiTick/> Switcgear LV Panel Spares</li>
<li style={{listStyle:"none"}}><TiTick/> Drive Panel Spares</li>
<li style={{listStyle:"none"}}><TiTick/> Motors</li>
<li style={{listStyle:"none"}}><TiTick/> Relays</li>
    </ul>
</div>
</div>

</div>

            </div>
        </SwiperSlide>

        <SwiperSlide>
            <div className='card-swiper-offer3 '>
<img src={product1} alt="swiper-img2" className='swipimgcard2'/>
&nbsp;
&nbsp;
&nbsp;
<div className='content2'>
<h4 className='pt-2'>Solutions</h4>

<div className='row'>
    <div className='col-lg-6 col-md-6 col-12'>
<ul className='single-list'> 
<li style={{listStyle:"none"}}><TiTick/> Substation Solution</li>
<li style={{listStyle:"none"}}><TiTick/> Residential Power Distribution (Layout)</li>
<li style={{listStyle:"none"}}><TiTick/> Solar Power Generation</li>
<li style={{listStyle:"none"}}><TiTick/> Automation Solution</li>

    </ul>
</div>
</div>

</div>

            </div>
        </SwiperSlide>

        <SwiperSlide>
            <div className='card-swiper-offer3 '>
<img src={product1} alt="swiper-img2" className='swipimgcard2'/>
&nbsp;
&nbsp;
&nbsp;
<div className='content2'>
<h4 className='pt-2'>Services</h4>

<div className='row'>
    <div className='col-lg-6 col-md-6 col-12'>
<ul className='single-list'> 
<li style={{listStyle:"none"}}><TiTick/> Design & Development</li>
<li style={{listStyle:"none"}}><TiTick/> AMC Services</li>
<li style={{listStyle:"none"}}><TiTick/> Testing & Programming Service</li>
<li style={{listStyle:"none"}}><TiTick/> Power Auditing</li>

    </ul>
</div>
</div>

</div>

            </div>
        </SwiperSlide>

        <SwiperSlide>
            <div className='card-swiper-offer3 '>
<img src={product1} alt="swiper-img2" className='swipimgcard2'/>
&nbsp;
&nbsp;
&nbsp;
<div className='content2'>
<h4 className='pt-2'>Pumps & Valves</h4>

<div className='row'>
    <div className='col-lg-6 col-md-6 col-12'>
<ul className='single-list'> 
<li style={{listStyle:"none"}}><TiTick/> Centrifugal Pumps</li>
<li style={{listStyle:"none"}}><TiTick/> Fire Fighting Pumps</li>
<li style={{listStyle:"none"}}><TiTick/> Gear pumps</li>
<li style={{listStyle:"none"}}><TiTick/> Chemical Pumps</li>
<li style={{listStyle:"none"}}><TiTick/> Valves</li>

    </ul>
</div>
</div>

</div>

            </div>
        </SwiperSlide>


        <SwiperSlide>
            <div className='card-swiper-offer3'>
<img src={product1} alt="swiper-img2" className='swipimgcard2'/>
&nbsp;
&nbsp;
&nbsp;
<div className='content2'>
<h4 className='pt-2'>Break Motors</h4>

<div className='row'>
    <div className='col-lg-6 col-md-6 col-12'>
<ul className='single-list'> 
<li style={{listStyle:"none"}}><TiTick/> Gear Motor with Brake</li>
<li style={{listStyle:"none"}}><TiTick/> Crane Duty Brake Motor</li>
<li style={{listStyle:"none"}}><TiTick/> Flame Proof Motor with Brake</li>


    </ul>
</div>
</div>

</div>

            </div>
        </SwiperSlide>

      </Swiper>
      </section>
    </>
  )
}

export default Products
