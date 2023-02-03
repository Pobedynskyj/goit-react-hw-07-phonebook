import { useDispatch } from 'react-redux';

export const CreateContacts = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.contacts);
};
