import { writeContacts } from '../utils/writeContacts.js';
import { readContacts } from '../utils/readContacts.js';

export const removeLastContact = async () => {
  const allContacts = await readContacts();

  if (allContacts.length === 0) {
    console.log('No contacts to remove.');
    return;
  }
  allContacts.pop();
  await writeContacts(allContacts);
};

removeLastContact();
