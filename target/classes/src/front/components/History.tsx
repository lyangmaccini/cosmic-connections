import { Dispatch, SetStateAction, useState } from "react";
import "../styles/style.css";
import { HistoryButton } from "./HistoryButton";

interface HistoryProps {
  history: string[];

  inputString1: string;
  setInputString1: Dispatch<SetStateAction<string>>;

  inputString2: string;
  setInputString2: Dispatch<SetStateAction<string>>;
}
export function History(props: HistoryProps) {
  return (
    <div aria-label="History" id="history" className="history" title="history">
      <h2 id="history-header">Search History</h2>

      {props.history.map((command, index) => (
        <HistoryButton
          key={index}
          PlayerOne={props.inputString1}
          setInput1={props.setInputString1}
          setInput2={props.setInputString2}
          PlayerTwo={props.inputString2}
          command={command}
        />
      ))}
    </div>
  );
}
