import RegistrationForm from "../../components/RegistrationForm/RegistrationForm";
import s from "./RegistrationPage.module.css";

const RegistrationPage = () => {
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
