import React from "react";
import { useMoodContext } from "./MoodContext";

const Emoji = () => {
  const { currentMood, toggleMood } = useMoodContext();

  return (
    <div className="Emoji" onClick={() => toggleMood(currentMood)}>
      <span role="img" aria-label="emoji">
        {currentMood}
      </span>
    </div>
  );
};

export default Emoji;
