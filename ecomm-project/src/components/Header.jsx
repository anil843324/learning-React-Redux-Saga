import React, { useEffect, useState } from "react";
import { useSelector ,useDispatch} from "react-redux";
import { Link } from "react-router-dom";
import {productSearch} from "../redux/productAction"
import "./Header.css";
const Header = () => {
  const result = useSelector((state) => state.cartData);

  const dispatch=useDispatch()
 
   const [inputData,setInutData]=useState("")

  const queryUser =(e) => {

     setInutData(e.target.value)
    dispatch(productSearch(inputData))

   
  };

  useEffect(() => {
    let timeout = setTimeout(() => {
      queryUser();

    }, 5000);

    return () => clearTimeout(timeout);
  }, [inputData]);


  return (
    <div className="header">
      <Link to="/">
        {" "}
        <h2 className="logo">E-Comm</h2>{" "}
      </Link>
      <div className="searchBox">
        <input
          type="text"
          placeholder="Search Products"
          value={inputData}
          onChange={(e) => {queryUser(e)} }
        />
      </div>
      <Link to="/cart">
        <div className="cart-div">
          <span>{result.length}</span>
          <img
            src="https://www.freeiconspng.com/thumbs/cart-icon/cart-icon-14.png"
            alt="logo"
          />
        </div>
      </Link>
    </div>
  );
};

export default Header;
