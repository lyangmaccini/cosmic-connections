import "../styles/style.css";
import { Dispatch, SetStateAction } from "react";

interface SignResponsesProps {
  rating: string;
  setRating: Dispatch<SetStateAction<string>>;
}

export function Result(props: SignResponsesProps) {
    let message = "";
  if (props.rating == "") {
    message = " "
  } else if (parseInt(props.rating) > 50) {
    console.log("over");
    message = "you two are a cosmic connection! <3";
  } else {
    console.log("under");
    message = "your stars are not cosmically aligned!";
  }
  let number = props.rating;
      return (
        <div>
          <div id="result-message">
            <p>{message}</p>
          </div>
          <div id="numb-end">
            <p> {number}% </p>
          </div>
          <div id="comp">
            <p> compatible </p>
            <a id="love-letter-button" href="email.html">
              <img src="love-letter.svg" alt="<3" width={120} />{" "}
            </a>
            <div>
              <p id="love-letter-instructions">click on the letter to let your lover know</p>
            </div>
          </div>
        </div>
      );
}
