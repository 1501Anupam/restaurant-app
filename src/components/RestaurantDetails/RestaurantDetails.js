import React, { useEffect, useState } from "react";
import "./RestaurantDetails.css";
import axios from "axios";
import data from "./restaurantDetail.json";
import { useParams } from "react-router-dom";

const weekday = {
  0: "Monday",
  2: "Wednesday",
  3: "Thursday",
  1: "Tuesday",
  4: "Friday",
  5: "Saturday",
  6: "Sunday",
};

const RestaurantDetails = () => {
  const [restaurantDetail, setRestaurantDetail] = useState({});
  const params = useParams();
  const { name, image_url, display_phone, review_count, hours } =
    restaurantDetail;
  const openHours = hours?.[0]?.open;

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    let response = await axios.get(`v3/businesses/${params?.id}`, {
      headers: {
        accept: "application/json",
        "x-requested-with": "xmlhttprequest",
        "Access-Control-Allow-Origin": "*",
        Authorization:
          "Bearer 3PW75iXnNgFsSrArLrQrtC5SHnilq7lNSVJ4LL-TSFiy19LLZJWh7zFv6F-_W9d9drKzoymoBSMQeVadhbcBA2cWWpfzQQCdmc0OIAEdZ1Pq1fjFFbTVxgK6L-YrY3Yx",
      },
    });
    setRestaurantDetail(response.data);
  };

  const formatTime = (str, ind) => {
    const timeString = str.slice(0, ind) + ":" + str.slice(ind, str.length);
    const timeString12hr = new Date(
      "1970-01-01T" + timeString + "Z"
    ).toLocaleTimeString("en-US", {
      timeZone: "UTC",
      hour12: true,
      hour: "numeric",
      minute: "numeric",
    });
    return timeString12hr;
  };

  const renderTimings = (openHour, index) => {
    return (
      <div key={index} className="timings">
        <span>
          {weekday[openHour.day]}: {formatTime(openHour.start, 2)}-
          {formatTime(openHour.end, 2)}
        </span>
        <br />
      </div>
    );
  };

  return (
    <div className="details-container">
      <h2 className="main-head">{name}</h2>
      <div className="row justify-content-center w-100">
        <img
          className="res-image col-sm-5 mx-2"
          src={image_url}
          alt="restaurant"
        ></img>
        <div className="col-sm-5 details-card mx-2">
          <p className="details-text">Restaurant Name: {name}</p>
          <p className="details-text">Phone: +{display_phone}</p>
          <p className="details-text">Review Count: {review_count}</p>
          <div class="row">
            <p className="col-5 details-text">Hours Of Operations:</p>
            <div className="col-7 details-text ">
              {openHours?.map(renderTimings)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantDetails;
