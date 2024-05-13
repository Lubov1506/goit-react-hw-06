import s from "./ContactsApp.module.css";
import ContactForm from "./ContactForm";
import ContactList from "./ContactList";
import SearchBox from "./SearchBox";

const ContactsApp = () => {


  return (
    <div className={s.container}>
      <h1>Phonebook</h1>
      <ContactForm  />
      <SearchBox  />
      <ContactList />
    </div>
  );
};

export default ContactsApp;
