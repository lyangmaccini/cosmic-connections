import "../styles/style.css";

export function OpeningScreen() {
  function handleClick() {
    window.scrollTo({top: 700, behavior: "smooth"});
  }
  return (
    <div>
      <div id="love-question">
        <p>Is your love written in the stars?</p>
      </div>
      <div id="notice">
        <p>If it’s a cosmic connection, send an AI generated love letter</p>
      </div>
      <button id="find-out-button" onClick={() => handleClick()}>
        {" "}
        <a>
          {" "}
          <img src="src/arrow.svg" width={180} />
        </a>
      </button>
    </div>
  );
}
