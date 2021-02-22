describe('Test Access Form Bimbingan Akademik', () =>{

  it('Arrangement - Login To Websites', () => {
    cy.visit('/login');

    cy.xpath('//*[@id="login"]/div[1]/div/div[3]/div[1]/div[2]/input')
      .type(Cypress.env('username'))
      .xpath('//*[@id="login"]/div[1]/div/div[3]/div[2]/div[2]/input')
      .type(Cypress.env('password'))
      .xpath('//*[@id="login"]/div[1]/div/div[4]/button')
      .click();
  })

  it('Go to Bimbingan Akademik page', () => {
    cy.xpath('//*[@id="Sidebar"]/div/div[2]/div[2]/div')
      .click()
      .location('pathname', {timeout: 10000}).should('eq', '/mahasiswa/bimbingan/akademik');
  })

  it('Crate new Bimbingan', () => {
    cy.xpath('//*[@id="BimbinganAkademik"]/div[1]/button')
      .click();
  })

  it('Cleanup - Logout', () => {
    cy.xpath('//*[@id="Sidebar"]/div/div[3]/div/div')
      .click();
  })
})