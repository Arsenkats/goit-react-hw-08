import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import ContactsPage from "./pages/ContactsPage/ContactsPage";
import HomePage from "./pages/HomePage/HomePage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import RegistrationPage from "./pages/RegistrationPage/RegistrationPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { refresh } from "./redux/auth/operations";
import { selectIsRefreshing } from "./redux/auth/selectors";
import { PrivateRoute } from "./components/PrivateRoute";
import { RestrictedRoute } from "./components/RestrictedRoute";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(refresh());
  }, [dispatch]);

  const isRefreshing = useSelector(selectIsRefreshing);
  return isRefreshing ? null : (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route
            path='/contacts'
            element={
              <PrivateRoute redirectTo='/login' component={<ContactsPage />} />
            }
          />
          <Route
            path='register'
            element={
              <RestrictedRoute
                component={RegistrationPage}
                redirectTo='/contacts'
              />
            }
          />
          <Route
            path='login'
            element={
              <RestrictedRoute component={LoginPage} redirectTo='/contacts' />
            }
          />
        </Route>
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
      <ToastContainer position='top-right' autoClose={3000} />
    </>
  );
};

export default App;
