import s from "./LoginPage.module.css";
import LoginForm from "../../components/LoginForm/LoginForm";

const RegistrationPage = () => {
  return (
    <div className={s.logContainer}>
      <h2 style={{ textAlign: "center" }}>Welcome back!</h2>
      <LoginForm />
    </div>
  );
};

export default RegistrationPage;
