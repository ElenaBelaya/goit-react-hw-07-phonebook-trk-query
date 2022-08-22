import { DeleteButton } from './ContactItem.Styled';
import { useRemoveContactsMutation } from 'redux/contactsSlice';
import Notiflix from 'notiflix';

const ContactItem = contact => {
  const { id, name, phone } = contact.contact;
  const [removeContacts, resalt] = useRemoveContactsMutation();
  console.log(contact);
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
      {name}: {phone}
      <DeleteButton
        type="button"
        onClick={() => onDeleteContact(id)}
        disabled={resalt.isLoading}
      >
        Delete
      </DeleteButton>
    </>
  );
};

export default ContactItem;
