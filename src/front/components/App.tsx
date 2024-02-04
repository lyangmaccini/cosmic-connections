import "../styles/style.css";
import { PlayerInput } from "./PlayerInput";
import { useState } from "react";
import { OpeningScreen } from "./OpeningScreen";
import { SignReponses } from "./SignResponses";
import { Result } from "./Result";

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

function App() {

  const [Date1, setDate1] = useState<string>("");
  const [Date2, setDate2] = useState<string>("");
  const [sign1, setSign1] = useState<string>("");
  const [sign2, setSign2] = useState<string>("");
  const [rating, setRating] = useState<string>("");

  return (
    // divided App into 3 parts, the history, the input, and the output
    <div className="App" id="app">
      <div id="open-screen">
        <OpeningScreen
        />
      </div>
      <div id="input-output">
        <PlayerInput
          Date1={Date1}
          setDate1={setDate1}
          Date2={Date2}
          setDate2={setDate2}
          sign1={sign1}
          setSign1={setSign1}
          sign2={sign2}
          setSign2={setSign2}
          rating={rating}
          setRating={setRating}
        />

      </div>
      <div id="sign-responses">
        <SignReponses
          sign1={sign1}
          setSign1={setSign1}
          sign2={sign2}
          setSign2={setSign2}
        />
      </div>

      <div id="compatibility-result">
        <Result 
          rating={rating}
          setRating={setRating}
        />
      </div>
    </div>
  );
}

export default App;
