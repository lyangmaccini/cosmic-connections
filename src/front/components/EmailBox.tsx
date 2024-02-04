import "../styles/style.css";
import { Dispatch, SetStateAction } from "react";

interface EmailBoxProps {
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
  ariaLabel: string;
}

export function EmailBox({
  value,
  setValue,
  ariaLabel,
}: EmailBoxProps) {
  const handleInputChange = (inputValue: string) => {
    setValue(inputValue);
  };

  return (
    <div>
      <input
      id="email-box"
        type="text"
        className="player-input-box"
        value={value}
        placeholder="iloveyou@email.com"
        onChange={(ev) => handleInputChange(ev.target.value)}
        aria-label={ariaLabel}
      />
    </div>
  );
}
