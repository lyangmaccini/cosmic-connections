import { Dispatch, SetStateAction } from "react";
import "../styles/style.css";

interface ServerAccessProps {
  sign1: string;
  setSign1: Dispatch<SetStateAction<string>>;
  sign2: string;
  setSign2: Dispatch<SetStateAction<string>>;
  rating: string;
  setRating: Dispatch<SetStateAction<string>>;
}

export async function makeConnection(
  Date1: string,
  Date2: string,
  props: ServerAccessProps
) {
  fetch(
    "http://localhost:5555/connections?date1=" +
      Date1 +
      "&date2=" +
      Date2
  )
    .then((response) => response.json())
    .then((json) => {
      if (json.result === "error") {
        console.log("error");
      } else if (json.result === "failure") {
        console.log("error");
      } else if (json.result === "success") {
        props.setSign1(json["sign 1"]);
        props.setSign2(json["sign 2"]);
        props.setRating(json["score"]);
      }
    });
}

 export async function sendEmail(
   name: string,
   email: string,
 ) {
   fetch("http://localhost:5555/email?name=" + name + "&email=" + email);
 }

