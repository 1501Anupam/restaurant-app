import { useNavigate } from "react-router-dom";
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
        <div className="strip2">PRO extra 15% OFF</div>
      </div>
      <div className="content">
        <label className="res-text">Name: {name}</label>
        <br />
        <div>
          <label className="res-text">Price: {price}</label>
          &nbsp; &nbsp; &nbsp;
          <label className="res-text">
            Rating: {rating}
            <span className="fa fa-star checked"></span>
          </label>
        </div>
      </div>
    </div>
  );
};

export default Restaurant;
