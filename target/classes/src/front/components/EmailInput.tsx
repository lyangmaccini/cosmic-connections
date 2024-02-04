import "../styles/style.css";
import { Dispatch, SetStateAction, useState } from "react";
import { ControlledInput } from "./ControlledInput";
import { makeConnection, sendEmail } from "./ServerAccess";
import { NameInput } from "./NameInput";
import { EmailBox } from "./EmailBox";

interface EmailInputProps {
  name: string;
  setName: Dispatch<SetStateAction<string>>;

  email: string;
  setEmail: Dispatch<SetStateAction<string>>;

}

export function EmailInput(props: EmailInputProps) {
  function handleSubmit() {
    sendEmail(props.name, props.email);
  }
  return (
    <div aria-label="email-input" id="player-input">
      <div id="first-player-input">
        <legend className="input-header">your name</legend>
        <NameInput
          value={props.name}
          setValue={props.setName}
          ariaLabel={"Player 2 input"}
        />
      </div>
      <div id="second-player-input">
        <legend className="input-header">lover's email</legend>
        <EmailBox
          value={props.email}
          setValue={props.setEmail}
          ariaLabel={"Player 2 input"}
        />
      </div>
      <button id="email-submit-button" onClick={() => handleSubmit()}>
        submit
      </button>
      <div>
        <div id="lunar-lover">
          <p>Let your lunar lover know</p>
        </div>
      </div>
      <div>
        <div id="email-instructions">
          <p>
            Put in your name and your lover's email to let them know you're
            written in the stars. It'll send an AI-generated, space-themed love
            letter!
          </p>
          <div>
            <a>
              {" "}
              <img id="email-background" src="email.svg" width={1000}/>{" "}
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
