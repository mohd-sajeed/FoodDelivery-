import { useState, useEffect } from "react";
import { FETCH_MENU_URL } from "../utils/constants";

const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);

  // fetchData
  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    const data = await fetch(FETCH_MENU_URL + resId);
    const json = await data.json();
    setResInfo(json.data);
    // console.log(json)
  }

// json?.data?.cards[0]?.card?.card?.info
  return resInfo;
};

export default useRestaurantMenu;
