import { useSelector } from 'react-redux';
import { Li } from './ContactList.Styled';
import { useGetContactsQuery } from 'redux/contactsSlice';
import ContactItem from '../contactItem/ContactItem';

const ContactList = () => {
  const value = useSelector(state => state.filter);
  const { data: contacts, error, isLoading } = useGetContactsQuery();

  const getVisibleContacts = () => {
    const notmalisedFilter = value.toLowerCase();
    const visibleContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(notmalisedFilter)
    );
    return visibleContacts;
  };
  //console.log(getVisibleContacts());
  return (
    <>
      {error ? <p>Something went wrong</p> : null}
      {isLoading ? (
        <b>Loadind...</b>
      ) : (
        <ul>
          {getVisibleContacts().map(contact => (
            <Li key={contact.id}>
              <ContactItem contact={contact} />
            </Li>
          ))}
        </ul>
      )}
    </>
  );
};

export default ContactList;
