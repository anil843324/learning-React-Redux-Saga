
import { addToCart, emptyFromCart, removeFromCart } from "../redux/action"

import { useDispatch } from "react-redux"
import {useSelector} from  "react-redux"
import { productList } from "../redux/productAction";
function Main() {

  const dispatch = useDispatch();

 const data=useSelector((state)=>state.productData)
 
  console.log("Data in Main Component from saga",data);

  const products = {
    name: "I phone",
    type: "mobile",
    price: 10000,
    color: "red"
  }

  return (
    <div>


      <button
        onClick={() => dispatch(addToCart(products))}
      >Add to cart</button>
      <button
        onClick={() => dispatch(removeFromCart(products.name))}
      >Remove from cart</button>

      <button
        onClick={() => dispatch(emptyFromCart( ))}
      >Empty cart</button>
 <button
        onClick={() => dispatch(productList( ))}
      >Product List</button>

    </div>
  );
}

export default Main;
