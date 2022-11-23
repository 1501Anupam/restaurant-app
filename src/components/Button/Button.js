import { useNavigate } from "react-router-dom";
import "./Button.css";
const Button = () => {
  const navigate = useNavigate();
  return (
    <button
      className="btn btn-primary back-btn"
      type="button"
      onClick={() => navigate(-1)}
    >
      Back
    </button>
  );
};

export default Button;
