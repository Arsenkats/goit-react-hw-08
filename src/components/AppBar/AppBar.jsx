import Navigation from "../Navigation/Navigation";
import AuthNav from "../AuthNav/AuthNav";
import UserMenu from "../UserMenu/UserMenu";
import s from "./AppBar.module.css";
// import { useSelector } from "react-redux";
// import { selectIsAuthenticated } from "./redux/auth/selectors";

const AppBar = () => {
  // const isAuthenticated = useSelector(selectIsAuthenticated);
  const isAuthenticated = false;
  return (
    <header className={s.headerContainer}>
      <Navigation />
      {isAuthenticated ? <UserMenu /> : <AuthNav />}
    </header>
  );
};

export default AppBar;
