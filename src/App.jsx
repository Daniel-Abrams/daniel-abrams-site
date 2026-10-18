import { useState } from "react";
import "./App.css";
import Cards from "./components/Cards";
import TextEntry from "./TextEntry";


function HomePage() {
  return (
    <div>
      <h1>Hello, welcome to my webpage.</h1>
      <p>
        I don't have much to display at the moment, but here are some github
        repositores I have.
      </p>
      <Cards />
        <p>
        Can a first-order Hidden Markov Model distinguish between huma and AI writing in hybrid text? Upload a sample to see how well it performs:
      </p>
      <TextEntry />
      <p className="email_item">
        <a href="mailto:danlab1104@gmail.com">Contact Me</a>.
      </p>
    </div>
  );
}

export default HomePage;
