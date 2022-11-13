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
        style={{ backgroundColor: buttonColor }}
        disabled={isDisabled}
      >
        Change to {newButtonColor}
      </button>

      <input
        type="checkbox"
        defaultChecked={isDisabled}
        onChange={(e) => {
          setIsDisabled(e.target.checked);
        }}
      />
    </div>
  );
};

export default App;
