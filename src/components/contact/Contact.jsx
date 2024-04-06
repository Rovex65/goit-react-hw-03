import css from "./Contact.module.css";
import { FaUser, FaPhoneAlt } from "react-icons/fa";

function Contact({ name, number }) {
  return (
    <li className={css.contact}>
      <ul>
        <li>
          <FaUser size={16} /> <p>{name}</p>
        </li>
        <li>
          <FaPhoneAlt size={16} /> <p>{number}</p>
        </li>
      </ul>
      <button type="button">Delete</button>
    </li>
  );
}

export default Contact;
