import Contact from "./Contact/Contact";

import { selectContacts } from "../../redux/contacts/selectors";
import css from "./ContactList.module.css";
import { useSelector } from "react-redux";

const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const loading = useSelector((state) => state.contacts.loading);

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
