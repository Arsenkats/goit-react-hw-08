import Contact from "./Contact/Contact";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchContacts } from "../../redux/contacts/operations";
import { selectContacts, selectLoading } from "../../redux/contacts/selectors";
import css from "./ContactList.module.css";

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts); // Отримуємо контакти з редаксу
  const loading = useSelector(selectLoading); // Стан завантаження

  useEffect(() => {
    dispatch(fetchContacts());
  }, []);

  return (
    <ul className={css.contactList}>
      {contacts.length === 0 && !loading ? (
        <p>No contacts available.</p>
      ) : (
        contacts.map((item) => (
          <li key={item.id}>
            <Contact id={item.id} name={item.name} number={item.number} />
          </li>
        ))
      )}
    </ul>
  );
};

export default ContactList;
