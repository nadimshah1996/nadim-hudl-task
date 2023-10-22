describe('Forgot password', function () {
    context('User forgot password', () => {
      it(`Navigating to forgot password`, () => {
        cy.visit('https://www.hudl.com/en_gb/');
        cy.get('button.onetrust-close-btn-handler[aria-label="Close"]').click();
        cy.get('a.mainnav__item.mainnav__item--expandable[data-qa-id="login-select"]').click();
        cy.get('a[href="https://www.hudl.com/login?utm_content=hudl_primary&utm_source=www.hudl.com&utm_medium=login_dropdown&utm_campaign=platform_logins"].subnav__item.subnavitem.subnavitem--icon[data-qa-id="login-hudl"]').click();
        cy.get('a#forgot-password.uni-link.uni-link--default.form-link').click();       
        cy.get('p#email-reset-help.uni-text.uni-text--default').should('have.text',"We need to verify it's you. You'll receive an email with a verification code to reset your password.");
        cy.get('input#email-reset.uni-input.uni-form__item--large').click().type('nadimshah1996@gmail.com')
        cy.get('button#btn-reset.uni-button.uni-button--primary.uni-button--medium').click();
        cy.get('h2.headline.uni-headline--2.page-title').should('have.text', 'Check Your Email');
        cy.get('p.uni-text.uni-text--default#reset-confirmation-hudl-message').should('have.text', 'If you have an account, a reset password link has been sent to your email.');
    });
});
});