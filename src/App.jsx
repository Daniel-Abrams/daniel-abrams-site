import { useState } from "react";
import "./App.css";
import Cards from "./components/Cards";

function HomePage() {
  return (
    <div>
      <h1>Hello, welcome to my webpage.</h1>
      <p>
        I don't have much to display at the moment, but here are some github
        repositores I have.
      </p>
      <Cards />
      <a href="danlab1104@gmail.com">Contact Me</a>
    </div>
  );
}

export default HomePage;
