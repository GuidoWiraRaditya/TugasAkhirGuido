describe('Test Access Form Bimbingan Tugas Akhir', () => {

  it('Arrangement - Login To Websites', () => {
    cy.visit('/login');

    cy.xpath('//*[@id="login"]/div[1]/div/div[3]/div[1]/div[2]/input')
      .type(Cypress.env('username'))
      .xpath('//*[@id="login"]/div[1]/div/div[3]/div[2]/div[2]/input')
      .type(Cypress.env('password'))
      .xpath('//*[@id="login"]/div[1]/div/div[4]/button')
      .click();
  })

  it('Go to Dosen Pembimbing 1 page', () => {
    cy.xpath('//*[@id="Sidebar"]/div/div[2]/div[10]/div[2]/p')
      .click()
      .location('pathname', {timeout: 10000}).should('eq', '/mahasiswa/bimbingan/tugas-akhir-1')
  })

  it('Create new Bimbingan Dosen 1', () => {
    cy.xpath('//*[@id="BimbinganAkademik"]/div[1]/button')
      .click()
      .location('pathname', {timeout: 10000}).should('eq', '/form/bimbingan/tugas-akhir-1')
  })

  it('Go to Dosen Pembimbing 2 Page', () => {
    cy.xpath('//*[@id="Sidebar"]/div/div[2]/div[10]/div[3]/p')
      .click()
      .location('pathname', {timeout: 10000}).should('eq', '/mahasiswa/bimbingan/tugas-akhir-2')
  })

  it('Create new Bimbingan Dosen 2', () => {
    cy.xpath('//*[@id="BimbinganAkademik"]/div[1]/button')
      .click()
      .location('pathname', {timeout: 10000}).should('eq', '/form/bimbingan/tugas-akhir-2')
  })

  it('Cleanup - Logout', () => {
    cy.xpath('//*[@id="Sidebar"]/div/div[3]/div/div')
      .click();
  })
})