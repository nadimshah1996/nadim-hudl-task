describe('Navigation', function () {
    context('Navigating from page to page', () => {
      it(`Navigating to watch now page`, () => {
        cy.visit('https://www.hudl.com/en_gb/');
        cy.get('button.onetrust-close-btn-handler[aria-label="Close"]').click();
        cy.get('a.mainnav__item.mainnav__item--expandable[data-qa-id="login-select"]').click();
        cy.get('a[href="https://www.hudl.com/login?utm_content=hudl_primary&utm_source=www.hudl.com&utm_medium=login_dropdown&utm_campaign=platform_logins"].subnav__item.subnavitem.subnavitem--icon[data-qa-id="login-hudl"]').click();
        cy.get('input#email').click().type('nadimshah1996@gmail.com');
        cy.get('p#username-helptext.uni-text.uni-text--micro.uni-input-help-text').should('have.text', 'If you are a Hudl user, log in with your Hudl account here.');
        cy.get('input#password').click().type('shah-2468');  
        cy.get('button#logIn.uni-button.uni-button--primary.uni-button--medium').click();
        cy.url().should('eq', 'https://www.hudl.com/home');
        cy.get('a.hui-globalnav__item.hui-globalnav__explore[data-qa-id="webnav-globalnav-watchnow"]').click();
        cy.get('img#home-page-its-on-image[data-qa-id="headline-image"][src="https://assets.hudl.com/40b5adf/static/media/HomepageHeadline.40b5adf.png"][alt="it\'s on header text with hudl logo"]').should('be.visible');
      });
    });
  });