import { useState } from "react";
import "../index.css"

export default function UserInput({onChange, userInput}) {

    return (

        <section id="user-input">
            <div className="input-group">
                {/* for the onChange={(event) => handleChange('initialInvestment', event.target.value)} :
                
                    - the event prop is the argument passed to the arrow function. It represents the event object 
                      that is automatically provided by the browser when the event occurs.
                        
                    - The second argument, event.target.value, is the current value of the input field that triggered 
                      the event. event.target refers to the input element itself, and event.target.value gives the current 
                      value of that input element. 
                */}
                <p>
                    <label>
                        INITIAL INVESTMENT
                    </label>
                    <input 
                    type="number" 
                    required 
                    value={userInput.initialInvestment}
                    onChange={(event) => onChange('initialInvestment', event.target.value)} />
                </p>
                
        
                <p>
                    <label>
                        ANNUAL INVESTMENT
                    </label>

                    <input 
                    type="number" 
                    required  
                    value ={userInput.annualInvestment}
                    onChange={(event) => onChange('annualInvestment', event.target.value)} />
                </p>
          
            </div>   

            <div className="input-group">

                <p>
                    <label>
                        EXPECTED RETURN
                    </label>

                    <input 
                    type="number" 
                    required 
                    value ={userInput.expectedReturn}
                    onChange={(event) => onChange('expectedReturn', event.target.value)} />

                </p>


                <p>
                    <label>
                        DURATION 
                    </label>

                    <input 
                    type="number" 
                    required 
                    value={userInput.duration}
                    onChange={(event) => onChange('duration', event.target.value)} />
                </p>

            </div>   

        </section>
    );
}