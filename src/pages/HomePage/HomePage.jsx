import s from "./HomePage.module.css";

const HomePage = () => {
  return (
    <div className={s.container}>
      <h1>Phonebook</h1>
      <p className={s.text}>
        This is your reliable assistant for storing contact information.
      </p>
      <p className={s.text}>
        Start now by adding your first contacts and make your phonebook more
        organized!
      </p>
      <a href='/register' className={s.startButton}>
        Start
      </a>
    </div>
  );
};

export default HomePage;
