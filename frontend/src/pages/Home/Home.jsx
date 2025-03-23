import React from 'react'
import './Home.css'
import { useState } from 'react'
import Header from '../../components/Navbar/Header/Header'
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu'
 import FoodDisplay from '../../components/foodDisplay/foodDisplay'
import Appdownload from '../../components/Appdownload/Appdownload'
const Home = () => {
   const [category ,setCategory] = useState("All");
  return (
    <div>
      <Header/>
      <ExploreMenu category = {category} setCategory= {setCategory}/>
    <FoodDisplay category = {category}/>
    <Appdownload/>
    </div> 
  )
}

export default Home
// category = {category} setCategory= {setCategory}