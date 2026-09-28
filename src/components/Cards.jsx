import React from "react";
import "./Cards.css";
import CardItem from "./CardItem";

function Cards() {
  return (
    <div className="cards">
      <div className="card-list">
        <CardItem
          header="Swing Tacker"
          text="Old iOS tracking app that uses gyroscopic data from Apple Watch"
          url="https://github.com/Daniel-Abrams/Swing-Tracker"
          src="public/assets/IMG_1006.gif"
        />
        <CardItem
          header="Mastodon Crawler"
          text="Mastodon web crawler used to find posts and analyze content related to the 2025 LA wildfires. Go crawl some data."
          url="https://github.com/Daniel-Abrams/Mastodon-Crawler"
          src="public/assets/graph.gif"
        />
        <CardItem
          header="Predicting Social Media Usage with Logistic Regression"
          text="Class project that uses demographic information from a dataset to predict which social media platforms people use. Gradient descent done by hand instead of with numpy, for some reason..."
          url="https://github.com/Daniel-Abrams/Multiple-Logistic-Regression"
          src="public/assets/socialmedia-preview.jpeg"
        />
      </div>
    </div>
  );
}

export default Cards;
