import React, { useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { StoreContext } from '../../context/StoreContext';


const Navbar = ({setShowLogin}) => {
const [menu,setMenu] = useState("Home");
const{getTotalCartAmount} = useContext(StoreContext);


  return (
    <div className='navbar'>
       <Link to = '/'><img src = {assets.Logo1}alt = ""  className='logo'/></Link> 
        <ul className='navbar-menu'>
        <Link to = '/' onClick = {() =>setMenu("Home")}className={menu === "Home"?"active" : ""}>Home</Link>
        <a href = "#explore-menu" onClick = {() =>setMenu("menu")}className={menu === "menu"?"active" : ""}>menu</a>
        <a href = '#app-download'  onClick = {() =>setMenu("mobile-app")}className={menu === "mobile-app"?"active" : ""}>mobile-app</a>
        <a  href = '#footer ' onClick = {() =>setMenu("contact-us")}className={menu === "contact-us"?"active" : ""}>contact us</a>
        </ul>
    <div className='navbar-right'>
    
      <img src = {assets.searchicon} alt = "" width = {40}/>
     <div className='navbar-search-icon'>
       <Link to = '/Cart'><img src = {assets.BasketLogo} alt = "" width = {70}/></Link>
       <div className={getTotalCartAmount() === 0 ? " ":"dot"}></div>
     </div>
    
    <button onClick={() => setShowLogin(true)}>Sign-In</button>

</div> 

    </div>
  )
}

export default Navbar
