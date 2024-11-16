import Contact from "./Contact/Contact";
import css from "./ContactList.module.css";
import { useDispatch, useSelector } from "react-redux";
import { selectFilteredContacts } from "../../redux/contacts/selectors";
import { useEffect } from "react";
import { fetchContacts } from "../../redux/contacts/operations";
import { selectIsLoggedIn } from "../../redux/auth/selectors";

const ContactList = () => {
  const dispatch = useDispatch();
  const filteredContacts = useSelector(selectFilteredContacts);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  useEffect(() => {
    if (isLoggedIn && filteredContacts.length === 0) {
      dispatch(fetchContacts());
    }
  }, [dispatch, isLoggedIn, filteredContacts.length]);

  return (
    <ul className={css.contactList}>
      {filteredContacts.map((item) => (
        <li key={item.id}>
          <Contact id={item.id} name={item.name} number={item.number} />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
