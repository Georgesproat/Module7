import React, { useState, useEffect } from "react";
import { useUserContext } from "../context/UserContext";
// Renders a digital time that updates every second
function Clock() {
  
  const [date, setDate] = useState(new Date());
  const [tickCount, setTickCount] = useState(0);

  useEffect(() => {
    const clockInterval = setInterval(() => tick(), 1000);
    console.log("Clock component mounted");

    // Clean up the interval when the component unmounts
    return () => {
      console.log("Clock component unmounted");
      clearInterval(clockInterval);
    };
  }, []); // Empty dependency array means this effect runs only once on mount

  const tick = () => {
    setDate(new Date());
    setTickCount((tickCount) => tickCount + 1); 
    console.log("tick"); // Track the effect frequency
  };

  return (
    <div className="Clock">
      <h3>Digital Clock</h3>
      {date.toLocaleTimeString()}
      <div>{tickCount} seconds</div>
    </div>
  );
}

function ClockDisplay() {
  const { currentUser } = useUserContext();
  const [showClock, setShowClock] = useState(false);

  const toggleClock = () => {
    setShowClock(!showClock);
  };

  return (
    <div className="ClockDisplay componentBox">
      <p>Welcome {currentUser.name}!</p>
      {showClock && <Clock />}
      <button onClick={toggleClock}>Toggle Clock</button>
    </div>
  );
}

export default ClockDisplay;
