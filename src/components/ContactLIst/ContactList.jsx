import css from './Contact.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts, selectFilter } from 'redux/selectors';
import { removeContact } from 'redux/contactsStorageReducer';

export const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);

  const dispatch = useDispatch();

  const onRemoveContact = contactId => dispatch(removeContact(contactId));

  const getFilteredContacts = () => {
    return contacts.filter(
      contact =>
        contact.name.toLowerCase().includes(filter.toLowerCase()) ||
        contact.number.toLowerCase().includes(filter.toLowerCase())
    );
  };

  return (
    <ul className={css.list}>
      {getFilteredContacts().map(({ id, name, number }) => {
        return (
          <li className={css.items} key={id}>
            <p>{name} </p>
            <p>: {number}</p>
            <button type="button" onClick={() => onRemoveContact(id)}>
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};