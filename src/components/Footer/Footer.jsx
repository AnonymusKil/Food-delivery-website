import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom'
function Footer() {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                <Link to="/"><img src={assets.logo} alt="" /></Link>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum eligendi ratione, deserunt nulla at totam corrupti doloribus voluptates nostrum aspernatur rem fuga perferendis sit, et officiis. Porro architecto neque ratione.</p>
                <div className="footer-social-icons">
                    <img src={assets.facebook_icon} alt="" />
                    <img src={assets.twitter_icon} alt="" />
                    <img src={assets.linkedin_icon} alt="" />
                </div>
            </div>
            <div className="footer-content-center">
                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>
            <div className="footer-content-right">
                <h2>GET IN TOUCH</h2>
                <ul>
                    <li>+2349060829364</li>
                    <li>navadesignz11@gmail.com</li>
                </ul>
            </div>
        </div>
        <hr />
        <p className="footer-copyright">Copyright 2025 &copy Tomato.com All rights Reserved</p>
        </div>
  )
}

export default Footer