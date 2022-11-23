import React, { useEffect, useState } from "react";
import "./RestaurantDetails.css";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import Button from "../Button/Button";

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
  const [isLoading, setIsLoading] = useState(false);
  const params = useParams();
  const { name, image_url, display_phone, rating, review_count, hours } =
    restaurantDetail;
  const openHours = hours?.[0]?.open;

  const navigate = useNavigate();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setIsLoading(true);
    let response = await axios.get(`v3/businesses/${params?.id}`, {
      headers: {
        accept: "application/json",
        "x-requested-with": "xmlhttprequest",
        "Access-Control-Allow-Origin": "*",
        Authorization:
          "Bearer 3PW75iXnNgFsSrArLrQrtC5SHnilq7lNSVJ4LL-TSFiy19LLZJWh7zFv6F-_W9d9drKzoymoBSMQeVadhbcBA2cWWpfzQQCdmc0OIAEdZ1Pq1fjFFbTVxgK6L-YrY3Yx",
      },
    });
    setIsLoading(false);
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
      <div key={index}>
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
      {isLoading && <p>Loading...</p>}
      <div className="row align-btn main-head w-100">
        <div className="col-2 col-sm-2 col-md-2">
          <Button navigate={navigate} />
        </div>
        <h2 className="col-8 col-sm-8 col-md-8 ">The {name}</h2>
      </div>
      {!isLoading && (
        <div className="row justify-content-center w-100">
          <img
            className="res-image col-sm-5 mx-2 col-md-12 col-lg-5"
            src={image_url}
            alt="restaurant"
          ></img>
          <div className="col-sm-5 details-card mx-2 col-md-12 col-lg-5">
            <p className="details-text">Restaurant Name: {name}</p>
            <p className="details-text">Phone: +{display_phone}</p>
            <p className="details-text">
              Rating: {rating} <span className="fa fa-star checked"></span>
            </p>
            <p className="details-text">Review Count: {review_count}</p>
            <p className="details-text">Hours Of Operations:</p>
            <div className="details-text ">{openHours?.map(renderTimings)}</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default RestaurantDetails;
