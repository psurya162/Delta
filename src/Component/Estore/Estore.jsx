import React, { useEffect } from "react";
import "./estore.css";
import Footer from "../Footer/Footer";
import Aos from "aos";
import "aos/dist/aos.css";

const Estore = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <>
      <div className="Offer-banner">
        <img
          src="https://www.deltaview.in/wp-content/themes/deltaview/assets/images/offerbanv3.webp"
          alt=""
        />
      </div>
      <div className="heading-pick">
        <h1>Take your pick.</h1>
      </div>
      <div
        className="product-container"
        
      >
        <div className="one1 PRODUCT" data-aos="flip-left"
       >
          <div className="product-name">
            <h1>
              DeltaView<sup>R</sup>{" "}
              <span>
                {" "}
                <img
                  width={"100px"}
                  src="https://www.deltaview.in/wp-content/themes/deltaview/assets/images/sparklogo.webp"
                  alt=""
                />
              </span>
            </h1>
          </div>
          <div className="product-image">
            <img
              src="https://www.deltaview.in/wp-content/uploads/2024/02/sparkpro.webp"
              alt=""
            />
          </div>
          <div className="buy-button">
            <a href="#">
              <i className="fa-solid fa-angle-right"></i>
              BUY NOW
            </a>
          </div>
        </div>
        <div className="one2 PRODUCT" data-aos="fade-left"
       >
          <div className="product-name">
            <h1>
              DeltaView<sup>R</sup>{" "}
              <span>
                {" "}
                <img
                  width={"140px"}
                  src="https://www.deltaview.in/wp-content/themes/deltaview/assets/images/blazelogo.webp"
                  alt=""
                />
              </span>
            </h1>
          </div>
          <div className="product-image">
            <img
              src="https://www.deltaview.in/wp-content/uploads/2024/02/blazepro.webp"
              alt=""
            />
          </div>
          <div className="buy-button">
            <a href="#">
              <i className="fa-solid fa-angle-right"></i>
              BUY NOW
            </a>
          </div>
        </div>
      </div>
      <div className="section-2">
        <div className="section-2-heading">
          <h1>DeltaView Shopping Advantages</h1>
        </div>
        <div className="section-2-icon">
          <div className="icon">
            <div className="icon-container">
              <img
                src="https://www.deltaview.in/wp-content/themes/deltaview/assets/images/shopping.png"
                alt=""
              />
            </div>
            <div className="icon-name">
              <h4>Fast & Free Delivery</h4>
            </div>
          </div>
          <div className="icon">
            <div className="icon-container">
              <img
                src="https://www.deltaview.in/wp-content/themes/deltaview/assets/images/support.png"
                alt=""
              />
            </div>
            <div className="icon-name">
              <h4>Tech Support</h4>
            </div>
          </div>
          <div className="icon">
            <div className="icon-container">
              <img
                src="https://www.deltaview.in/wp-content/themes/deltaview/assets/images/warranty.png"
                alt=""
              />
            </div>
            <div className="icon-name">
              <h4>3 Years Warranty</h4>
            </div>
          </div>
          <div className="icon">
            <div className="icon-container">
              <img
                src="https://www.deltaview.in/wp-content/themes/deltaview/assets/images/product-quality.png"
                alt=""
              />
            </div>
            <div className="icon-name">
              <h4>100% Original Products</h4>
            </div>
          </div>
        </div>
      </div>
      <div className="section-3">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-7 notify">
              <h1>
                <span>Want to speak to a representative directly?</span>
              </h1>
              <p className="tollfree">
                Toll free - <a href="">1800-567-7167</a>
              </p>
            </div>
            <div className="col-md-5 book-demo-btn2">
              <a href="#" className="book-demo-btn">
                <span>Book A Demo</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Estore;
