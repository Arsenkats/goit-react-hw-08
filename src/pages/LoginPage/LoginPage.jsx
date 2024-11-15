import s from "./LoginPage.module.css";
import LoginForm from "../../components/LoginForm/LoginForm";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const RegistrationPage = () => {
  const isAuthenticated = useSelector(selectIsLoggedIn);
  if (isAuthenticated) {
    return <Navigate to='/contacts' />;
  }

  return (
    <div className={s.logContainer}>
      <h2 style={{ textAlign: "center" }}>Welcome back!</h2>
      <LoginForm />
    </div>
  );
};

export default RegistrationPage;
