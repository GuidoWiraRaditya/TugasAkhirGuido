describe('Login to websites', () => {

    it('access login page', () => {
      cy.visit('/login');
    })

    it('Input username', () => {
      cy.xpath('//*[@id="login"]/div[1]/div/div[3]/div[1]/div[2]/input')
        .type('150708428')
        .should('have.value', '150708428');
    })

    it('Input password', () => {
      cy.xpath('//*[@id="login"]/div[1]/div/div[3]/div[2]/div[2]/input')
        .type('150708428')
        .should('have.value', '150708428');
    })

    it('Click login button', () => {
      cy.xpath('//*[@id="login"]/div[1]/div/div[4]/button')
        .click();
    })

    it('Assertion', () => {
      cy.location('pathname', {timeout: 10000}).should('eq', '/');
      
      cy.document()
        .get('head meta[name="description"]')
        .should('have.attr', 'content', 'Sistem administrasi fakultas meliputi bimbingan, pendaftaran PPTA, pendaftaran KP/Magang, dan pendaftaran tugas akhir serta sistem monitoring bagi orang tua mahasiswa')
    })
  })

  