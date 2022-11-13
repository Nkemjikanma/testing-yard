import { useState } from "react";

const App: React.FC = () => {
  const [buttonColor, setButtonColor] = useState<string>("red");
  const [isDisabled, setIsDisabled] = useState<boolean>(false);
  const newButtonColor = buttonColor === "red" ? "blue" : "red";

  return (
    <div className="App">
      <button
        onClick={() => {
          setButtonColor(newButtonColor);
        }}
        style={
          !isDisabled
            ? { backgroundColor: buttonColor }
            : { backgroundColor: "gray" }
        }
        disabled={isDisabled}
      >
        Change to {newButtonColor}
      </button>
      <br />
      <input
        type="checkbox"
        id="checkbox-for-button"
        defaultChecked={isDisabled}
        onChange={(e) => {
          setIsDisabled(e.target.checked);
        }}
      />
      <label htmlFor="checkbox-for-button">Disable Button</label>
    </div>
  );
};

export default App;
