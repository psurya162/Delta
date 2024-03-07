import React from "react";
import "./EnterPrise.css";
import { Link } from "react-router-dom";

const Enterprise = () => {
  return (
    <>
      <div className="Main-Parent">
        <div className="banner-content-page">
          <span>
            Deltaview <sup>R</sup> Blaze
          </span>
          <h1>
            A Touch - Driven <br /> Journey to <br /> Sucesss
          </h1>
          <p>
            Explore innovative methods to enhance workflow and <br />
            elevate your workplace experience with our most powerful <br />{" "}
            board.
          </p>
          <Link to="/e-store" className="btn">
            Buy Now
          </Link>
        </div>
      </div>
      <div className="Main-Parent-2">
        <div className="Main_Parent-2-child">
          <h1>Turn your office into a collaborative hub!</h1>
        </div>
        <div className="Main_Parent-2-child">
          <p>
            Elevate your meetings with DeltaView Interactive Flat Panels (IFPs),
            designed to inspire free-flowing ideas. Seamless team collaboration{" "}
            <br />
            becomes second nature, turning abstract creativity into actionable
            innovations—an essential for dynamic business environments.
          </p>
        </div>
        <div className="Main_Parent-2-child image-containers">
          <div className="img1 imgg">
            <img
              src="https://www.deltaview.in/wp-content/uploads/2023/12/TILT-MEETING-1536x1024.jpg"
              alt=""
            />
          </div>
          <div className="img2 imgg">
            <img
              src="https://www.deltaview.in/wp-content/uploads/2024/01/coperate-1536x1024.webp"
              alt=""
            />
          </div>
          <div className="img3 imgg">
            <img
              src="https://www.deltaview.in/wp-content/uploads/2024/01/video-meeting-1536x1043.webp"
              alt=""
            />
          </div>
          <div className="img4 imgg">
            <img
              src="https://www.deltaview.in/wp-content/uploads/2024/01/5th-1536x809.webp"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="Main-Parent-3">
        <div className="parent-child">
          <h2>Tools for accessibility and inclusivity</h2>
        </div>
        <div className="parent-child">
          <div className="view-seciton">
            <div className="img-section">
              <img
                src="https://www.deltaview.in/wp-content/uploads/2024/01/side-chick-2.webp"
                alt=""
              />
            </div>
            <div className="img-name">
              <h4>Control board from the devices</h4>
            </div>
          </div>
          <div className="view-seciton">
            <div className="img-section">
              <img
                src="https://www.deltaview.in/wp-content/uploads/2023/12/3riple.jpg"
                alt=""
              />
            </div>
            <div className="img-name">
              <h4>Simultaneous Screen Sharing</h4>
            </div>
          </div>
          <div className="view-seciton">
            <div className="img-section">
              <img
                src="https://www.deltaview.in/wp-content/uploads/2024/01/side-chick.webp"
                alt=""
              />
            </div>
            <div className="img-name">
              <h4>Cast your board to other screens</h4>
            </div>
          </div>
        </div>
      </div>
      <div className="Main-Parent-4">
        <div className="parent-child-4">
          <img src="https://www.deltaview.in/wp-content/uploads/2023/12/Collaborative-Hub2-1536x809.webp" alt="" />
        </div>
        <div className="parent-child-4">
          <div className="grand-child-4">
            <h3>Collaborative Hub</h3>
          </div>
          <div className="grand-child-4">
            <p>Elevate enterprise collaboration through <br /> improved communication and teamwork, cultivating an environment that fosters efficiency and seamless project management for optimal productivity.</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Enterprise;
