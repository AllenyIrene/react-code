import React from 'react'
import {BsInstagram} from "react-icons/bs"
import {BsTwitter} from "react-icons/bs"
import {FaTiktok} from "react-icons/fa"
import {BsFacebook} from "react-icons/bs"

const Footer = () => {
  return (
    <div className='footer'>
      <section className='footer-socila'>
        <h4>GET US ON OUR SOCIAL MEDIA PAGES</h4>
        <div className='social'>
          <button><BsInstagram size="2rem" color="palevioletred"/><a href='!#'>Instagram</a></button>
          <button><BsTwitter size="2rem" color="palevioletred"/><a href='!#'>Twitter</a></button>
          <button><BsFacebook size="2rem" color="palevioletred"/><a href='!#'>Facebook</a></button>
          <button><FaTiktok size="2rem" color="palevioletred"/><a href='!#'>Tiktok</a></button>
        </div>

      </section>
      <section className='footer-dt'>
        <div className='footer-details' >
          <h1>Patnership</h1>
          <div className='dt'>
            <p>Web Hosting</p>
            <p>Social Media Management</p>
            <p>Branding</p>
          </div>
        </div>
        <div className='footer-details' >
          <h1>Patnership</h1>
          <div className='dt'>
            <p>Web Hosting</p>
            <p>Social Media Management</p>
            <p>Branding</p>
          </div>
        </div>
        <div className='footer-details' >
          <h1>Patnership</h1>
          <div className='dt'>
            <p>Web Hosting</p>
            <p>Social Media Management</p>
            <p>Branding</p>
          </div>
        </div>

        </section>
        <section>
          <h1>All Rights Preserved @2023</h1>
        </section>

    </div>
  )
}

export default Footer