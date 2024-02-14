import { useState, useContext } from "react";
import Logo from "../assests/images/FoodVilla.jpg";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnline";
import UserContext from "../utils/userContext";
import { useSelector } from "react-redux";



const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState("Login");
  const onlineStatus = useOnlineStatus();

  const { user } = useContext(UserContext);
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);

  return (
    <div className=" w-full flex  h-[80] items-center justify-between bg-white shadow-lg sticky top-0 z-10">
      <div className="logo-container">
        <Link to="/"><img  data-testid="logo" className="h-20 p-2 bg-yellow-50" src={Logo} alt="logo"/></Link>
      </div>
      <div className="flex items-center">
        <ul className="flex py-10">
          <li className="px-4">Online Status:{onlineStatus ? "✅" : "🔴"}</li>
          <Link to="/">
            <li className="px-4">Home</li>
          </Link>
          <Link to="/about">
            <li className="px-4">About Us</li>
          </Link>  
          <Link to="/contact">
            <li className="px-4">Contact</li>
          </Link>
          <Link to="/instamart">
            <li className="px-4">Instamart</li>
          </Link>
          <Link to="/cart">
            <li className="px-4 font-bold text-xl ">
              Cart - ({cartItems.length} items)
            </li>
          </Link>
        </ul>
      </div>
<button onClick={()=>{
  isLoggedIn === 'Login' ? setIsLoggedIn("Logout"):setIsLoggedIn("Login")
}}>
{isLoggedIn}
</button>
      <span className="p-10 font-bold text-gray-500">{user.name}</span>
    </div>
  );
};
export default Header;
