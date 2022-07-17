
import {addToCart} from "../redux/action"

import {useDispatch} from "react-redux"
function Main() {
 
   const dispatch=useDispatch();
   
     const products={
      name:"I phone",
      type:"mobile",
      price:10000,
      color:"red"
     }
 
  return (
    <div>
     
    
      <button 
      onClick={()=>dispatch(addToCart(products))}
      >Add to cart</button>


    </div>
  );
}

export default Main;
