describe('Test Login Sites', () => {

  it('access login page', () => {
    cy.visit('/login');
  })

  it('Input username', () => {
    cy.xpath('//*[@id="login"]/div[1]/div/div[3]/div[1]/div[2]/input')
      .type(Cypress.env('username'))
      .should('have.value', Cypress.env('username'));
  })

  it('Input password', () => {
    cy.xpath('//*[@id="login"]/div[1]/div/div[3]/div[2]/div[2]/input')
      .type(Cypress.env('password'))
      .should('have.value', Cypress.env('password'));
  })

  it('Click login button', () => {
    cy.xpath('//*[@id="login"]/div[1]/div/div[4]/button')
      .click();
  })

  it('Assertion - Check path and metadata', () => {
    cy.location('pathname', {timeout: 10000}).should('eq', '/');
    
    cy.document()
      .get('head meta[name="description"]')
      .should('have.attr', 'content', 'Sistem administrasi fakultas meliputi bimbingan, pendaftaran PPTA, pendaftaran KP/Magang, dan pendaftaran tugas akhir serta sistem monitoring bagi orang tua mahasiswa')
  })

  it('Cleanup - Logout', () => {
    cy.xpath('//*[@id="Sidebar"]/div/div[3]/div/div')
      .click();
  })
})

  