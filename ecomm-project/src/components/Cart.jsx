import "../App.css";
import "./Cart.css";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {
  decrementQuantity,
  incrementQuantity,
  removeFromCart,
} from "../redux/action";

function Cart() {
  const cartData = useSelector((state) => state.cartData);

  const dispatch = useDispatch();
  let amount =
    cartData.length &&
    cartData.map((ele) => ele.price).reduce((prev, next) => prev + next);

    let sum=0;
    cartData.length && cartData.map((ele)=>{
     
        sum=sum+(ele.qunty*ele.price) 

    })
     
    

  return (
    <div>
      <h1>Cart page</h1>

      <div className="cart-page-conatiner">
        <table>
          <tr>
            <td>Name</td>
            <td>Image</td>
            <td>Price</td>
            <td>Quantity</td>
            <td>Brand</td>
            <td>Remove</td>
          </tr>
          {cartData.map((ele) => {
            return (
              <>
                <tr key={ele.id}>
                  <td>{ele.name}</td>
                  <td>
                    {" "}
                    <img src={ele.photo} alt="pic" className="pic" />
                  </td>
                  <td>{ele.price}</td>
                  <td>
                    <span className="quantity">
                      <button
                        onClick={() => dispatch(decrementQuantity(ele.id))}
                      >
                        -
                      </button>
                      <h3>{ele.qunty}</h3>
                      <button
                        onClick={() => dispatch(incrementQuantity(ele.id))}
                      >
                        +
                      </button>
                    </span>
                  </td>
                  <td>{ele.brand}</td>
                  <td>
                    {" "}
                    <button
                      style={{ cursor: "pointer" }}
                      onClick={() => dispatch(removeFromCart(ele.id))}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              </>
            );
          })}
        </table>

        <div className="price-detilas">
          <h1>Total Product Price</h1>
          <div className="adjust-price">
            <span>Amount </span>
            <span>{sum}</span>
          </div>
          <div className="adjust-price">
            <span> Discount </span>
            <span>{Math.floor(sum / 10)}</span>
          </div>
          <div className="adjust-price">
            <span> Total</span>
            <span>{sum - Math.floor(sum / 10)}</span>
          </div>
        </div>
      </div>

      <Link to="/">Back To Home</Link>
    </div>
  );
}

export default Cart;
