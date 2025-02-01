describe('Formulário Cadastro', ()=> {
  beforeEach(() => {
    cy.visit('http://localhost:3000/');
  });

  it('Deve permitir um cadastro válido', () => {
    cy.getByData('botao-cadastro').click();
    cy.getByData('nome-input').type('Teste');
    cy.getByData('email-input').type('outroteste@teste.com');
    cy.getByData('senha-input').type('456789');
    cy.getByData('botao-enviar').click();
    cy.getByData('mensagem-sucesso').should('exist').and('have.text', 'Usuário cadastrado com sucesso!');

  });
});
