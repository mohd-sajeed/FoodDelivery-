import { useState, useEffect } from "react";
import RestaurantCard, { WithPromotedLabel } from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
// import filterData from "../utils/helper";
import { SWIGGY_API_URL } from "../utils/constants";

const Body = () => {
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [listOfRestaurants, setListOfRestaurants] = useState([]);

  const [searchText, setSearchText] = useState(""); // to create state variable

  const RestaurantCardPromoted = WithPromotedLabel(RestaurantCard);
  useEffect(() => {
    // API call
    getRestaurants();
  }, [searchText]);

  async function getRestaurants() {
    const data = await fetch(SWIGGY_API_URL);
    const json = await data.json();
    // optional chaining
    setListOfRestaurants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  }

  const onlineStatus = useOnlineStatus();

  if (!onlineStatus) {
    return (
      <h1 className="text-center mt-24">Looks like you're offline! Please,Check Your Internet Connection!!</h1>
    );
  }
  // not render component early return
  if (!listOfRestaurants) return null;

  return listOfRestaurants?.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="body">
        <div className="flex items-center w-[983px]  mx-auto ">
          <div className="p-4 m-4">
            <input
              type="text"
              placeholder="search"
              className=" border border-black  rounded-md px-4 py-2"
              value={searchText}
              onChange={(e) => {
                setSearchText(e.target.value);
              }}
            />

            <button
              className=" rounded-md bg-gray-700 text-white p-2 m-2"
              onClick={() => {
               // * Filter the restaurant cards and update the UI
              // * searchText
                const filteredRestaurants = listOfRestaurants.filter((res) =>
                  res.info.name.toLowerCase().includes(searchText.toLowerCase())
                );

                setFilteredRestaurants(filteredRestaurants);
              }}
            >
              Search
            </button>
          </div>

          <div className="p-4 m-4">
            <button
              className="px-4 py-2 rounded-md bg-gray-200"
              onClick={() => {
                const filteredList = listOfRestaurants.filter(
                  (res) => parseFloat(res.info.avgRating) > 4.2
                );
                setFilteredRestaurants(filteredList);
                console.log(filteredList);
              }}
            >
              Top Rated Restaurants
            </button>
          </div>
        </div>

        <div className=" w-[983px]  mx-auto  flex flex-wrap items-center justify-center  bg-gray-50 ">
          {filteredRestaurants.length === 0 ? (
            <h1 className="font-bold">No Restaurant Found</h1>
          ) : (
            filteredRestaurants?.map((restaurant) => {
              return (
                <Link
                  to={"/restaurants/" + restaurant?.info.id}
                  key={restaurant?.info.id}
                >
                  {/* If the restaurant is promoted then add a label to it */}
                  {restaurant.info.promoted ? (
                    <RestaurantCardPromoted resData={restaurant?.info} />
                  ) : (
                    <RestaurantCard resData={restaurant?.info} />
                  )}
                </Link>
              );
            })
          )}
        </div>
      </div>
    </>
  );
};

export default Body;
