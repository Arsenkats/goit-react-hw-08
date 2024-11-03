// import { useDispatch } from "react-redux";
// import { logOut } from "./redux/auth/operations";
import { NavLink } from "react-router-dom";
import s from "./UserMenu.module.css";

const UserMenu = () => {
  //   const dispatch = useDispatch();

  //   const handleLogout = () => {
  //     dispatch(logOut());
  //   };

  return (
    <div className={s.navCon}>
      <NavLink to='/contacts'>My contacts</NavLink>
      {/* onClick={handleLogout} */}
      <button>Logout</button>
    </div>
  );
};

export default UserMenu;
