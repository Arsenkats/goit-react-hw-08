import RegistrationForm from "../../components/RegistrationForm/RegistrationForm";
import s from "./RegistrationPage.module.css";
import { Navigate } from "react-router-dom";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import { useSelector } from "react-redux";

const RegistrationPage = () => {
  const isAuthenticated = useSelector(selectIsLoggedIn);
  if (isAuthenticated) {
    return <Navigate to='/contacts' />;
  }
  return (
    <div className={s.regContainer}>
      <h2 style={{ textAlign: "center" }}>
        Register now <br /> and never lose <br /> important contacts!
      </h2>
      <RegistrationForm />
    </div>
  );
};

export default RegistrationPage;
