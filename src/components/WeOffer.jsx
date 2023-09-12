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


const WeOffer = () => {
  return (
    <>
              {/* We Offer section Start*/}

<section className='container pb-5'>
<h2 className='section-heading  text-center'>We Offer</h2>

<div className='d-flex justify-content-center pb-3'>
<h5 className='sub-header'>End to End Solution</h5>
</div>

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
            slidesPerView: 3,
            spaceBetween: 20,
          },
          1400: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
        }}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
            <div className='card-swiper-offer'>
<img src={product1} alt="swiper-img" className='swipimgcard'/>
<div className='content'>
<h5 className='pt-2'>Transformers</h5>
<ul>
    <li className='pt-1 pb-1'>Power Transformer Voltage level: upto 66KVn</li>
    <li className='pt-1 pb-1'>Distribution trafo. As per specifications</li>
</ul>
</div>
<div className='btnsec'>
    <Link to="/" className='btn btn-primary'>Read More</Link>
</div>
            </div>
        </SwiperSlide>

        <SwiperSlide>
            <div className='card-swiper-offer'>
<img src={product1} alt="swiper-img" className='swipimgcard'/>
<div className='content'>
<h5 className='pt-2'>LV Panels</h5>
<ul>
    <li className='pt-1 pb-1'>Motor Control Centers</li>
    <li className='pt-1 pb-1'>Power Control Centers</li>
    <li>Power Distribution panels</li>
    <li>Starter Panels -DOL, SD, RDOL etc -Soft Starter Panels</li>
</ul>
</div>
<div className='btnsec'>
    <Link to="/" className='btn btn-primary'>Read More</Link>
</div>
            </div>
        </SwiperSlide>

        <SwiperSlide>
            <div className='card-swiper-offer'>
<img src={product1} alt="swiper-img" className='swipimgcard'/>
<div className='content'>
<h5 className='pt-2'>MV Panels</h5>
<ul>
    <li className='pt-1 pb-1'>Voltage range-6.6 to 33KV </li>
    <li className='pt-1 pb-1'>Current Rating: 630A to 3150A with STC - 25KA to 40KA</li>
    <li className='pt-1 pb-1'>Indoor and Outdoor design</li>
    <li className='pt-1 pb-1'>Protec tions schemes, -Transformer -Line</li>
</ul>
</div>
<div className='btnsec'>
    <Link to="/" className='btn btn-primary'>Read More</Link>
</div>
            </div>
        </SwiperSlide>

        <SwiperSlide>
            <div className='card-swiper-offer'>
<img src={product1} alt="swiper-img" className='swipimgcard'/>
<div className='content'>
<h5 className='pt-2'>Drive Panels</h5>
<ul>
    <li className='pt-1 pb-1'>In Association with NIDEC for supporting customers by supplying</li>
    <li className='pt-1 pb-1'>DC Drives</li>
    <li className='pt-1 pb-1'> Variable Frequency Drives</li>
</ul>
</div>
<div className='btnsec'>
    <Link to="/" className='btn btn-primary'>Read More</Link>
</div>
            </div>
        </SwiperSlide>

        <SwiperSlide>
            <div className='card-swiper-offer'>
<img src={product1} alt="swiper-img" className='swipimgcard'/>
<div className='content'>
<h5 className='pt-2'>PLC Panels</h5>
<ul>
    <li className='pt-1 pb-1'>Providing Advance automation solution in association with
NIDEC Industrial Automation  systems</li>
</ul>
</div>
<div className='btnsec'>
    <Link to="/" className='btn btn-primary'>Read More</Link>
</div>
            </div>
        </SwiperSlide>

        <SwiperSlide>
            <div className='card-swiper-offer'>
<img src={product1} alt="swiper-img" className='swipimgcard'/>
<div className='content'>
<h5 className='pt-2'>Substation Solution</h5>
<ul>
    <li className='pt-1 pb-1'>Voltage level: upto 132KV</li>
    <li className='pt-1 pb-1'>Best - In Class Products Contruction schemes:
    <br/>
    {'>'} Single Bay
    <br/>
    {'>'}  Multi   Bays
    <br/>
    {'>'} Bus section and coupler
    </li>
</ul>
</div>
<div className='btnsec'>
    <Link to="/" className='btn btn-primary'>Read More</Link>
</div>
            </div>
        </SwiperSlide>

        <SwiperSlide>
            <div className='card-swiper-offer'>
<img src={product1} alt="swiper-img" className='swipimgcard'/>
<div className='content'>
<h5 className='pt-2'>Distribution boards</h5>
<ul>
    <li className='pt-1 pb-1'>RTDB's</li>
    <li className='pt-1 pb-1'>MLBD's</li>
    <li className='pt-1 pb-1'>APDB's</li>
    <li className='pt-1 pb-1'>Junction Boxes etc,.</li>
</ul>
</div>
<div className='btnsec'>
    <Link to="/" className='btn btn-primary'>Read More</Link>
</div>
            </div>
        </SwiperSlide>

        <SwiperSlide>
            <div className='card-swiper-offer'>
<img src={product1} alt="swiper-img" className='swipimgcard'/>
<div className='content'>
<h5 className='pt-2'>C&R Panels</h5>
<ul>
    <li className='pt-1 pb-1'>Dead front and 19 rake design</li>
    <li className='pt-1 pb-1'>Protection scheme :
    <br/>
    {'>'} Transformer

    <br/>
    {'>'} Line

    <br/>
    {'>'} Bus Bar

    <br/>
    {'>'} Generator etc
    </li>

</ul>
</div>
<div className='btnsec'>
    <Link to="/" className='btn btn-primary'>Read More</Link>
</div>
            </div>
        </SwiperSlide>

        <SwiperSlide>
            <div className='card-swiper-offer'>
<img src={product1} alt="swiper-img" className='swipimgcard'/>
<div className='content'>
<h5 className='pt-2'>APFC Panels</h5>
<ul>
    <li className='pt-1 pb-1'>Voltage level: upto 690VAC</li>
    <li className='pt-1 pb-1'>Both cont actor and thyrist or  switching</li>
    <li className='pt-1 pb-1'>Easy for maintenance</li>

</ul>
</div>
<div className='btnsec'>
    <Link to="/" className='btn btn-primary'>Read More</Link>
</div>
            </div>
        </SwiperSlide>

        <SwiperSlide>
            <div className='card-swiper-offer'>
<img src={product1} alt="swiper-img" className='swipimgcard'/>
<div className='content'>
<h5 className='pt-2'>RT Motors</h5>
<ul>
    <li className='pt-1 pb-1'>Range of motors</li>
    <li className='pt-1 pb-1'>Slip-Ring</li>
    <li className='pt-1 pb-1'>Squirrel cage</li>
    <li className='pt-1 pb-1'>Sunchronous motors etc</li>

</ul>
</div>
<div className='btnsec'>
    <Link to="/" className='btn btn-primary'>Read More</Link>
</div>
            </div>
        </SwiperSlide>

        <SwiperSlide>
            <div className='card-swiper-offer'>
<img src={product1} alt="swiper-img" className='swipimgcard'/>
<div className='content'>
<h5 className='pt-2'>Mill Duty Motors</h5>
<ul>
    <li className='pt-1 pb-1'>Range of motors</li>
    <li className='pt-1 pb-1'>DC Motors</li>
    <li className='pt-1 pb-1'>Induction Motors As per customer requirement</li>

</ul>
</div>
<div className='btnsec'>
    <Link to="/" className='btn btn-primary'>Read More</Link>
</div>
            </div>
        </SwiperSlide>

        <SwiperSlide>
            <div className='card-swiper-offer'>
<img src={product1} alt="swiper-img" className='swipimgcard'/>
<div className='content'>
<h5 className='pt-2'>CABLES</h5>
<ul>
    <li className='pt-1 pb-1'>HT & LT Power Cables</li>
    <li className='pt-1 pb-1'>Control Cables</li>
    <li className='pt-1 pb-1'>Instrumen tation Cables etc.,.</li>

</ul>
</div>
<div className='btnsec'>
    <Link to="/" className='btn btn-primary'>Read More</Link>
</div>
            </div>
        </SwiperSlide>

        <SwiperSlide>
            <div className='card-swiper-offer'>
<img src={product1} alt="swiper-img" className='swipimgcard'/>
<div className='content'>
<h5 className='pt-2'>CONTROL DESK</h5>
<ul>
    <li className='pt-1 pb-1'>Integrated systems with unique solution and plug and play design</li>


</ul>
</div>
<div className='btnsec'>
    <Link to="/" className='btn btn-primary'>Read More</Link>
</div>
            </div>
        </SwiperSlide>

        <SwiperSlide>
            <div className='card-swiper-offer'>
<img src={product1} alt="swiper-img" className='swipimgcard'/>
<div className='content'>
<h5 className='pt-2'>Bus Duct</h5>
<ul>
    <li className='pt-1 pb-1'>Non segrigated bus duct, Voltage upto 690VAC</li>
    <li className='pt-1 pb-1'>Current capacity: 1200A to 6300A</li>


</ul>
</div>
<div className='btnsec'>
    <Link to="/" className='btn btn-primary'>Read More</Link>
</div>
            </div>
        </SwiperSlide>

      </Swiper>
</section>
        {/* We Offer section End*/}
    </>
  )
}

export default WeOffer
