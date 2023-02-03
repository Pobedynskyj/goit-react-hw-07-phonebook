import { selectFilteredContact } from 'components/redux/selectors';
import { useDispatch, useSelector } from 'react-redux';

export const ContactsList = () => {
  const dispatch = useDispatch();
  const filteredContacts = useSelector(selectFilteredContact);
};
