import React from 'react'
import Navbar from '../components/Navbar';

import whyImg from '../img/whiychoose.jpg';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

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

  <h4>Our primary focus</h4>
  <p>We drive our strength from our customers.
The growth of the latter is the prerequisite to the growth of the company and hence customers'  satisfaction	is its	prime objective.  In	an ongoing process to improve customer satisfaction, we
offer a variety of Services:
</p>

<ul>
  <li>Competitive prices</li>
  <li>Consistent quality</li>
  <li>Justin time delivery</li>
  <li>Product development for a changing Market</li>
  <li>A targeted stocking policy</li>
  <li>Technical support for applications/ projects</li>
</ul>
            </div>
          </div>
        </div>
      </div>

      <div className='container pt-5'>
        <div className='row pt-5 pb-5'>

          <div className='col-lg-6 pt-2 pb-2'>
            <div className='q-card'>
              <h5>01. We Are Knowledgeable and Experienced</h5>
              <p>Each member of our staff is an expert in the product they support. They take part in ongoing education, staying up to date on the latest features, trends, tips and tricks. So, they can pass what 
              they learn on to our clients and use it to help ensure each projects success.</p>
            </div>
          </div>

          <div className='col-lg-6 pt-2 pb-2'>
            <div className='q-card'>
              <h5>02. Our Employees Get Involved and Care about Our Customer’s Success</h5>
              <p>Our team of experts is not only knowledgeable, they’re passionate
               about helping our customers succeed. If you are looking for peace of
                mind that your technology partner will be there when you need them,
                 look no further. From our first interaction, we will focus our efforts 
              on helping you find a solution to the issues you face.</p>
            </div>
          </div>

          <div className='col-lg-6 pt-2 pb-2'>
            <div className='q-card'>
              <h5>03. We are a One-Stop Shop for All Your Business Technology Needs</h5>
              <p>Unlike many value-added resellers who only specialize in one or two
               products, we have the expertise to help you manage all of your business 
               technology. This makes us a great fit for businesses who don’t have
               the resources or who want to add a little extra muscle to their team.</p>
            </div>
          </div>

          <div className='col-lg-6 pt-2 pb-2'>
            <div className='q-card'>
              <h5>04. We Are Much More Than a solution provider, We Are Your Business Partner</h5>
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

      <Contact/>
      <Footer/>
    </>
  )
}

export default WhyChoose