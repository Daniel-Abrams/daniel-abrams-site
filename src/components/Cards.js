import React from "react";
import "./Cards.css";
import CardItem from "./CardItem";

function Cards() {
  return (
    <div className="cards">
      <h1>Check out these EPIC Destinations!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              text="Old iOS tracking app that uses gyroscopic data from Apple Watch"
              label="Swing Tracker"
              url="https://github.com/Daniel-Abrams/Swing-Tracker"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
