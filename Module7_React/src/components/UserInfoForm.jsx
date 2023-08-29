import { useState } from "react";
import { useFormInput } from "../hooks/useFormInput";

export default function UserInfoForm() {
  const [status, setStatus] = useState("");

  const [ageProps, ageReset] = useFormInput("age");
  const [addressProps, addressReset] = useFormInput("address");
  const [petsProps, petsReset] = useFormInput("pets");

  function handleSubscribe() {
    ageReset();
    addressReset();
    petsReset();

    setStatus("Thanks for your info!");
  }

  return (
    <div className="InfoForm componentBox">
      <label>
        Age:
        <input {...ageProps} />
      </label>
      <label>
        Address:
        <input {...addressProps} />
      </label>
      <label>
        Pets:
        <input {...petsProps} />
      </label>
      <button onClick={handleSubscribe}>Submit</button>
      <div>{status}</div>
    </div>
  );
}
