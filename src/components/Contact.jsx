import React from 'react';
import {IoLocationOutline} from 'react-icons/io5';
import {BsTelephonePlus} from 'react-icons/bs';
import {FiMail} from 'react-icons/fi';

const Contact = () => {
  return (
    <>
        <section className='contactsec pt-5  pb-5' id="contact">
            <div className='container'>
                <div className='row card-gray-bg'>
                    <div className='col-lg-6'>
                    <h2 style={{fontSize:"60px", color:"#0280fe"}}>Get In Touch </h2>
<h5 className='pt-4'><IoLocationOutline/> Address</h5>
<p>No 294, 10th Main, 4th BlockRajaji Nagar, Bangalore - 560010</p>

<h5 className='pt-3'><BsTelephonePlus/> Phone no.</h5>
<a href='tel:8098564648' className='link-black'>+91 8098564648</a>

<h5 className='pt-4'><FiMail/> Email</h5>
<a href='mailto:sales1.skenterprise@gmail.com' className='link-black'>sales1.skenterprise@gmail.com</a><br/>
<a href='mailto:design.skenterprise@gmail.com' className='link-black'>design.skenterprise@gmail.com</a>

                    </div>
                    <div className='col-lg-6'>

                        <form>
                            <div className='row'>
                                <div className='col-lg-6 pt-2 pb-2'><input type='text' placeholder='Enter your first name' className='form-control' style={{lineHeight:"2"}}/></div>
                                <div className='col-lg-6 pt-2 pb-2'><input type='text' placeholder='Enter your last name' className='form-control' style={{lineHeight:"2"}}/></div>
                                <div className='col-lg-12 pt-2 pb-2'><input type='text' placeholder='Enter your email' className='form-control' style={{lineHeight:"2"}}/></div>
                                <div className='col-lg-12 pt-2 pb-2'>
<textarea cols="5" rows="5" className='form-control' placeholder='Enter message ...'></textarea>

                                </div>

                                <input type='submit' value="Sumbit" className='btn btn-primary mt-3' style={{width:"200px" , marginLeft:"10px"}}/>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Contact