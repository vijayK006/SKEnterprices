import React from 'react';
import { Link } from 'react-router-dom';

// Swiper
import { Pagination, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import './styles.css';

import product1 from '../img/products/transformers.jpg';

import {TiTick} from 'react-icons/ti';

const Features = () => {
  return (
    <>
      
      <div className='container pt-3 pb-5'>

<div className='row align-items-center'>
    <div className='col-lg-5'>
    <h2 className='section-heading pb-5'>Silent Features</h2>
        <p className='sec-para'>All standard motors with IE2/ IE3 efficiency values as per IS:12615.</p>

        <p className='pt-1 pb-1'><TiTick/> Separate series of inverter duty motors with force cooling & insulated
         bearings with provision for encoder mounting.</p>
        <p className='pt-1 pb-1'><TiTick/> All standard motors suitable for 50°C ambient.</p>
        <p className='pt-1 pb-1'><TiTick/> Class F insulation with class B temp. rise.</p>
        <p className='pt-1 pb-1'><TiTick/> In-house copper testing lab & acoustic room for noise measurement.</p>
        <p className='pt-1 pb-1'><TiTick/> In-house Vacuum pressure impregnation
(VPI) system with facility to use solvent less resins & high temperature varnishing up to 400 frame.
</p>


<p><TiTick/>Motors with all aluminium construction up to frame 132M.</p>

    
    </div>


    <div className='col-lg-7'>
    <Swiper
        slidesPerView={1}
        // spaceBetween={10}
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
            slidesPerView: 2,
            spaceBetween: 5,
          },
          1400: {
            slidesPerView: 2,
            spaceBetween: 70,
          },
        }}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
            <div className='card-swiper-offer2'>
<img src={product1} alt="swiper-img" className='swipimgcard'/>
<div className='content'>
<h5 className='pt-2'>INVERTER DUTY MOTORS</h5>
<ul className='cart-list-items'>
    <li className='pt-1 pb-1'>Frames : 905 to 355LX </li>
    <li className='pt-1 pb-1'>Rating : 0.37 to 315.0 kW</li>
    <li className='pt-1 pb-1'>Poles	: 2, 4, 6 &8</li>
    <li className='pt-1 pb-1'>Mtg.	: B3,BS, B14 & comb.</li>
    <li className='pt-1 pb-1'>Prot.	: IPSS </li>
    <li className='pt-1 pb-1'>Encl.	: Tot ally enclosed force cooled with 3 ph fan motor</li>

</ul>
</div>
<div className='btnsec'>
    <Link to="/" className='btn btn-primary'>Read More</Link>
</div>
            </div>
        </SwiperSlide>

        <SwiperSlide>
            <div className='card-swiper-offer2'>
<img src={product1} alt="swiper-img" className='swipimgcard'/>
<div className='content'>
<h5 className='pt-2'>CRANE DUTY MOTORS</h5>
<ul className='cart-list-items'>
    <li className='pt-1 pb-1'>Frames : 71 to 315LX </li>
    <li className='pt-1 pb-1'>Rating : 0.18 to 200.0 kW</li>
    <li className='pt-1 pb-1'>Poles	: 4, 6 & 8</li>
    <li className='pt-1 pb-1'>Mtg.	: B3,BS, B14 & comb. </li>
    <li className='pt-1 pb-1'>Prot.	: IPSS </li>
    <li className='pt-1 pb-1'>Encl.	:TEFC</li>
    <li className='pt-1 pb-1'>DutyType : 53 - 55 </li>
    <li className='pt-1 pb-1'>Starts/hr: 60,150, 300Nos.</li>
</ul>
</div>
<div className='btnsec'>
    <Link to="/" className='btn btn-primary'>Read More</Link>
</div>
            </div>
        </SwiperSlide>

        <SwiperSlide>
            <div className='card-swiper-offer2'>
<img src={product1} alt="swiper-img" className='swipimgcard'/>
<div className='content'>
<h5 className='pt-2'>TORQUE MOTORS</h5>
<ul className='cart-list-items'>
    <li className='pt-1 pb-1'>Frames : 63 to 160L  </li>
    <li className='pt-1 pb-1'>Rating : 0.037 to 5.5 kW</li>
    <li className='pt-1 pb-1'>Poles	: 4, 6 & 8</li>
    <li className='pt-1 pb-1'>Mtg.	: B3,BS, B14 & special </li>
    <li className='pt-1 pb-1'>Prot.	: IPSS </li>
    <li className='pt-1 pb-1'>Encl.	: TE or Force Cooled </li>
    <li className='pt-1 pb-1'>Torque  : 0.048 to 3.57 kgm </li>
   
</ul>
</div>
<div className='btnsec'>
    <Link to="/" className='btn btn-primary'>Read More</Link>
</div>
            </div>
        </SwiperSlide>

        <SwiperSlide>
            <div className='card-swiper-offer2'>
<img src={product1} alt="swiper-img" className='swipimgcard'/>
<div className='content'>
<h5 className='pt-2'>ROLLER TABLE MOTORS</h5>
<ul className='cart-list-items'>
    <li className='pt-1 pb-1'>Frames : 112Mt o 160L</li>
    <li className='pt-1 pb-1'>Rating : 0.75 to 7.5</li>
    <li className='pt-1 pb-1'>Poles	: 4, 6 & 8</li>
    <li className='pt-1 pb-1'>Mtg.	: 85 </li>
    <li className='pt-1 pb-1'>Prot.	: IP55 </li>
    <li className='pt-1 pb-1'>Encl.	: TE,TEFC</li>
   
</ul>
</div>
<div className='btnsec'>
    <Link to="/" className='btn btn-primary'>Read More</Link>
</div>
            </div>
        </SwiperSlide>

        <SwiperSlide>
            <div className='card-swiper-offer2'>
<img src={product1} alt="swiper-img" className='swipimgcard'/>
<div className='content'>
<h5 className='pt-2'>BRAKE MOTORS</h5>
<ul className='cart-list-items'>
    <li className='pt-1 pb-1'>Frames : 63 to 250MX </li>
    <li className='pt-1 pb-1'>Rating : 0.18 to 55.0 kW</li>
    <li className='pt-1 pb-1'>Poles	: 2, 4, 6, 8</li>
    <li className='pt-1 pb-1'>Mtg.	: 83,BS, 814 & co m b.  </li>
    <li className='pt-1 pb-1'>Prot.	: IP54 </li>
    <li className='pt-1 pb-1'>Brake Torq. : Upto 400Nm </li>
    <li className='pt-1 pb-1'>DutyType: 51 - 58</li>
   
</ul>
</div>
<div className='btnsec'>
    <Link to="/" className='btn btn-primary'>Read More</Link>
</div>
            </div>
        </SwiperSlide>


        <SwiperSlide>
            <div className='card-swiper-offer2'>
<img src={product1} alt="swiper-img" className='swipimgcard'/>
<div className='content'>
<h5 className='pt-2'>COOLING TOWER MOTOR</h5>
<ul className='cart-list-items'>
    <li className='pt-1 pb-1'>Frames : 71 to315LX </li>
    <li className='pt-1 pb-1'>Rating : 0.37 to 45.0 kW</li>
    <li className='pt-1 pb-1'>Poles	: 4, 6, 8, 10, 12 & others</li>
    <li className='pt-1 pb-1'>Mtg.	: 83 or 85  </li>
    <li className='pt-1 pb-1'>Prot.	: IP55 </li>
    <li className='pt-1 pb-1'>Encl. : TE,TEFC</li>
   
</ul>
</div>
<div className='btnsec'>
    <Link to="/" className='btn btn-primary'>Read More</Link>
</div>
            </div>
        </SwiperSlide>

        <SwiperSlide>
            <div className='card-swiper-offer2'>
<img src={product1} alt="swiper-img" className='swipimgcard'/>
<div className='content'>
<h5 className='pt-2'>Special Application Motors</h5>
<ul className='cart-list-items'>
    <li className='pt-1 pb-1'>Dual Voltage / Dual Frequency motors </li>
    <li className='pt-1 pb-1'>Low Vibration motors for machine tools </li>
    <li className='pt-1 pb-1'>Motors of Extreme Climatic Conditions</li>
    <li className='pt-1 pb-1'>Motors for import Substitute</li>

   
</ul>
</div>
<div className='btnsec'>
    <Link to="/" className='btn btn-primary'>Read More</Link>
</div>
            </div>
        </SwiperSlide>


        <SwiperSlide>
            <div className='card-swiper-offer2'>
<img src={product1} alt="swiper-img" className='swipimgcard'/>
<div className='content'>
<h5 className='pt-2'>TEXTILE MOTORS</h5>
<ul className='cart-list-items'>
    <li className='pt-1 pb-1'>Frames : 100 to 180L </li>
    <li className='pt-1 pb-1'>Rating : 0.55 to 15.0 kW </li>
    <li className='pt-1 pb-1'>Poles	: 4,6 & 8</li>
    <li className='pt-1 pb-1'>Mtg.	: 83 & Pad   </li>
    <li className='pt-1 pb-1'>Prot.	: IPSS </li>
    <li className='pt-1 pb-1'>Encl. : TE, TEFC with clean
flow App. : Ring, Loom, Carding, Ginning & Spinning
</li>
   
</ul>
</div>
<div className='btnsec'>
    <Link to="/" className='btn btn-primary'>Read More</Link>
</div>
            </div>
        </SwiperSlide>

      </Swiper>
    </div>
</div>

</div>

    </>
  )
}

export default Features
