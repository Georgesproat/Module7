import { useState, useEffect } from "react";
function ActivityFinder() {
  // Fetches a random activity
  const [participants, setParticipants] = useState(1);
  const [type, setType] = useState(1);
  const [activity, setActivity] = useState("");

  useEffect(() => {
    let ignore = false;
    fetch(
      `https://www.boredapi.com/api/activity?participants=${participants}&type=${type}`
    )
      .then((response) => response.json())
      .then((json) => {
        console.log(json)
        if(!ignore) {
        if (json.error) setActivity(json.error)
        else setActivity(json.activity);
        }
      });

      normalVariable = 'updated re-rendered value'

       return function cleanUp() {
         ignore = true;
         console.log('cleanUp effect')
       };
  }, [participants, type]);

  let normalVariable = 'standard variable with intial value';

 
  return (
    <div className="ActivityFinder componentBox">
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
        <select 
        value={type} 
        onChange={(e) => setType(e.target.value)}
        >
          <option>recreational</option>
          <option>cooking</option>
          <option>social</option>
          <option>relaxation</option>
        </select>
      </label>
      <div>
        <strong>Suggested Activity: </strong>
        {activity} {normalVariable}
      </div>
    </div>
  );
}

export default ActivityFinder;
