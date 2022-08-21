class ContactController {
  index(request, response) {
    // Listar Todos os registros
    response.send('Send from Contact Controllers');
  }

  show() {
    // Obter um registro
  }

  store() {
    // Criar um registro
  }

  update() {
    // Editar um registro
  }

  delete() {
    // Deletar um registro
  }
}

module.exports = new ContactController();
