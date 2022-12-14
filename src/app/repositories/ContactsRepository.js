const { v4 } = require('uuid');

let contacts = [
  {
    id: v4(),
    name: 'João Rodrigues',
    email: 'joaoteles8182@gmail.com',
    phone: '123456',
    category_id: v4(),

  },
  {
    id: v4(),
    name: 'Rafaela Rodrigues',
    email: 'Rafaelateles8182@gmail.com',
    phone: '6543456',
    category_id: v4(),

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

  findByEmail(email) {
    return new Promise((resolve) => {
      resolve(contacts.find((contact) => contact.email === email));
    });
  }

  delete(id) {
    return new Promise((resolve) => {
      contacts = contacts.filter((contact) => contact.id !== id);
      resolve();
    });
  }

  create({
    name, email, phone, category_id,
  }) {
    return new Promise((resolve) => {
      const newContact = {
        id: v4(),
        name,
        email,
        phone,
        category_id,
      };
      contacts.push(newContact);
      resolve(newContact);
    });
  }
}
module.exports = new ContactsRepository();
