describe('Empty login', function () {
    context('Invalid login when no user/password is inputted', () => {
      it(`Navigating to the login page`, () => {
        cy.visit('https://www.hudl.com/en_gb/');
        cy.get('button.onetrust-close-btn-handler[aria-label="Close"]').click();
        cy.get('a.mainnav__item.mainnav__item--expandable[data-qa-id="login-select"]').click();
        cy.get('a[href="https://www.hudl.com/login?utm_content=hudl_primary&utm_source=www.hudl.com&utm_medium=login_dropdown&utm_campaign=platform_logins"].subnav__item.subnavitem.subnavitem--icon[data-qa-id="login-hudl"]').click();
        cy.get('button#logIn.uni-button.uni-button--primary.uni-button--medium').click();
        cy.get('p.error-message.uni-text.uni-text--small.uni-text--set-solid[data-qa-id="undefined-text"]').should('have.text', 'Please fill in all of the required fields');
    });
});
});