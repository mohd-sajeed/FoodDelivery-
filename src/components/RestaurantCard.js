import { IMG_CDN_URL } from "../utils/constants";
import { useContext } from "react";
import UserContext from "../utils/userContext";

const RestaurantCard = (props) => {
  const { resData } = props;
 
  const { user } = useContext(UserContext);
  const {
    cloudinaryImageId,
    name,
    cuisines,
    avgRating,
    areaName,
    costForTwo,
    deliveryTime,
  } = resData;

  return (
    <div
      data-testid="resCard"
      className="w-[213px] m-4 gap-8 shadow-2xl rounded-lg hover:shadow-sm hover:bg-gray-200 transition-all "
    >
      <img
        className="rounded-xl object-cover"
        src={IMG_CDN_URL + cloudinaryImageId}
      />

      <h2 className="font-bold text-[18px] w-[201px] h-[24px] m-2 truncate">
        {name}
      </h2>
      <hr />
      <div className="pl-2 truncate text-gray-500 ">
        <div>{cuisines?.join(",")}</div>
        <div>{avgRating} Stars</div>
        <span>{deliveryTime}</span>
        <div>{costForTwo}</div>
        <div>{areaName}</div>
      </div>
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
