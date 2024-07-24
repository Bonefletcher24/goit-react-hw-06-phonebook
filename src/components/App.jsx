import React from 'react';
import ContactForm from './ContactForm/ContactForm.module.css';
import ContactList from './ContactList/ContactList.module.css';
import Filter from './Filter/Filter.module.css';
import styles from '../components/App.module.css';

const App = () => {
  return (
    <div className={styles.container}>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
};

export default App;
