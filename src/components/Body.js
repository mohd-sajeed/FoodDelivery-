import { useState, useEffect, useContext } from "react";
// import { restaurantList } from "../../constants";
import RestaurantCard, { WithPromotedLabel } from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";
import filterData from "../utils/helper";
import UserContext from "../utils/userContext";
import { SWIGGY_API_URL } from "../constants";

const Body = () => {
  const [searchText, setSearchText] = useState(""); // to create state variable
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [allRestaurants, setAllRestaurants] = useState([]);
  const { user, setUser } = useContext(UserContext);
  // console.log("body rendered", allRestaurants);

  const RestaurantCardPromoted = WithPromotedLabel(RestaurantCard);
  useEffect(() => {
    // API call
    getRestaurants();
  }, [searchText]);

  async function getRestaurants() {
    const data = await fetch(SWIGGY_API_URL);
    const json = await data.json();
    // optional chaining
    setAllRestaurants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  }

  const isOnline = useOnline();

  if (!isOnline) {
    return <h1>Please,Check Your Internet Connection!!</h1>;
  }
  // not render component early return
  if (!allRestaurants) return null;

  return allRestaurants?.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className=" p-2 bg-purple-400 m-2 ">
        <input
          type="text"
          placeholder="search"
          className="focus:bg-green-300 p-1 m-2 rounded-md"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />

        <button
          className="bg-blue-400 text-white p-1 m-2 rounded-md hover:bg-black"
          onClick={() => {
            const data = filterData(searchText, allRestaurants);
            setFilteredRestaurants(data);
          }}
        >
          Search
        </button>
        {/* <input
          value={user.name}
          onChange={(e) =>
            setUser({
              ...user,
              name: e.target.value,
            })
          }
        ></input>
        <input
          value={user.email}
          onChange={(e) =>
            setUser({
              ...user,
              email: e.target.value,
            })
          }
        ></input> */}
      </div>

      <div className=" w-[983px] h-[860px ] mx-auto  flex flex-wrap items-center justify-center  bg-gray-50 ">
        {filteredRestaurants.length === 0 ? (
          <h1>No Restaurant Found</h1>
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
    </>
  );
};

export default Body;
