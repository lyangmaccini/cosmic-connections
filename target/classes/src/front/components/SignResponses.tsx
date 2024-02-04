import { Dispatch, SetStateAction, useState } from "react";
import "../styles/style.css";
import { HistoryButton } from "./HistoryButton";
// import abc from "down-arrow.png";

interface SignResponsesProps {
  sign1: string;
  setSign1: Dispatch<SetStateAction<string>>;

  sign2: string;
  setSign2: Dispatch<SetStateAction<string>>;
}
export function SignReponses(props: SignResponsesProps) {
  let sign1 = "src/images/" + props.sign1 + ".svg";
  let sign2 = "src/images/" + props.sign2 + ".svg";
  return (
    <div id="sign-responses">
      <h5 id="small-sign-header">ask the stars</h5>
      <h2 id="sign-header">Get your compatibility</h2>
      <a id="sign1">
        <img id="image-sign-1" src={sign1} width={250} />
        <div id="sign1-box"></div>
      </a>
      <a id="sign2">
        <img id="image-sign-2" src={sign2} width={250} />
      </a>
      <button
        id="reveal-button"
        onClick={() => window.scrollTo({ top: 2100, behavior: "smooth" })}
      >
        {" "}
        are the stars aligned?{" "}
      </button>
    </div>
  );
}

export function OpeningScreen() {
  function handleClick() {
    window.scrollBy(0, 700);
  }
  // returns two string inputs for the two different players
  return (
    <div>
      <div id="love-question">
        <p>Is your love written in the stars?</p>
      </div>
      <button id="find-out-button" onClick={() => handleClick()}>
        Find out here
      </button>
    </div>
  );
}
