import "./Button.css";
const Button = ({ label, navigate, variant }) => {
  return (
    <button
      className={`button ${variant || "secondary"}`}
      type="button"
      onClick={() => navigate?.(-1)}
    >
      {label || "Back"}
    </button>
  );
};

export default Button;
