import { useState } from "react";
import { useFormInput } from "../hooks/useFormInput";
import { MyThemeContext } from "../context/MyThemeContext";
import { useContext } from "react";

export default function UserInfoForm() {
  const [status, setStatus] = useState("");

  const [ageProps, ageReset] = useFormInput("age");
  const [addressProps, addressReset] = useFormInput("address");
  const [petsProps, petsReset] = useFormInput("pets");
  const { theme } = useContext(MyThemeContext);

  function handleSubscribe() {
    ageReset();
    addressReset();
    petsReset();

    setStatus("Thanks for your info!");
  }

  return (
    <div
      className="InfoForm componentBox"
      style={{ background: theme.background, color: theme.foreground }}
    >
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
