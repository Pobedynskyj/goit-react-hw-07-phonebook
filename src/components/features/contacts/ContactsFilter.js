import { useDispatch, useSelector } from 'react-redux';
import { filterContact } from '../redux/actions';

import s from './Contacts.module.css';

export const ContactsFilter = () => {
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();

  const onFilterChanged = filter => {
    dispatch(filterContact(filter));
  };

  return (
    <>
      <input
        className={s.filterInput}
        placeholder="Search contact"
        onChange={e => onFilterChanged(e.target.value)}
        value={filter}
      />
    </>
  );
};
