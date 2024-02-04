import "../styles/style.css";
import { BirthdayInput } from "./BirthdayInput";
import { useState } from "react";
import { OpeningScreen } from "./OpeningScreen";
import { SignReponses } from "./SignResponses";
import { Result } from "./Result";

function App() {
  const [Date1, setDate1] = useState<string>("");
  const [Date2, setDate2] = useState<string>("");
  const [sign1, setSign1] = useState<string>("");
  const [sign2, setSign2] = useState<string>("");
  const [rating, setRating] = useState<string>("");

  return (
    <div className="App" id="app">
      <div id="open-screen">
        <OpeningScreen />
      </div>

      <div id="input-output">
        <BirthdayInput
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
        <Result rating={rating} setRating={setRating} />
      </div>
    </div>
  );
}

export default App;
