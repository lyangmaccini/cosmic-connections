import "../styles/style.css";
import { Dispatch, SetStateAction } from "react";

interface ControlledInputProps {
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
  ariaLabel: string;
}

export function ControlledInput({
  value,
  setValue,
  ariaLabel,
}: ControlledInputProps) {
  const handleInputChange = (inputValue: string) => {
    setValue(inputValue);
  };

  return (
    <div>
      <input
        type="text"
        className="date-input-box"
        value={value}
        placeholder="MM/DD/YYYY"
        onChange={(ev) => handleInputChange(ev.target.value)}
        aria-label={ariaLabel}
      />
    </div>
  );
}
