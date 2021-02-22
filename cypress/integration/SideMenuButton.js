describe('Test Click All Side Menu Button', () => {

  it('Arrangement - Login To Websites', () => {
    cy.visit('/login');

    cy.xpath('//*[@id="login"]/div[1]/div/div[3]/div[1]/div[2]/input')
      .type(Cypress.env('username'))
      .xpath('//*[@id="login"]/div[1]/div/div[3]/div[2]/div[2]/input')
      .type(Cypress.env('password'))
      .xpath('//*[@id="login"]/div[1]/div/div[4]/button')
      .click();
  })

  it('Check button Bimbingan Akademik', () => {
    cy.xpath('//*[@id="Sidebar"]/div/div[2]/div[2]/div')
      .click()
      .location('pathname', {timeout: 10000}).should('eq', '/mahasiswa/bimbingan/akademik');
  })

  it('Check button Bimbingan KRS', () => {
    cy.xpath('//*[@id="Sidebar"]/div/div[2]/div[3]/div/p')
      .click()
      .location('pathname', {timeout: 10000}).should('eq', '/mahasiswa/bimbinganKRS')
  })

  it('Check button Data Perusahaan', () => {
    cy.xpath('//*[@id="Sidebar"]/div/div[2]/div[4]/div/p')
      .click()
      .location('pathname', {timeout: 10000}).should('eq', '/companies')
  })
  
  it('Check button KP/Magang', () => {
    cy.xpath('//*[@id="Sidebar"]/div/div[2]/div[5]/div')
      .click()
      .location('pathname', {timeout: 10000}).should('eq', '/internship')
  })

  it('Check button Bimbingan KP/Magang', () => {
    cy.xpath('//*[@id="Sidebar"]/div/div[2]/div[6]/div/p')
      .click()
      .location('pathname', {timeout: 10000}).should('eq', '/mahasiswa/bimbingan/kp-magang')
  })

  it('Check button Bimbingan PPTA', () => {
    cy.xpath('//*[@id="Sidebar"]/div/div[2]/div[7]/div/p')
      .click()
      .location('pathname', {timeout: 10000}).should('eq', '/mahasiswa/bimbingan/ppta')
  })

  it('Check button Tugas Akhir', () => {
    cy.xpath('//*[@id="Sidebar"]/div/div[2]/div[8]/div/p')
      .click()
      .location('pathname', {timeout: 10000}).should('eq', '/thesis/mahasiswa')
  })

  it('Check button Transkrip', () => {
    cy.xpath('//*[@id="Sidebar"]/div/div[2]/div[9]/div')
      .click()
      .location('pathname', {timeout: 10000}).should('eq', '/my-transcript/detail')
  })

  it('Check button Bimbingan Tugas Akhir - Dosen Pembimbing 1', () => {
    cy.xpath('//*[@id="Sidebar"]/div/div[2]/div[10]/div[2]/p')
      .click()
      .location('pathname', {timeout: 10000}).should('eq', '/mahasiswa/bimbingan/tugas-akhir-1')
  })

  it('Check button Bimbingan Tugas Akhir - Dosen Pembimbing 2', () => {
    cy.xpath('//*[@id="Sidebar"]/div/div[2]/div[10]/div[3]/p')
      .click()
      .location('pathname', {timeout: 10000}).should('eq', '/mahasiswa/bimbingan/tugas-akhir-2')
  })

  it('Check button Surat - Permohonan Data & Survei', () => {
    cy.xpath('//*[@id="Sidebar"]/div/div[2]/div[11]/div[2]/p')
      .click()
      .location('pathname', {timeout: 10000}).should('eq', '/letter/survey-permission')
  })

  it('Check button Surat - Izin Penyebaran Kuisioner TA', () => {
    cy.xpath('//*[@id="Sidebar"]/div/div[2]/div[11]/div[3]/p')
      .click()
      .location('pathname', {timeout: 10000}).should('eq', '/letter/thesis-questionnaire')
  })

  it('Check button Logout', () => {
    cy.xpath('//*[@id="Sidebar"]/div/div[3]/div/div')
      .click();
  })
})