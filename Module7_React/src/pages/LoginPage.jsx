import LoginForm from "../components/LoginForm";
import SignIn from "../components/SignIn";
import SubscribeForm from "../components/SubscribeForm";
import UserInfoForm from "../components/UserInfoForm";

export default function Loginpage() {
  return (
    <div className="Loginpage">
      <h1>Login</h1>
      <LoginForm />
      <SubscribeForm />
      <UserInfoForm />
      <SignIn/>
    </div>
  );
}
