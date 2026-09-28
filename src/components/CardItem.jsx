import React from "react";
import Cards from "./Cards";

function CardItem(props) {
  return (
    <>
      <a
        href={props.url}
        target="_blank"
        rel="noopener noreferrer"
        style={{ textDecoration: "none", color: "inherit" }}
      >
        <div class="card">
          <img class="card-image" src={props.src} alt="Laptop on a desk" />
          <div class="card-content">
            <h2 className="cards_header">{props.header}</h2>
            <p className="cards_text">{props.text}</p>
          </div>
        </div>
      </a>
    </>
  );
}

export default CardItem;
