import { useState } from "react";
import ItemList from "./ItemList";
const RestaurantCategory = ({ data,showItems,setShowIndex }) => {
  // const [showItems, setShowItems] = useState(false);

  const handleClick = () => {
    setShowIndex()
  };
  // console.log(data)
  return (
    <div>
      {/* Header */}
      <div className="w-6/12 mx-auto my-5 bg-gray-100 p-4 shadow-lg ">
        <div className="flex justify-between cursor-pointer" onClick={handleClick}>
          <span className="font-bold">
            {data.title}-({data.itemCards.length})
          </span>
          <span>⬇️</span>
        </div>
        {showItems && <ItemList items={data.itemCards} />}
      </div>
      {/* Accordion Body */}
    </div>
  );
};

export default RestaurantCategory;
