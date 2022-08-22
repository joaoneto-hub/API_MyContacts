const { v4 } = require('uuid');

let contacts = [
  {
    id: v4(),
    name: 'João Rodrigues',
    email: 'joaoteles8182@gmail.com',
    phone: '123456',
    category: v4(),

  },
  {
    id: v4(),
    name: 'Rafaela Rodrigues',
    email: 'Rafaelateles8182@gmail.com',
    phone: '6543456',
    category: v4(),

  },
];

class ContactsRepository {
  findAll() {
    return new Promise((resolve) => {
      resolve(contacts);
    });
  }

  findById(id) {
    return new Promise((resolve) => {
      resolve(contacts.find((contact) => contact.id === id));
    });
  }

  delete(id) {
    return new Promise((resolve) => {
      contacts = contacts.filter((contact) => contact.id !== id);
      resolve();
    });
  }
}

module.exports = new ContactsRepository();
