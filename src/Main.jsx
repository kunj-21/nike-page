import React from "react";
import "./App.css";

const Main = () => {
  return (
<div className="spilt container">
     <div className="spilt-1">
       
        <h1>YOUR FEET DESRVE THE BEST</h1> 
          <p>
            YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
            SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
            SHOES.
          </p>
          <div className="spilt-btn">
            <button>Shop Now</button>
            <button className="second-btn">Category</button>
          </div>
        <div className="shopping">
            <p>Also Avialable On</p>

            <div className="icon">
                <img src="./img/amazon.png" alt="amazon" />
                <img src="./img/flipkart.png" alt="flipkart" />

            </div>

        </div>
     </div>
       <div className="hero-img">
        <img src="./img/nike.png" alt="nike" />
       </div>
    </div>
  );
};

export default Main;
