import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'
const Footer = () => {
  return (
   
    <div className='footer' id = 'footer'>
      <div className='footer-content'> 
<div className='footer-content-left'>
<img src = {assets.Logo1} alt = "" width ={140} height = {50}/>
<p>© 2025 Swiggy Limited</p>

<div className='footer-social-icons'></div>


<img src = {assets.linkedin} alt = ""  width = {40} height = {40}/>
<img src = {assets.instra} alt = "" width = {40} height = {40}/>
<img src = {assets.facebook} alt = "" width = {40} height = {40}/>
</div>
<div className='footer-content-right'>
<h2>Get In Touch</h2>
<ul>
<li>+919007348586</li>
<li>contact@swiggy.com</li>
</ul>
</div>
<div className='footer-content-center'>
 <h2>Company</h2>
 <ul>
    <li>Home</li>
    <li>About us</li>
    <li>Delivery</li>
    <li>Privacy policy</li>
    

 </ul>
</div>

      </div>

      <hr/>
      <p className='footer-copy-right'>Copyright 2025 @Swiggy.com - All Right Reserved</p>
     
    </div>
  )
}

export default Footer
