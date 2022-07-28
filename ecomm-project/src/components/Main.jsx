import { addToCart, emptyFromCart } from "../redux/action";

import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { productList } from "../redux/productAction";
import { useEffect, useState } from "react";
function Main() {
  const dispatch = useDispatch();

  const data = useSelector((state) => state.productData);

  const cartData = useSelector((state) => state.cartData);

  console.log("Data in Main Component from saga", data);

 
        const handleAdd=(ele)=>{

           let checkData=cartData.find((el)=> el.id===ele.id)
            
             if(checkData){
               
              alert("Alreaday Data Added")
              
             }else{
              dispatch(addToCart(ele))
              
             }




          

        }







  useEffect(() => {
    dispatch(productList());
  }, []);

  return (
    <div>
      <button onClick={() => dispatch(emptyFromCart())}>Empty cart</button>

      <div className="productContainer">
        {data.map((ele) => (
          <div className="product-item" key={ele.id}>
            <img src={ele.photo} alt="pic" />
            <span>Name:{ele.name}</span>
            <span>Color:{ele.color}</span>
            <span>Brand:{ele.brand}</span>
            <span>Rs:{ele.price}</span>
            <div>
              <button onClick={() => handleAdd(ele) }>
                Add to cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Main;
