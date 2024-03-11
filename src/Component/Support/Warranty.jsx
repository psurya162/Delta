import React from "react";
import "./Warranty.css";
import Footer from "../Footer/Footer";

const Warranty = () => {
  return (
    <>
      <div className="container-fluid Warrant ">
        {" "}
        {/* Apply pt-5 class here for padding top */}
        <div className="container">
          <div className="row">
            <div className="col-lg-7 col-md-12 col-sm-12 col-12 warrant-content-1">
              <h1>Check Your Warranty Status</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Officia, quam ut minus ducimus incidunt obcaecati sint cum
                praesentium iusto fugiat nemo, vitae neque deleniti repellendus.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row justify-content-center mt-5">
          <div className="col-lg-4 d-flex align-items-center input-container input-group ">
            <input
              type="text"
              className=" form-control"
              placeholder="Enter serial number"
            />
            <button className="btn btn-primary">Check Warranty</button>
          </div>
        </div>
      </div>
      <div className="container section-adds">
        <div className="row pt-5">
          <div className="col p-0 p">
            <div className="img-container">
              <img
                src="https://www.deltaview.in/wp-content/uploads/2024/01/3yr-w-1536x992.webp"
                alt=""
              />
            </div>
          </div>
          <div className="col p-5 image-content">
            <div>
              <h4>
                DeltaView provides Interactive Panel with a 3 year warranty
              </h4>
              <p>
                Dive into an immersive teaching and collaboration experience
                with DeltaView’s Interactive Panel, backed by a robust
                three-year warranty. Our commitment to quality ensures a
                seamless and supported educational and enterprise journey.
                Please note, while we don’t provide intentional damage warranty,
                our focus on durability guarantees a reliable platform for
                engaging lessons and collaborative sessions.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="contact-warranty-section">
        <div className="container">
          <div className="row">
            <div className="text-center pb-5">
              <h3>Contact Delta View</h3>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12 col-12">
              <div className="cont-info">
                <a href="">
                  <img
                    src="https://www.deltaview.in/wp-content/themes/deltaview/assets/images/email_desktop.svg"
                    alt=""
                  />
                  <p>
                    <b>Email</b>
                  </p>
                  <span>support@deltaview.in</span>
                </a>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12 col-12">
              <div className="cont-info">
                <a href="">
                  <img
                    src="https://www.deltaview.in/wp-content/themes/deltaview/assets/images/whats-app_desktop.svg"
                    alt=""
                  />
                  <p>
                    <b>Whatsapp</b>
                  </p>
                  <span>+91-9560868007</span>
                </a>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12 col-12">
              <div className="cont-info">
                <a href="">
                  <img
                    src="https://www.deltaview.in/wp-content/themes/deltaview/assets/images/telephone_desktop.svg"
                    alt=""
                  />
                  <p>
                    <b>Toll Free</b>
                  </p>
                  <span>1800-571-7167</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default Warranty;
