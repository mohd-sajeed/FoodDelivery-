import { IMG_CDN_URL } from "../constants";
import { useContext } from "react";
import UserContext from "../utils/userContext";


const RestaurantCard = ({ name, cuisines, cloudinaryImageId, avgRating }) => {
  // console.log(props)
  const {user}=useContext(UserContext)
  return (
    <div className="w-56 p-2 m-2 shadow-2xl bg-pink-300">
      <img src={IMG_CDN_URL + cloudinaryImageId} />
      <h2 className="font-bold text-xl">{name}</h2>
      <h3>{cuisines.join(",")}</h3>
      <h4>{avgRating}</h4>
      <h5 className="font-bold">{user.name} -
      {user.email}</h5>
    </div>
  );
};

// Higher order Component

// Input - RestaurantCard => Output- RestaurantCardPromoted

 export const WithPromotedLabel = (RestaurantCard)=>{
  return (props) =>{
    return (
      <div >
        <legend className= "bg-black  text-white absolute m-2 p-2 rounded-lg" >Promoted</legend>
        <RestaurantCard  {...props}/>
      </div>
    )
  }
}
export default RestaurantCard;
