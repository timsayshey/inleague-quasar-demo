import * as ctx from '../../../../quasar.conf.js';

describe('Landing', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('missing/invalid username', () => {
    cy.get('.username input').type('1');

    cy.get('.submit').click();

    cy.get('.q-notification__message', { timeout: 10000 }).should('be.visible');
  });

  it('missing/invlaid password', () => {});

  it('no connection', () => {});

  it('valid submission but an unsuccessful login.', () => {});
});

// describe('Home page tests', () => {
//   beforeEach(() => {
//     cy.visit('/');
//   });
//   it('has pretty background', () => {
//     cy.get('.landing-wrapper')
//       .should('have.css', 'background').and('match', /(".+(\/img\/background).+\.png)/);
//   });
//   it('has pretty logo', () => {
//     cy.get('.landing-wrapper img')
//       .should('have.class', 'logo-main')
//       .and('have.attr', 'src')
//       .and('match', /^(data:image\/svg\+xml).+/);
//   });
//   it('has very important information', () => {
//     cy.get('.instruction-wrapper')
//       .should('contain', 'SETUP INSTRUCTIONS')
//       .and('contain', 'Configure Authentication')
//       .and('contain', 'Database Configuration and CRUD operations')
//       .and('contain', 'Continuous Integration & Continuous Deployment CI/CD');
//   });
// });
