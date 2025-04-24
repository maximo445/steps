import { useState } from "react";
import "./App.css";

const steps = ["Learn React", "Apply for Jobs", "Insvest Your Money"];

function App() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  function increase() {
    if (step < 3) setStep((currentStep) => currentStep + 1);
  }

  function decrease() {
    if (step > 1) setStep((currentStep) => currentStep - 1);
  }

  function toggle() {
    setIsOpen((open) => !open);
  }

  return (
    <div className="app">
      <div className="container">
        {isOpen && (
          <>
            <div className="steps">
              <span className={step >= 1 ? "active" : ""}>1</span>
              <span className={step >= 2 ? "active" : ""}>2</span>
              <span className={step >= 3 ? "active" : ""}>3</span>
            </div>
            <h1 className="message">
              Step {step}: {steps[step - 1]}
            </h1>
            <div className="navigation">
              <button onClick={decrease}>Previous</button>
              <button onClick={toggle}>&times;</button>
              <button onClick={increase}>Next</button>
            </div>
          </>
        )}
        {!isOpen && <button onClick={toggle}>+</button>}
      </div>
    </div>
  );
}

export default App;
