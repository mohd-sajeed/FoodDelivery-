import { useEffect, useState } from "react";
import { json, useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../constants";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import { addItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  const params = useParams();
  const { resId } = params;
  const resInfo = useRestaurantMenu(resId);
  const dispatch = useDispatch();
  const [showIndex, setShowIndex] = useState(null);

  // const handleAddItem = () => {
  //   dispatch(addItem("Grapes"));
  // };

  // const addFoodItem = (item) => {
  //   dispatch(addItem(item));
  // };

  if (resInfo === null) return <Shimmer />;

  const {
    name,
    costForTwoMessage,
    cuisines,
  } = resInfo?.cards[0]?.card?.card?.info;

  // const { itemCards } =
  //   resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
      // ?.card;

  const categories =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  // console.log(categories);
  return (
    // <div className="flex">
    //   {/* <div>
    //     <h1>Restaurant id: {resId}</h1>
    //     <h2>{name}</h2>
    //     <img src={IMG_CDN_URL + cloudinaryImageId} alt="" />
    //     <h2>{areaName}</h2>
    //     <h2>{city}</h2>
    //     <h2>{avgRating}</h2>
    //     <h2>{costForTwoMessage}</h2>
    //   </div> */}

    //   {/* <div className="text-center ">
    //     <h1>Menu</h1>
    //     <ul>
    //       {itemCards.map((item) => (
    //         <li key={item.card.info.id}>
    //           {item.card.info.name}-{"Rs."}
    //           {item.card.info.price / 100 ||
    //             item.card.info.defaultPrice / 100}{" "}
    //           <button
    //             className="p-1 m-2 bg-green-200"
    //             onClick={() => addFoodItem(item)}
    //           >
    //             Add
    //           </button>{" "}
    //         </li>
    //       ))}
    //     </ul>
    //   </div> */}
    // </div>

    <div className="text-center">
      <h1 className="font-bold my-6 text-2xl">{name}</h1>
      <p className="font-bold text-lg">
        {cuisines.join(",")} - {costForTwoMessage}
      </p>

      {/* Categories Accordion */}
      {categories.map((category, index) => (
        <RestaurantCategory
          key={category.card.card.title}
          data={category?.card?.card}
          showItems={index === showIndex ? true : false}
          setShowIndex={() => setShowIndex(index)}
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;
