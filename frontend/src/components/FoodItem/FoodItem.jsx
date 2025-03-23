import React from 'react'

import './FoodItem.css'
import { assets  ,food_list} from '../../assets/assets'
//  import { useState } from 'react'
  import { StoreContext } from '../../context/StoreContext'
  import { useContext } from 'react'
const FoodItem = ({id,name,price,description,image}) => {

//USING USECONTEXT API WE CAN ADD ALL;
 const{cartItems,addToCart,removeFromCart} = useContext(StoreContext)
//  const[itemCount,setItemCount] = useState(0)

  return (
    <div className='food-item'>
      <div className='food-item-img-container'>
        <img className='food-item-image' src ={image} alt = "" />
        {!cartItems[id] 
 ? <img className='add' onClick={() =>addToCart(id)} src = {assets.Addicon5} alt = ""/>
 :<div className='food-item-counter'>
  <img onClick={() => removeFromCart(id)} src = {assets.Addicon6} width = {10} height = {10}/>
  <p>{cartItems[id]}</p>
  <img onClick={() => addToCart(id)} src = {assets.Addicon2} width = {10} height = {10}/>
 </div>
 }





 </div>

      <div className='food-item-info'>
        <div className='food-item-rating'>
<p>{name}</p>
<img src = {assets.ratingStar} alt = ""  width = {90} height = {20}/>
        </div>
        <p className='food-item-desc'>{description}</p>
<p className='food-item-price'>${price}</p>
      </div>

    </div>
  )
}

export default FoodItem
