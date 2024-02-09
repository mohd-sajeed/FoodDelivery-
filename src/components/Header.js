import { useState, useContext } from "react";
import Logo from "../assests/images/FoodVilla.jpg";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";
import UserContext from "../utils/userContext";
import { useSelector } from "react-redux";

const Title = () => (
  <a href="/">
    <img className="h-28 p-2" src={Logo} alt="logo" />
  </a>
);

// Composing Components
const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const isOnline = useOnline();

  const { user } = useContext(UserContext);
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems)

  return (
    <div className="flex  justify-between bg-pink-100 shadow-2xl m-4 sm:bg-yellow-50 lg:bg-green-100 ">
      <Title />
      <div className="nav-items">
        <ul className="flex py-10">
      <li className="px-2">Online Status:{isOnline ? "✅" : "🔴"}</li>
          <Link to="/">
            <li className="px-2">Home</li>
          </Link>
          <Link to="/about">
            <li className="px-2">About</li>
          </Link>
          <Link to="/contact">
            <li className="px-2">Contact</li>
          </Link>
          <Link to="/instamart">
            <li className="px-2">Instamart</li>
          </Link>
          <Link to="/cart">
            <li className="px-2 font-bold text-xl ">Cart - ({cartItems.length} items)</li>
          </Link>
        </ul>
      </div>

      <span className="p-10 font-bold text-red-900">{user.name}</span>
      {isLoggedIn ? (
        <button onClick={() => setIsLoggedIn(false)}>Logout</button>
      ) : (
        <button onClick={() => setIsLoggedIn(true)}>Login</button>
      )}
    </div>
  );
};
export default Header;
