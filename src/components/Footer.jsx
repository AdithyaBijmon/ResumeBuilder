import React from 'react'
import { MdAttachEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";



function Footer() {
  return (
    <>
      <div style={{ height: '400px', backgroundColor: 'purple' }} className='d-flex align-items-center justify-content-center text-light' >

        <div className='text-center'>
          <h1>Contact Us</h1>
          <h4><MdAttachEmail /> resumebuilder@gmail.com</h4>
          <h4><FaPhoneAlt /> 8978675645</h4>

          <h4 className='mt-4'>Connect with us</h4>

          <div className='d-flex justify-content-center fs-4'>
            <FaWhatsapp className='me-3' />
            <FaFacebook className='me-3' />
            <FaInstagram />

          </div>
          <p className='mt-3'>Designed and built with ❤️ using React</p>
        </div>
        

      </div>
    </>
  )
}

export default Footer