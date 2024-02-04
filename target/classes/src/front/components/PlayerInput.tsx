import "../styles/style.css";
import { Dispatch, SetStateAction, useState } from "react";
import { ControlledInput } from "./ControlledInput";
import { makeConnection } from "./ServerAccess";

interface PlayerInputProps {
  Date1: string;
  setDate1: Dispatch<SetStateAction<string>>;

  Date2: string;
  setDate2: Dispatch<SetStateAction<string>>;

  sign1: string;
  setSign1: Dispatch<SetStateAction<string>>;

  sign2: string;
  setSign2: Dispatch<SetStateAction<string>>;

  rating: string;
  setRating: Dispatch<SetStateAction<string>>;
}

export function PlayerInput(props: PlayerInputProps) {

  function handleSubmit() {
    makeConnection(props.Date1, props.Date2, props);
    window.scrollTo({top: 1320, behavior: "smooth"});
  }
  return (
    <div aria-label="player-input" id="player-input">
      <div id="first-player-input">
        <legend className="input-header">your birthday</legend>
        <ControlledInput
          value={props.Date1}
          setValue={props.setDate1}
          ariaLabel={"Player 1 input"}
        />
      </div>
      <div id="second-player-input">
        <legend className="input-header">partner's birthday</legend>
        <ControlledInput
          value={props.Date2}
          setValue={props.setDate2}
          ariaLabel={"Player 2 input"}
        />
      </div>
      <button id="submit-button" onClick={() => handleSubmit()}>
        submit
      </button>
      <div>
        <div id="get-started">
          <p>get started</p>
        </div>
      </div>
      <div>
        <div id="find-your-sign">
          <p>Find your star signs</p>
        </div>
      </div>
    </div>
  );
}
