import "../App.css";

import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Cart() {
  const cartData = useSelector((state) => state.cartData);

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
      </div>

      <Link to="/">Back To Home</Link>
    </div>
  );
}

export default Cart;
