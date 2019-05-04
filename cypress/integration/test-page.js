describe('Test Page', () => {
  const waitTime = 1000;

  it('Visits home page', () => {
    cy.visit('http://localhost:3000/');
    cy.contains('h1', 'Welcome to My Website');
    cy.get('header .hero').find('a').should('be.visible');

    cy.wait(waitTime);
  });

  it('Click about page in navig', () => {
    cy.get('nav ul li:nth-child(2) a').click();
    cy.contains('h1', 'About Me');

    cy.wait(waitTime);
  });

  it('Click contact page in navig', () => {
    cy.get('nav ul li:nth-child(3) a').click();
    cy.contains('h1', 'Contact');

    cy.wait(waitTime);
  });

  it('Click imprint page in footer', () => {
    cy.get('footer ul li:nth-child(2) a').click();
    cy.contains('h1', 'Imprint');

    cy.wait(waitTime);
  });
  
  it('Click top in footer', () => {
    cy.get('footer ul li:nth-child(3) a').click();

    cy.wait(waitTime);
  });

  it('Click header and jump back to home page', () => {
    cy.get('header .hero a').click();
    cy.url().should('eq', 'http://localhost:3000/');

    cy.wait(waitTime);
  });

  it('Change viewport', () => {
    cy.viewport(500, 800);

    cy.wait(waitTime);

    cy.get('nav .ham').click();

    cy.wait(waitTime);

    cy.get('nav ul li:nth-child(2) a').click();

    cy.wait(waitTime);

    cy.contains('h1', 'About Me');

    cy.wait(waitTime);

    cy.viewport(1000, 660);
  });
});
