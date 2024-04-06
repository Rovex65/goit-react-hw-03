import Contact from "../contact/Contact";
import css from "./ContactList.module.css";

function ContactList({ contacts }) {
  return (
    <ul className={css.contactList}>
      {contacts.map(({ name, number, id }) => {
        return <Contact name={name} number={number} key={id} />;
      })}
    </ul>
  );
}

export default ContactList;
