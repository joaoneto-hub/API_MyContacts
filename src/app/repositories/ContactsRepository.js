const { uuid } = require('uuidv4');

const contacts = [
  {
    id: uuid(),
    name: 'João Rodrigues',
    email: 'joaoteles8182@gmail.com',
    phone: '123456',
    category: uuid(),

  },
];

class ContactsRepository {
  findAll() {
    return new Promise((resolve) => {
      resolve(contacts);
    });
  }
}

module.exports = new ContactsRepository();
