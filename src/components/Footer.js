import { useContext } from "react";
import UserContext from "../utils/userContext";

const Footer = () => {
  const {user}=useContext(UserContext)
    return (
      <div className="bg-black  bottom-0">
       <div className=" py-2  m-2  font-bold text-white text-center ">This site is developed by {user.name}-{user.email}</div>;

       <div className="flex justify-center p-2   ">
        <span className="text-gray-300 ">&copy;</span>
        <p className="text-gray-300  text-center ml-1">2024 Herox Technologies Pvt. Ltd</p>
       </div>
      </div>
       )
  };

  export default Footer

