import { ADD, DELETE, CHANGE_FILTER } from './contacts-types';
import { v4 as uuidv4 } from 'uuid';

const addContacts = ({ name, number }) => ({
  type: ADD,
  payload: {
    id: uuidv4(),
    name,
    number,
  },
});

const deleteContacts = contactId => ({
  type: DELETE,
  payload: contactId,
});

const changeFilter = value => ({
  type: CHANGE_FILTER,
  payload: value,
});

const contactsActions = { addContacts, deleteContacts, changeFilter };

export default contactsActions;
