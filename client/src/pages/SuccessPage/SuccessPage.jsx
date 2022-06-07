import { Link } from "react-router-dom";
import "./SuccessPage.scss";


const SuccessPage = () => {
  return (
    <div className="success-wrapper">
      <div className="success-container">
        <div className="success-text-container">
          <h1>Thank you for your purchase !</h1>
          <div className="cart-links" style = {{justifyContent: "center"}}>
          <button style = {{border: "none", borderRadius: "10px", height: "50px "}}>
            <Link to="/">Continue shopping</Link>
          </button>
        </div>
        </div>
      </div>
      <div className="overlay"></div>
    </div>
  );
};

export default SuccessPage;
