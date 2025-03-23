import React from 'react'
import './Appdownload.css'
import { assets } from '../../assets/assets'
const Appdownload = () => {
  return (
    <div className='app-download' id = 'app-download'>
        <p>For Better Experience Download <br/>Swiggy App</p>
      <div className='app-download-platforms'>
      <img src = {assets.Google} alt = ""  width={180} height = {140}/>
      </div>
    </div>
  )
}

export default Appdownload
