describe('Load websites', () => {
    it('successfully loads', () => {
      cy.visit('/');

      cy.xpath('//*[@id="login"]/div[1]/div/div[3]/div[1]/div[2]/input').type('150708428');

      cy.xpath('//*[@id="login"]/div[1]/div/div[3]/div[2]/div[2]/input').type('150708428');

      cy.xpath('//*[@id="login"]/div[1]/div/div[4]/button').click();

      cy.title().should('eq', 'Sistem Bimbingan UAJY');
    })
  })

  