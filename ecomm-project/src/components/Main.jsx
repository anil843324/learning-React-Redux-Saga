
import { addToCart, emptyFromCart, removeFromCart } from "../redux/action"

import { useDispatch } from "react-redux"
import { useSelector } from "react-redux"
import { productList } from "../redux/productAction";
import { useEffect } from "react";
function Main() {

  const dispatch = useDispatch();

  const data = useSelector((state) => state.productData)

  console.log("Data in Main Component from saga", data);


 useEffect(() => {
  
  dispatch(productList())

 }, [])
 




  return (
    <div>

      <button
        onClick={() => dispatch(emptyFromCart())}
      >Empty cart</button>
     


      <div className="productContainer">

        {data.map((ele) =>
          <div className="product-item" key={ele.id}>

            <img src={ele.photo} alt="pic" />
            <span>Name:{ele.name}</span>
            <span>Color:{ele.color}</span>
            <span>Brand:{ele.brand}</span>
            <span>Rs:{ele.price}</span>
             <div>
             <button
        onClick={() => dispatch(addToCart(ele))}
      >Add to cart</button>
              <button
        onClick={() => dispatch(removeFromCart(ele.id))}
      >Remove from cart</button>
             </div>
            
          </div>
        )}


      </div>


    </div>
  );
}

export default Main;
