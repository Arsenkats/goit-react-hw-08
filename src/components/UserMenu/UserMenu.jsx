import { useDispatch } from "react-redux";
import { logout } from "../../redux/auth/operations";
import { NavLink } from "react-router-dom";
import s from "./UserMenu.module.css";

const UserMenu = () => {
  const dispatch = useDispatch();

  return (
    <div className={s.navCon}>
      <NavLink to='/contacts'>My contacts</NavLink>

      <button onClick={() => dispatch(logout())}>Logout</button>
    </div>
  );
};

export default UserMenu;
