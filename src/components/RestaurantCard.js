import { IMG_CDN_URL } from "../constants";
import { useContext } from "react";
import UserContext from "../utils/userContext";

const RestaurantCard = (props) => {
  const { resData } = props;
  console.log(resData);
  // console.log(props)
  const { user } = useContext(UserContext);
  const { cloudinaryImageId, name, cuisines, avgRating,areaName } = resData;

  return (

    <div className="w-[213px] m-3 gap-8 shadow-2xl rounded-lg hover:shadow-sm hover:bg-gray-200 transition-all ">
      <div>
      <img className="w-[213x] h-[142px] rounded-xl object-cover"src={IMG_CDN_URL + cloudinaryImageId} />
      </div>

      <h2 className="font-bold text-[18px] w-[201px] h-[24px] m-2 truncate">{name}</h2>
      <hr />
      <div className="truncate p-1 text-gray-500 ">{cuisines?.join(",")}</div>
      <div className="text-sm p-0.5 m-0">{avgRating}</div>
      <div className="text-gray-500 p-0.5 m-0">{areaName}</div>
      {/* <h5 className="font-bold">
        {user.name} -{user.email}
      </h5> */}
      
    </div>
  );
};

// Higher order Component

// Input - RestaurantCard => Output- RestaurantCardPromoted

export const WithPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <legend className="bg-black  text-white absolute m-2 p-2 rounded-lg">
          Promoted
        </legend>
        <RestaurantCard {...props} />
      </div>
    );
  };
};
export default RestaurantCard;
