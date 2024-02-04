import "../styles/style.css";
import { useState } from "react";
import { EmailInput } from "./EmailInput";


function App2() {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  return (
    <div className="App2" id="app2">
      <div id="email-output">
        <EmailInput
          name={name}
          setName={setName}
          email={email}
          setEmail={setEmail}
          message={message}
          setMessage={setMessage}
        />
      </div>
    </div>
  );
}

export default App2;
