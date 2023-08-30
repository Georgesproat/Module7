import React, { useState } from "react";
import { useData } from "../hooks/useData";
import { MyThemeContext } from "../context/MyThemeContext";
import { useContext } from "react";



function ActivityFinder() {
  const [participants, setParticipants] = useState(1);
  const [type, setType] = useState("recreational");
  

  
  const activityObject = useData(
    `https://www.boredapi.com/api/activity?participants=${participants}&type=${type}`
  );

  
  const activity = activityObject.error
    ? activityObject.error
    : activityObject.activity;
    const { theme } = useContext(MyThemeContext);

  return (
    <div
      className="ActivityFinder componentBox"
      style={{ background: theme.background, color: theme.foreground }}
    >
      <h3>Activity Finder</h3>
      <label>
        Choose number of participants:
        <select
          value={participants}
          onChange={(e) => setParticipants(e.target.value)}
        >
          <option>1</option>
          <option>2</option>
          <option>3</option>
        </select>
      </label>
      <label>
        Choose Type:
        <select value={type} onChange={(e) => setType(e.target.value)}>
          <option value="recreational">Recreational</option>
          <option value="cooking">Cooking</option>
          <option value="social">Social</option>
          <option value="relaxation">Relaxation</option>
        </select>
      </label>
      <div>
        <strong>Suggested Activity: </strong>
        {activity}
      </div>
    </div>
  );
}

export default ActivityFinder;
