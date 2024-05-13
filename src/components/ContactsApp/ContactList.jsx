import Contact from "./Contact";
import s from "./ContactsApp.module.css";
import { useSelector } from "react-redux";
import { selectContacts, selectNameFilter } from "../../redux/selectors";
import { filterList } from "../../helpers/filterList";

const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectNameFilter);

  const filteredContacts = filterList(contacts, filter);
  return (
    <div>
      <ul className={s.list}>
        {filteredContacts.map((item) => {
          return <Contact key={item.id} item={item} />;
        })}
      </ul>
    </div>
  );
};

export default ContactList;
