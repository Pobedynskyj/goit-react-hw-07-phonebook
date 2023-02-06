export const selectFilteredContact = state => {
  console.log(state);
  return state.contacts.filter(contact => {
    return contact.name.toLowerCase().includes(state.filter.toLowerCase());
  });
};
