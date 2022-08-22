import { DeleteButton, Li } from './ContactList.Styled';
import { useSelector } from 'react-redux';
import Notiflix from 'notiflix';
import {
  useGetContactsQuery,
  useRemoveContactsMutation,
} from 'redux/contactsSlice';

const ContactList = () => {
  const value = useSelector(state => state.filter);
  const { data: contacts, error, isLoading } = useGetContactsQuery();
  const [removeContacts] = useRemoveContactsMutation();

  const getVisibleContacts = () => {
    const notmalisedFilter = value.toLowerCase();
    const visibleContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(notmalisedFilter)
    );
    return visibleContacts;
  };

  const onDeleteContact = async id => {
    try {
      await removeContacts(id);
      Notiflix.Notify.success('Сontact removed from list');
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      {error ? <p>Something went wrong</p> : null}
      {isLoading ? (
        <b>Loadind...</b>
      ) : (
        <ul>
          {getVisibleContacts().map(({ id, name, phone }) => (
            <Li key={id}>
              {name}: {phone}
              <DeleteButton type="button" onClick={() => onDeleteContact(id)}>
                Delete
              </DeleteButton>
            </Li>
          ))}
        </ul>
      )}
    </>
  );
};

export default ContactList;
