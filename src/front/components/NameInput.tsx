import "../styles/style.css";
import { Dispatch, SetStateAction } from "react";

interface NameInputProps {
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
  ariaLabel: string;
}

export function NameInput({
  value,
  setValue,
  ariaLabel,
}: NameInputProps) {
  const handleInputChange = (inputValue: string) => {
    setValue(inputValue);
  };

  return (
    <div>
      <input
      id="name-input"
        type="text"
        className="player-input-box"
        value={value}
        placeholder="Name"
        onChange={(ev) => handleInputChange(ev.target.value)}
        aria-label={ariaLabel}
      />
    </div>
  );
}
