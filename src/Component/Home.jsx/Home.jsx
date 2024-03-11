import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="Main-Parent">
        <div className="banner-content-page">
          <h1>
            DeltaView <br /> Interactive <br /> Displays
          </h1>
          <p>Revolutionize the way you collaborate at <br /> work or school.</p>
          <Link to="/e-store" className="btn">
            Buy Now
          </Link>
        </div>
      </div>
    </>
  );
};

export default Home;
