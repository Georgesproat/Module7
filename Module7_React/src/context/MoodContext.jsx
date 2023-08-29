import React, { createContext, useContext, useState } from "react";

const MoodContext = createContext();

export const MoodProvider = ({ children }) => {
  const [currentMood, setCurrentMood] = useState("😄"); 

  const toggleMood = (prevMood) => {
    setCurrentMood(prevMood === "😄" ? "😢" : "😄");
  };

  return (
    <MoodContext.Provider value={{ currentMood, toggleMood }}>
      {children}
    </MoodContext.Provider>
  );
};

export const useMoodContext = () => {
  return useContext(MoodContext);
};
