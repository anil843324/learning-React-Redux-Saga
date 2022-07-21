import "../App.css";
import "./Cart.css"
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Cart() {
  const cartData = useSelector((state) => state.cartData);
 
  let amount=cartData.length && cartData.map((ele)=> ele.price ).reduce((prev,next)=>prev+next)

  return (
    <div>
      <h1>Cart page</h1>

      <div className="cart-page-conatiner">
        <table>
          <tr>
            <td>Name</td>
            <td>Color</td>
            <td>Price</td>
            <td>Brand</td>
          </tr>
          {cartData.map((ele) => {
            return (
              <>
                <tr key={ele.id}>
                  <td>Name:{ele.name}</td>
                  <td>Color :{ele.color}</td>
                  <td>Price :{ele.price}</td>
                  <td>Brand :{ele.brand}</td>
                </tr>
              </>
            );
          })}
        </table>

        <div className="price-detilas">
          <div className="adjust-price">
            <span>Amount </span>
            <span>{amount}</span>
          </div>
          <div className="adjust-price">
            <span> Discount </span>
            <span>{ Math.floor(amount/10)}</span>
          </div>
          <div className="adjust-price">
            <span>Tax </span>
            <span>0000</span>
          </div>
          <div className="adjust-price">
            <span> Total</span>
            <span>{amount-(Math.floor(amount/10))}</span>
          </div>
        </div>

      </div>

      <Link to="/">Back To Home</Link>


    </div>
  );
}

export default Cart;
