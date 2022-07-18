import React from 'react'
import { useSelector } from 'react-redux'
import {Link} from "react-router-dom"
const Header = () => {

  const result = useSelector((state) => state.cartData)

  console.log("All data", result)


  return (
    <div className='header'>
      <Link to="/">  <h2 className='logo'>E-Comm</h2> </Link>
      <Link to="/cart">
        <div className='cart-div'>

          <span>{result.length}</span>
          <img src="https://www.freeiconspng.com/thumbs/cart-icon/cart-icon-14.png" alt="logo" />

        </div>
      </Link>




    </div>
  )
}

export default Header