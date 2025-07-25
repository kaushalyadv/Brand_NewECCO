import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { MdClose } from "react-icons/md";
import { BsCartX } from "react-icons/bs";
import "./Cart.scss";
import CartItem from "./CartItem/CartItem";
import { Context } from "../../utils/context";
import { loadStripe } from "@stripe/stripe-js";
import { makePymentRequest, getCartItems } from "../../utils/api"; // Import the API functions

const Cart = ({ setshowcart }) => {
  const navigate = useNavigate();
  const { cartItems, cartSubTotal, setCartItems } = useContext(Context);

  const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY);


  // useEffect(() => {
  //   // Fetch the cart items from the backend when the component mounts
  //   const fetchCartItems = async () => {
  //     const items = await getCartItems();
  //     setCartItems(items);
  //   };

  //   fetchCartItems();
  // }, []);

  const handlePayment = async () => {
    try {
      const stripe = await stripePromise;
      const res = await makePymentRequest.post("api/orders", {
        products: cartItems,
      });
      await stripe.redirectToCheckout({
        sessionId: res.data.stripeSession.id,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="cart-panel">
          <div className="opec-layer"></div>
        <div className="cart-content">
          <div className="cart-header">
            <span className="heading">Shoping Cart</span>
            <span className="close-btn" onClick={() => setshowcart(false)}>
              <MdClose/>
              <span className="text">Close</span>
            </span>
          </div>
          {!cartItems?.length && <div className="empty-cart">
            <BsCartX/>
            <span>NO Products in the Cart.</span>
            <button className="return-btn" onClick={() => navigate("/categories") & setshowcart(false)}>RETURN TO SHOP</button>
          </div> }

          {!!cartItems?.length && <>
             <CartItem/>
             <div className="cart-footer">
              <div className="subtotal">
                <span className="text">Subtotal:</span>
                <span className="text total">&#8377;{cartSubTotal}</span>
              </div>
              <div className="button">
                <button className="checkout-cta" onClick={(handlePayment)}>Checkout</button>
              </div>
             </div>
          </> }
        </div>
    </div>
  );
};

export default Cart;
