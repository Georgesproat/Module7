import React, { useState, useRef } from "react";

export default function RefCounter() {
  const [countState, setCountState] = useState(0);
  let countRef = useRef(0); 
  let count = 0; 

  function handleRefClick() {
   
    countRef.current = countRef.current + 1;
    count = count + 1; 
    
    alert(`You clicked ${countRef.current} (${count}) times!`);
  }

  return (
    <div className="RefCounter componentBox">
      <button onClick={handleRefClick}>REF COUNTER: Click me!</button>
      Ref: {countRef.current} Var: {count} <br />
      <button onClick={() => setCountState(countState + 1)}>
        STATE COUNTER: Click me to update!
      </button>
      State: {countState}
    </div>
  );
}
