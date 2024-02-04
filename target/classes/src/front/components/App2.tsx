import "../styles/style.css";
import { PlayerInput } from "./PlayerInput";
import { useState } from "react";
import { OpeningScreen } from "./OpeningScreen";
import { SignReponses } from "./SignResponses";
import { Result } from "./Result";
import { EmailInput } from "./EmailInput";

document.addEventListener("keydown", function (event) {
  //if command key or control key are held down
  if (event.ctrlKey || event.metaKey) {
    //using a switch here allows more controls to be added in the future
    switch (event.key) {
      case "i":
        //focuses on the input box so user can type in
        document.getElementById("input-box")!.focus();
        event.preventDefault();
        break;
      case "u":
        document.getElementById("abt-button")!.click();
        event.preventDefault();
        break;
      case "Enter":
        document.getElementById("submit-button")!.click();
        event.preventDefault();
        break;
    }

    //commands that are not combined with control/command
  } else {
    switch (event.key) {
      //scrolls up whole page
      case "ArrowUp":
        window.scrollBy(0, -10);
        break;

      //scroll down whole page
      case "ArrowDown":
        window.scrollBy(0, 10);
        break;
    }
  }
});

function App2() {
  const [Date1, setDate1] = useState<string>("");
  const [Date2, setDate2] = useState<string>("");
  const [sign1, setSign1] = useState<string>("");

  return (
    <div className="App2" id="app2">
      <div id="email-output">
        <EmailInput
          name={Date1}
          setName={setDate1}
          email={Date2}
          setEmail={setDate2}
        />
      </div>
    </div>
  );
}

export default App2;
