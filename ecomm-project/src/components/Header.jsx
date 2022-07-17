import React from 'react'
import { useSelector } from 'react-redux'

const Header = () => {

  const result=useSelector((state)=>state.cartData)
   
   console.log("All data", result)


  return (
    <div className='header'>

       <div className='cart-div'>
         
          <span>0</span>
          <img src="https://www.freeiconspng.com/thumbs/cart-icon/cart-icon-14.png" alt="logo" />
           
       </div>





    </div>
  )
}

export default Header