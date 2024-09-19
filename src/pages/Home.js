import React from "react";
import Home1 from "../assests/images/home-1.png";

function home() {
  return (
    <div>
      <div>
        <h1>FUTUREMINDZ</h1>
        <p>Visualize. Transform. Succeed.</p>
        <button>LEARN MORE</button>
      </div>
      <div>
        <img src={Home1} alt="image" />
      </div>
    </div>
  );
}

export default home;
