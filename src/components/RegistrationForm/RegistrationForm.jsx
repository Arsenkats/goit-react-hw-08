import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import css from "./RegistrationForm.module.css";
import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";
const initialValues = {
  name: "",
  email: "",
  password: "",
};
const RegistrationForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, options) => {
    dispatch(register(values));
    options.resetForm();
  };
  const checkValues = Yup.object().shape({
    name: Yup.string()
      .min(3, "Name should be at least 3 characters")
      .max(50, "Name should be at most 50 characters")
      .required("Name is required"),

    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),

    password: Yup.string()
      .min(6, "Password should be at least 6 characters")
      .max(50, "Password should be at most 50 characters")
      .required("Password is required")
      .matches(/[a-zA-Z]/, "Password must contain at least one letter")
      .matches(/[0-9]/, "Password must contain at least one number")
      .matches(/[\W_]/, "Password must contain at least one special character"),
  });

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={checkValues}
      onSubmit={handleSubmit}
    >
      <Form className={css.form}>
        <label className={css.label}>
          Name
          <Field type='text' name='name' className={css.input} />
          <ErrorMessage name='name' component='p' className={css.error} />
        </label>
        <label className={css.label}>
          Email
          <Field type='email' name='email' className={css.input} />
          <ErrorMessage name='email' component='p' className={css.error} />
        </label>

        <label className={css.label}>
          Password
          <Field type='password' name='password' className={css.input} />
          <ErrorMessage name='password' component='p' className={css.error} />
        </label>

        <button type='submit'>Register</button>
      </Form>
    </Formik>
  );
};

export default RegistrationForm;
