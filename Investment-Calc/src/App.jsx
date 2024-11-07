import Header from "./components/Header.jsx"
import UserInput from "./components/UserInput.jsx";
import Result from "./components/Result.jsx";
import { useState } from "react";

function App() {
  // single state to manage 4 different state values

  const[userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10
  });

  const validInput = userInput.duration >=1;

  function handleChange(inputID, newValue) {
    setUserInput(prevUserInput => {
        return {
            ...prevUserInput,
            /* 
            Setting :
            initialInvestment,
            annualInvestment,
            expectedReturn, or uration 
            with their corresponding values 
            */
            [inputID]: +newValue // the plus operator will turn convert to a number value
        };

    });
  }
  
  return (
    // Must only have one root jsx element with as many children as you'd like
    <>
      <Header />
      {/* Passing handleChange as a prop, and userInput state as a prop */}
      <UserInput onChange={handleChange} userInput={userInput}/>
      {/* input validation for the duration field */}
      {!validInput && (
        <p className="center">Please enter a duraction greater than zero.</p>
      )}
      {validInput && <Result input={userInput}/>}
    </>
  );
}

export default App
