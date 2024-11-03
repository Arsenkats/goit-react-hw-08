import s from "./NotFoundPage.module.css";

const NotFoundPage = () => {
  return (
    <div className={s.error}>
      <img
        className={s.errorImg}
        src='https://static-00.iconduck.com/assets.00/404-page-not-found-illustration-2048x998-yjzeuy4v.png'
        width={1000}
      />
    </div>
  );
};

export default NotFoundPage;
