import { getAllContacts } from './getAllContacts.js';

export const countContacts = async () => {
  const contacts = await getAllContacts();
  const count = contacts.length;
  return count;
};

console.log(await countContacts());
