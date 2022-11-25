import React, { useEffect, useMemo, useState } from "react";
import "./RestaurantList.css";
import axios from "axios";
import Restaurant from "./Restaurant";

const RestaurantList = () => {
  const [restaurantList, setRestaurantList] = useState([]);
  const [filter, setFilter] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const fetchData = async () => {
    let response = await axios.get("v3/businesses/search", {
      headers: {
        accept: "application/json",
        "x-requested-with": "xmlhttprequest",
        "Access-Control-Allow-Origin": "*",
        Authorization:
          "Bearer 3PW75iXnNgFsSrArLrQrtC5SHnilq7lNSVJ4LL-TSFiy19LLZJWh7zFv6F-_W9d9drKzoymoBSMQeVadhbcBA2cWWpfzQQCdmc0OIAEdZ1Pq1fjFFbTVxgK6L-YrY3Yx",
      },
      params: {
        longitude: -122.399972,
        latitude: 37.786882,
      },
    });
    let { businesses } = response.data;
    setRestaurantList(businesses);
  };

  const filterHandler = (e) => {
    setFilter(e.target.value);
  };

  useEffect(() => {
    fetchData();
    setIsLoading(false);
  }, []);

  // const filteredRestaurant = useMemo(() => {
  //   if (!!filter) {
  //     return restaurantList.filter(
  //       (el) => el.name.toLowerCase().indexOf(filter.toLowerCase()) > -1
  //     );
  //   } else {
  //     return restaurantList;
  //   }
  // }, [filter, restaurantList]);

  let filteredRestaurant;
  if (!!filter) {
    filteredRestaurant = restaurantList.filter(
      (el) => el.name.toLowerCase().indexOf(filter.toLowerCase()) > -1
    );
  } else {
    filteredRestaurant = restaurantList;
  }

  return (
    <div>
      <h2 className="main-heading">Delivery Restaurants in Delhi NCR</h2>
      {isLoading && <p>Loading...</p>}
      {!isLoading && (
        <input
          className="search"
          type="text"
          placeholder="Search your restaurant here..."
          value={filter}
          onChange={filterHandler}
        />
      )}
      <div className="container">
        {filteredRestaurant.map((restaurant, index) => (
          <Restaurant restaurant={restaurant} key={restaurant.id} />
        ))}
      </div>
    </div>
  );
};

export default RestaurantList;
