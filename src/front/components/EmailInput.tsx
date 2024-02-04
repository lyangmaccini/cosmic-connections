import "../styles/style.css";
import { Dispatch, SetStateAction, useState } from "react";
import { sendEmail } from "./ServerAccess";
import { NameInput } from "./NameInput";
import { EmailBox } from "./EmailBox";

interface EmailInputProps {
  name: string;
  setName: Dispatch<SetStateAction<string>>;
  email: string;
  setEmail: Dispatch<SetStateAction<string>>;
  message: string;
  setMessage: Dispatch<SetStateAction<string>>;
}

export function EmailInput(props: EmailInputProps) {
  function handleSubmit() {
    sendEmail(props.name, props.email);
    props.setMessage("Email sent! <3");
  }
  return (
    <div aria-label="email-input" id="birthday-input">
      <div id="first-birthday-input">
        <legend className="input-header">your name</legend>
        <NameInput
          value={props.name}
          setValue={props.setName}
          ariaLabel={"Birthday 2 input"}
        />
      </div>
      <div id="second-birthday-input">
        <legend className="input-header">lover's email</legend>
        <EmailBox
          value={props.email}
          setValue={props.setEmail}
          ariaLabel={"Birthday 2 input"}
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
              <img id="email-background" src="email.svg" width={1000} />{" "}
            </a>
          </div>
          <div id="email-sent">{props.message}</div>
        </div>
      </div>
    </div>
  );
}
