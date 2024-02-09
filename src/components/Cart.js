import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  console.log(cartItems);
  const handleClearCart = () => {
    dispatch(clearCart());
  };
  return (
    <div className="text-center p-4 m-4">
      <h1 className="font-bold text-3xl ">Cart Items-{cartItems.length}</h1>

      <div className="w-6/12 m-auto">
        <button
          className="p-2 m-5  bg-black text-white rounded-lg text-center"
          onClick={() => handleClearCart()}
        >
          Clear Cart
        </button>
        {cartItems.length === 0 && (
          <h1>Cart is empty.Add Items to the cart!</h1>
        )}
        <ItemList items={cartItems} />
      </div>
    </div>
  );
};

export default Cart;
