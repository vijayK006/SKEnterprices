import React from 'react'
import Navbar from '../components/Navbar';

import acMotorImg from '../img/products/ACMotors.jpg';
import Contact from '../components/Contact';
import Footer from '../components/Footer';




const Our_Products = () => {
  return (
    <>
      <Navbar/>
      <div className='leave-navbar'/>
      <section className='breadcrumb '>

<div className='crumb-content'>
  <h1>Our Products</h1>
<p style={{color:"white", fontWeight:"500"}} className='pt-3'>We Supply  MV switchgear 
(VCB )and VCB Panels 6.6/12/24/36KV & All range of  Modular PCCs,MCCs, Drive Panels, 
VFD Panels, EB/DG Changeover Panels,DG Syn. /AMF Panels,Passive Harmonic Filter Panels,
APFC Panels,Piller Box,HVAC Control Panels,PLC based Control Panels,Ventilation Fan Control
 Panels,STP/RO/Pump Control  Panels, Power & Control Cables etc
</p>
</div>
<div className='bg-black-banner'/>
      </section>

<div className='container leave-navbar'>
  <div className='row'>

    <div className='col-lg-3 col-md-6 col-sm-12 pt-4 pb-4'>
      <div className='product-cards'>
        <img src={acMotorImg} className='product-img2' alt="productimg"/>
<h5 className='productTitle'>AC Motors</h5>
<div className='productDetailCard'>
<div className='row'>
  <div className='col-lg-6'>
  <ul className='list-content_li'>
  <li>High Voltage Motor</li>
  <li>Rerolling Mill Duty Motor</li>
  <li>Closed Cage Type Motor</li>
  <li>Open Type Cage Motor</li>
  <li>Wound Open Type Motor</li>
  <li>Wound Close Type Motor</li>
  </ul>
  </div>

  <div className='col-lg-6'>
<ul className='list-content_li'>
  <li>Flame Proof Motors</li>
  <li>Non- Sparkling Motors</li>
  <li>Vertical Hollow Shaft Motors</li>
  <li>Crane Duty/ Slipering Motors</li>
<li>Roller Table Motors</li>  
<li>Roller Table Motors</li>  

</ul>
  </div>
</div>


</div>
      </div>
    </div>

    <div className='col-lg-3 col-md-6 col-sm-12 pt-4 pb-4'>
      <div className='product-cards'>
        <img src={acMotorImg} className='product-img2' alt="productimg"/>
<h5 className='productTitle'>DC Motors </h5>
<div className='productDetailCard'>
<div className='row'>
  <div className='col-lg-6'>
  <ul className='list-content_li'>
  <li>Laminated yoke DC Motors</li>
  <li>RMill Duty DC Motors</li>
  <li>Solid yoke DC Motors</li>
  </ul>
  </div>


</div>


</div>
      </div>
    </div>

    <div className='col-lg-3 col-md-6 col-sm-12 pt-4 pb-4'>
      <div className='product-cards'>
        <img src={acMotorImg} className='product-img2' alt="productimg"/>
<h5 className='productTitle'>Transformers</h5>
<div className='productDetailCard2'>
<div className='row'>
  <div className='col-lg-6'>
  <ul className='list-content_li'>
  <li>Oil Immersed
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

  <div className='col-lg-6'>
  <ul className='list-content_li'>
  <li>Dry Type Transformer
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
    </div>

    <div className='col-lg-3 col-md-6 col-sm-12 pt-4 pb-4'>
      <div className='product-cards'>
        <img src={acMotorImg} className='product-img2' alt="productimg"/>
<h5 className='productTitle'>Gearbox</h5>
<div className='productDetailCard2'>
<div className='row'>
  <div className='col-lg-6'>
  <ul className='list-content_li'>
  <li>Planitery Gear Box</li>
  <li>Worm Gear Box</li>

  </ul>
  </div>

  <div className='col-lg-6'>
  <ul className='list-content_li'>
  <li>Helical Gear Box
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
    </div>

    <div className='col-lg-3 col-md-6 col-sm-12 pt-4 pb-4'>
      <div className='product-cards'>
        <img src={acMotorImg} className='product-img2' alt="productimg"/>
<h5 className='productTitle'>Switchgear Panels </h5>

<div className='productDetailCard'>
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
    <div id="home" className="container tab-pane active">

      <p className='tab-title'>Medium Voltage Panels</p>

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
    <div id="menu1" className="container tab-pane fade">
      <p className='tab-title'>Low Voltage Panels</p>
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
    <div id="menu2" className="container tab-pane fade">
    <p className='tab-title'>Special</p>

      <ul>
    <li>Control & Relay Panels</li>
  <li>Bus Ducts</li>
  <li>DBR</li>
  <li>Compact Substations</li>
  </ul>
    </div>
  </div>
</div>


{/* <div className='productDetailCard'>
<div className='row'>
  <div className='col-lg-4'>
  <ul className='list-content_li'>
  <li>Medium Voltage Panels
<ul>
<li>3.3 KV to 33 KV CICO Panels</li>
  <li>3.3 KV to 33 KV Line-up  Panels</li>
  <li>Medium Voltage Soft Starters</li>
  <li>Neutral Groundis Resistors Panels</li>
</ul>
</li>

  </ul>
  </div>

  <div className='col-lg-5'>
  <ul className='list-content_li'>
  <li>Low Voltage Panels</li>
  <div className='row'>
    <div className='col-5'><ul>
<li>PCC</li>
  <li>MCC</li>
  <li>Soft Starter Panels</li>
  <li>VFD Panels</li>
  </ul></div>
    <div className='col-3'>
        <ul>
  <li>DC Drive Panels</li>
  <li>Distribution Boards</li>
  <li>Control Desks</li>
  <li>Fire Fighting Panels</li>
</ul>
    </div>
  </div>

  </ul>
  </div>

  <div className='col-lg-3'>
  <ul className='list-content_li'>
  <li>Special
  <ul>
    <li>Control & Relay Panels</li>
  <li>Bus Ducts</li>
  <li>DBR</li>
  <li>Compact Substations</li>
  </ul>


</li>

  </ul>
  </div>


</div>


</div> */}
      </div>
    </div>


    <div className='col-lg-3 col-md-6 col-sm-12 pt-4 pb-4'>
      <div className='product-cards'>
        <img src={acMotorImg} className='product-img2' alt="productimg"/>
<h5 className='productTitle'>Supply of Spares</h5>
<div className='productDetailCard'>
<div className='row'>
  <div className='col-lg-6'>
  <ul className='list-content_li'>
  <li>Substation Equipments</li>
  <li>Switchgear MV Panel Spares</li>
  <li>Switcgear LV Panel Spares</li>
  <li>Drive Panel Spares</li>
  <li>Motors</li>
  <li>Relays</li>
  </ul>
  </div>
</div>


</div>
      </div>
    </div>

    <div className='col-lg-3 col-md-6 col-sm-12 pt-4 pb-4'>
      <div className='product-cards'>
        <img src={acMotorImg} className='product-img2' alt="productimg"/>
<h5 className='productTitle'>Solutions</h5>
<div className='productDetailCard'>
<div className='row'>
  <div className='col-lg-6'>
  <ul className='list-content_li'>
  <li>Substation Solution</li>
  <li>Residential Power Distribution (Layout)</li>
  <li>Solar Power Generation</li>
  <li>Automation Solution</li>
  </ul>
  </div>
</div>


</div>
      </div>
    </div>

    <div className='col-lg-3 col-md-6 col-sm-12 pt-4 pb-4'>
      <div className='product-cards'>
        <img src={acMotorImg} className='product-img2' alt="productimg"/>
<h5 className='productTitle'>Services</h5>
<div className='productDetailCard2'>
<div className='row'>
  <div className='col-lg-6'>
  <ul className='list-content_li'>
  <li>Design & Development</li>
  <li>AMC Services</li>
  <li>Testing & Programming Service</li>
  <li>Power Auditing</li>
  </ul>
  </div>
</div>


</div>
      </div>
    </div>

    <div className='col-lg-3 col-md-6 col-sm-12 pt-4 pb-4'>
      <div className='product-cards'>
        <img src={acMotorImg} className='product-img2' alt="productimg"/>
<h5 className='productTitle'>Pumps & Valves</h5>
<div className='productDetailCard'>
<div className='row'>
  <div className='col-lg-6'>
  <ul className='list-content_li'>
  <li>Centrifugal Pumps</li>
  <li>Fire Fighting Pumps</li>
  <li>Gear pumps</li>
  <li>Chemical Pumps</li>
  <li>Valves</li>
  </ul>
  </div>
</div>


</div>
      </div>
    </div>          


    <div className='col-lg-3 col-md-6 col-sm-12 pt-4 pb-4'>
      <div className='product-cards'>
        <img src={acMotorImg} className='product-img2' alt="productimg"/>
<h5 className='productTitle'>Break Motors</h5>
<div className='productDetailCard'>
<div className='row'>
  <div className='col-lg-6'>
  <ul className='list-content_li'>
  <li>Gear Motor with Brake</li>
  <li>Crane Duty Brake Motor</li>
  <li>Flame Proof Motor with Brake</li>

  </ul>
  </div>
</div>


</div>
      </div>
    </div>



  </div>
</div>

      <Contact/>
      <Footer/>
    </>
  )
}

export default Our_Products;