import React from "react";
import { Link } from "react-router-dom";
const Content = () => {
  return (
    <div className="container content">
      <div className="justify-content-center text-center">
        <h3>Drive Like a Boss !!</h3>
      </div>
      <div className="justify-content-center w-100 my-4 image">
        <video loop autoplay="" muted>
          <source src="/images/AutoMobile.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="image_content">
          <p>GO VISIT AND ENJOY THE RIDE</p>
          <Link to="/brand">View Details</Link>
        </div>
      </div>
      <div
        className="justify-content-center w-50 "
        style={{ margin: "30px auto", fontSize: "1.2em", fontWeight: "600" }}
      >
        <p className="text-center">
          We are delighted to be a car sales company in all over Nepal. Our cars
          are affordable and durable,and we have fantastic customer service.
        </p>
      </div>
    </div>
  );
};

export default Content;
