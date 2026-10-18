import { useState } from "react";
import "./App.css";
import Cards from "./components/Cards";
import TextEntry from "./components/TextEntry";


function HomePage() {
  return (
    <div>
      <h1>Hi, welcome to my webpage.</h1>
      <p>
        I dont have too much to display on this sight right now, but here's some projects on my github:
      </p>
      <Cards />
        <p>
        Can a first-order Hidden Markov Model distinguish between human and AI writing in hybrid text? Upload a sample to see how well it performs. Green = Human, red = AI. <a href="https://huggingface.co/datasets/open-text-detector/heterogeneous-ai-spans" >Training Dataset</a>
      </p>
      <TextEntry />

      <p className="email_item">
        <a href="mailto:danlab1104@gmail.com">Contact Me</a>  &emsp;  <a href="https://www.linkedin.com/in/daniel-abrams04/">LinkedIn</a>
      </p>
    </div>
  );
}

export default HomePage;
