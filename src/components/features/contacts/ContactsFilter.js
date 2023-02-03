import { setFilter } from 'components/redux/Filter.slice';
import { useDispatch, useSelector } from 'react-redux';

export const ContactsFilter = () => {
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();

  const onFilterChanged = filter => {
    dispatch(setFilter(filter));
  };

  return (
    <>
      <input onChange={e => onFilterChanged(e.target.value)} value={filter} />
    </>
  );
};
