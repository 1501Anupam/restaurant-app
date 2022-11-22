import React, { useEffect, useState } from "react";
import "./RestaurantList.css";
import axios from "axios";
import Restaurant from "./Restaurant";
import data from "./restaurantlist.json";

const RestaurantList = () => {
  const [restaurantList, setRestaurantList] = useState([]);
  const fetchData = async () => {
    let response = await axios.get(
      "https://api.yelp.com/v3/businesses/search",
      {
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
      }
    );
    let { businesses } = response.data;
    setRestaurantList(businesses);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <h2 className="main-heading">Delivery Restaurants in Delhi NCR</h2>
      <div className="container">
        {restaurantList.map((restaurant, index) => (
          <Restaurant restaurant={restaurant} key={restaurant.id} />
        ))}
      </div>
    </div>
  );
};

export default RestaurantList;
