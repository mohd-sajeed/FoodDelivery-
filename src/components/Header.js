import { useState, useContext } from "react";
import Logo from "../assests/images/FoodVilla.jpg";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/userContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState("Login");
  const onlineStatus = useOnlineStatus();

  const { loggedInUser } = useContext(UserContext);

  // Subscribing to the Store using a Selector
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);

  return (
    <div className=" w-full flex  h-[80] items-center justify-between bg-white shadow-lg sticky top-0 z-10">
      <div className="logo-container">
        <Link to="/">
          <img
            data-testid="logo"
            className="h-20 p-2 bg-yellow-50"
            src={Logo}
            alt="logo"
          />
        </Link>
      </div>
      <div className="flex items-center">
        <ul className="flex py-10">
          <li className="px-4">Online Status:{onlineStatus ? "✅" : "🔴"}</li>

          <li className="px-4 hover:text-orange-500 ">
            <Link to="/">Home</Link>
          </li>

          <li className="px-4 hover:text-orange-500">
            <Link to="/about">About Us</Link>
          </li>

          <li className="px-4 hover:text-orange-500">
            <Link to="/contact">Contact</Link>
          </li>

          <li className="px-4 hover:text-orange-500">
            <Link to="/grocery">Grocery</Link>
          </li>

          <li className="px-4 font-bold hover:text-orange-500">
            <Link to="/cart">
            🛒  Cart - (
              {cartItems.length === 1
                ? `${cartItems.length} item`
                : `${cartItems.length} items`}
              )
            </Link>
          </li>
        </ul>
      </div>
      <button
        className="px-4 hover:text-orange-500 font-bold text-green-500"
        onClick={() => {
          isLoggedIn === "Login"
            ? setIsLoggedIn("Logout")
            : setIsLoggedIn("Login");
        }}
      >
        {isLoggedIn}
      </button>
      <span className="px-4 font-bold">{loggedInUser}</span>
    </div>
  );
};
export default Header;
