import { useState } from "react";
import { useFormInput } from "../hooks/useFormInput";
import { useContext } from "react";
import { MyThemeContext } from "../context/MyThemeContext";

export default function SubscribeForm() {
  const [status, setStatus] = useState("");

  // similar state variables mapped to form inputs
  // const [firstName, setFirstName] = useState("Mary");
  //const [email, setEmail] = useState("mary@poppins.com");

  const [firstNameProps, firstNameReset] = useFormInput("Mary");
  const [emailProps, emailReset] = useFormInput("marypoppins.com");
  const [passwordProps, passwordReset] = useFormInput("password");
  const { theme } = useContext(MyThemeContext);
  // similar handler functions
  //const handleNameChange = (e) => setFirstName(e.target.value);
  //const handleEmailChange = (e) => setEmail(e.target.value);

  function handleSubscribe() {
    //setFirstName("");
    firstNameReset();
    //setEmail("");
    emailReset();
    passwordReset();

    setStatus("Thanks for subscribing!");
  }

  return (
    <div
      className="SubscribeForm componentBox"
      style={{ backgroundColor: theme.background, color: theme.foreground }}
    >
      <label>
        First name: {/* form inputs with similar props */}
        <input {...firstNameProps} />
      </label>
      <label>
        Email: {/* form inputs with similar props */}
        <input {...emailProps} />
      </label>
      <label>
        Password: {/* form inputs with similar props */}
        <input {...passwordProps} />
      </label>
      <button onClick={handleSubscribe}>Subscribe</button>
      <div>{status}</div>
    </div>
  );
}
