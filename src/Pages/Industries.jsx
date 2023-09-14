import React from 'react'
import Navbar from '../components/Navbar';

import whyImg from '../img/whiychoose.jpg';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import {AiOutlineThunderbolt} from 'react-icons/ai';
import {LiaIndustrySolid} from 'react-icons/lia';
import {TbMichelinStarGreen, TbTargetArrow} from 'react-icons/tb';
import {BsLayoutWtf} from 'react-icons/bs';
import {IoRocketOutline} from 'react-icons/io5'



const Industries = () => {
  return (
    <>
      <Navbar/>
      <div className='leave-navbar'/>
      <section className='breadcrumb '>

<div className='crumb-content'>
  <h1>Electrical Solutions
for Your Industry</h1>
<p style={{color:"white", fontWeight:"500"}} className='pt-3'>We are proficient in the execution of pre-design, design& build projects.
Our field of experience cover all types of  services in projects as diverse as Design and Development, Supply of Electrical Switch gears,ControlGears,CabIes, Motors etc., In addition, we can also provide Analysis,
,Pre-Planning Testing, Supervision of Erection & Commissioning.
</p>
</div>
<div className='bg-black-banner'/>
      </section>

      <div className='container pt-5 '>
        <div className='row pt-3'>
          <div className='col-lg-7'>
<img src={whyImg} alt='secimg' className='bread-innerImg'/>
          </div>

          <div className='col-lg-5'>


<div className='first-sec '>
   <IoRocketOutline className='forst-sec-icons'/>
            <h2>Our Vision</h2>
            <p style={{fontWeight:'500'}}>We would like to contribute wealth of all stake 
            holders through professional,ethical and compliant means.</p>
</div>

<div className='first-sec pt-5'>
        <TbTargetArrow className='forst-sec-icons'/>
          <h2>Our Mission</h2>
          <p style={{fontWeight:'500'}}>We want  to  excel in  what we do, be it supply of products or
           providing timely and quality service to our esteemed customer.</p>
</div>
       
          
      
          
          </div>

      
        </div>
      </div>
{/* 
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
      </div> */}

      <div className='container pb-5 pt-5'>
        <div className='row pt-5'>

          <div className='col-lg-3 col-md-4 col-sm-12 pt-2 pb-2'>
            <div className='offer-inner-card'>
            <div className='d-flex justify-content-end'>
            <AiOutlineThunderbolt className='offer-card'/>
            </div>

<h5 className='position-absolute pt-3'>Power System</h5>
            </div>
          </div>

     

          <div className='col-lg-3 col-md-4 col-sm-12 pt-2 pb-2'>
            <div className='offer-inner-card'>
            <div className='d-flex justify-content-end'>
            <LiaIndustrySolid className='offer-card'/>
            </div>

<h5 className='position-absolute pt-3'>Industrial Solutions</h5>
            </div>
          </div>

          <div className='col-lg-3 col-md-4 col-sm-12 pt-2 pb-2'>
            <div className='offer-inner-card'>
            <div className='d-flex justify-content-end'>
            <TbMichelinStarGreen className='offer-card'/>
            </div>

<h5 className='position-absolute pt-3'>Green Energy</h5>
            </div>
          </div>

          <div className='col-lg-3 col-md-4 col-sm-12 pt-2 pb-2'>
            <div className='offer-inner-card'>
            <div className='d-flex justify-content-end'>
            <BsLayoutWtf className='offer-card'/>
            </div>

<h5 className='position-absolute pt-3'> Colony &   <br/> Layout solutions</h5>
            </div>
          </div>
      
        </div>
      </div>

      <Contact/>
      <Footer/>
    </>
  )
}

export default Industries;