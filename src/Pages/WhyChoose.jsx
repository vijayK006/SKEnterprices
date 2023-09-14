import React from 'react'
import Navbar from '../components/Navbar';

import whyImg from '../img/whiychoose.jpg';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import {AiOutlineSolution} from 'react-icons/ai';
import {LiaTruckMovingSolid} from 'react-icons/lia';
import {SiMaterialdesign} from 'react-icons/si';
import {SlSupport} from 'react-icons/sl';




const WhyChoose = () => {
  return (
    <>
      <Navbar/>
      <div className='leave-navbar'/>
      <section className='breadcrumb '>

<div className='crumb-content'>
  <h1>Why Choose us</h1>
</div>
<div className='bg-black-banner'/>
      </section>

      <div className='container pt-5 '>
        <div className='row pt-3'>
          <div className='col-lg-6'>
<img src={whyImg} alt='secimg' className='bread-innerImg'/>
          </div>

          <div className='col-lg-6'>
            <div className='content-breadcrumb'>
            <h2>Why SKE India ?</h2>
<p>SKE offers a comprehensive range of reliable and high efficiency motors. SKE's general performance
IE2 efficiency motors are best suited
for applications where simplicity and off-the-shelf availability are paramount.
</p>

<p>With expertise, and a comprehensive portfolio of products and life-cycle services,	we	help
	value-minded industrial		customers their energy efficiency and productivity.</p>

  <h4 className='pt-5'>Our primary focus</h4>
  <p>We drive our strength from our customers.
The growth of the latter is the prerequisite to the growth of the company and hence customers'  satisfaction	is its	prime objective.  In	an ongoing process to improve customer satisfaction, we
offer a variety of Services:
</p>

<ul>
  <li style={{listStyle:"decimal-leading-zero",color:"gray",}} className='pt-1 pb-1'>Competitive prices</li>
  <li style={{listStyle:"decimal-leading-zero",color:"gray",}} className='pt-1 pb-1'>Consistent quality</li>
  <li style={{listStyle:"decimal-leading-zero",color:"gray",}} className='pt-1 pb-1'>Justin time delivery</li>
  <li style={{listStyle:"decimal-leading-zero",color:"gray",}} className='pt-1 pb-1'>Product development for a changing Market</li>
  <li style={{listStyle:"decimal-leading-zero",color:"gray",}} className='pt-1 pb-1'>A targeted stocking policy</li>
  <li style={{listStyle:"decimal-leading-zero",color:"gray",}} className='pt-1 pb-1'>Technical support for applications/ projects</li>
</ul>
            </div>
          </div>
        </div>
      </div>

      <div className='container pt-5 pb-5'>
        <div className='row pt-5 pb-5'>

          <div className='col-lg-6 pt-4 pb-4'>
            <div className='q-card'>
            <div className='d-flex'>
          <h5 className='numbering-dig'>01/</h5> &nbsp; &nbsp;<h5> We Are Knowledgeable and <br/> Experienced</h5>
            </div>
              
             <p>
             Each member of our staff is an expert in the product they support. They take part in ongoing education, staying up to date on the latest features, trends, tips and tricks. So, they can pass what 
              they learn on to our clients and use it to help ensure each projects success.</p>
            </div>
          </div>

          <div className='col-lg-6 pt-4 pb-4'>
            <div className='q-card'>
            <div className='d-flex align-items-center'>
            <h5 className='numbering-dig'>02/</h5> &nbsp; &nbsp;<h5>Our Employees Get Involved and Care about Our Customer’s Success</h5>
            </div>
              <p>Our team of experts is not only knowledgeable, they’re passionate
               about helping our customers succeed. If you are looking for peace of
                mind that your technology partner will be there when you need them,
                 look no further. From our first interaction, we will focus our efforts 
              on helping you find a solution to the issues you face.</p>
            </div>
          </div>

          <div className='col-lg-6 pt-4 pb-4'>
            <div className='q-card'>
            <div className='d-flex'>
            <h5 className='numbering-dig'>03/</h5> &nbsp; &nbsp;<h5> We are a One-Stop Shop for All Your Business Technology Needs</h5>
            </div>
              <p>Unlike many value-added resellers who only specialize in one or two
               products, we have the expertise to help you manage all of your business 
               technology. This makes us a great fit for businesses who don’t have
               the resources or who want to add a little extra muscle to their team.</p>
            </div>
          </div>

          <div className='col-lg-6 pt-4 pb-4'>
            <div className='q-card'>
            <div className='d-flex'>
            <h5 className='numbering-dig'>04/</h5> &nbsp; &nbsp;<h5>We Are Much More Than a solution provider, We Are Your Business Partner</h5>
            </div>
              <p>One of our guiding principles is to value relationships. So, 
              we don’t just work hard to win the sale, we work hard to earn our
               clients’ business every day. We understand that when our customers
                choose us, they’re entrusting a very important part of their business,
                 their technology, to us. You can count on us for fast turnaround,
                  innovative ideas and top-notch 
              service that feels like we’re your own employees, not a vendor.</p>
            </div>
          </div>

     

        </div>
      </div>

      <div className='container pb-5'>
        <div className='row'>

          <div className='col-lg-3 col-md-4 col-sm-12 pt-2 pb-2'>
            <div className='offer-inner-card'>
            <div className='d-flex justify-content-end'>
            <AiOutlineSolution className='offer-card'/>
            </div>

<h5 className='position-absolute'>End-to-End Solution <br/> Provider</h5>
            </div>
          </div>

     

          <div className='col-lg-3 col-md-4 col-sm-12 pt-2 pb-2'>
            <div className='offer-inner-card'>
            <div className='d-flex justify-content-end'>
            <LiaTruckMovingSolid className='offer-card'/>
            </div>

<h5 className='position-absolute'>Supply of Electrical <br/> Equipment</h5>
            </div>
          </div>

          <div className='col-lg-3 col-md-4 col-sm-12 pt-2 pb-2'>
            <div className='offer-inner-card'>
            <div className='d-flex justify-content-end'>
            <SiMaterialdesign className='offer-card'/>
            </div>

<h5 className='position-absolute'>Design and  <br/> Development</h5>
            </div>
          </div>

          <div className='col-lg-3 col-md-4 col-sm-12 pt-2 pb-2'>
            <div className='offer-inner-card'>
            <div className='d-flex justify-content-end'>
            <SlSupport className='offer-card'/>
            </div>

<h5 className='position-absolute'>Installation and  <br/> Commissioning <br/> Support</h5>
            </div>
          </div>
      
        </div>
      </div>

      <Contact/>
      <Footer/>
    </>
  )
}

export default WhyChoose