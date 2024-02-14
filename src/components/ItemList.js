import React from "react";
import { IMG_CDN_URL } from "../constants";
import RestaurantMenu from "./RestaurantMenu";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const ItemList = ({ items }) => {

  const dispatch = useDispatch()
  // console.log(items);
  const handleAddItem=(item)=>{
    dispatch(addItem(item))
  }

  return (
    <div >
      {items?.map((item) => (
        <div data-testid="foodItems"
          className="p-2 m-2 border-b-2 text-left flex justify-between"
          key={item.card.info.id}
        >
          <div className="w-9/12">
            <div>
              <h3 className="font-bold">{item.card.info.name}</h3>
              <span>
                ₹
                {item.card.info.price / 100 ||
                  item.card.info.defaultPrice / 100}
              </span>
            </div>

            <p className="text-xs text-gray-400 ">
              {item.card.info.description}
            </p>
          </div>

            <div className="w-3/12 p-2">
          <div className="absolute">
              <button className="p-1 bg-black text-white shadow-lg rounded-lg my-16 mx-7 text-sm w-20" onClick={()=>handleAddItem(item)} >
                Add +
              </button>
            </div>
            <img
              src={IMG_CDN_URL + item.card.info.imageId}
              className=" p-2"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
