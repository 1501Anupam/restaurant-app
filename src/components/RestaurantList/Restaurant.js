import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Restaurant.css";

const Restaurant = ({ restaurant, index }) => {
  const { name, image_url, price, rating } = restaurant || {};
  const navigate = useNavigate();

  const detailsHandler = () => {
    navigate(`/${restaurant.id}`);
  };

  return (
    <div className="animated-container" onClick={detailsHandler}>
      <div
        className="item"
        style={{
          backgroundImage: `Url(${image_url})`,
          backgroundSize: "cover",
          minWidth: "150px",
          minHeight: "200px",
        }}
      >
        <div className="strip">50% OFF up to 100</div>
      </div>
      <div className="content">
        <label>Name: {name}</label>
        <br />
        <div>
          <label>Price: {price}</label>
          &nbsp; &nbsp; &nbsp;
          <label>
            Rating: {rating} <FontAwesomeIcon icon="fa-solid fa-star" />
          </label>
        </div>
      </div>
    </div>
  );
};

export default Restaurant;
