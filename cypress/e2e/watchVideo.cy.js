describe('Watch video', function () {
    context('Navigating to video', () => {
      it(`Navigating to video page`, () => {
        cy.visit('https://www.hudl.com/en_gb/');
        cy.get('button.onetrust-close-btn-handler[aria-label="Close"]').click();
        cy.get('a.mainnav__item.mainnav__item--expandable[data-qa-id="login-select"]').click();
        cy.get('a[href="https://www.hudl.com/login?utm_content=hudl_primary&utm_source=www.hudl.com&utm_medium=login_dropdown&utm_campaign=platform_logins"].subnav__item.subnavitem.subnavitem--icon[data-qa-id="login-hudl"]').click();
        cy.get('input#email').click().type('nadimshah1996@gmail.com');
        cy.get('p#username-helptext.uni-text.uni-text--micro.uni-input-help-text').should('have.text', 'If you are a Hudl user, log in with your Hudl account here.');
        cy.get('input#password').click().type('shah-2468');  
        cy.get('button#logIn.uni-button.uni-button--primary.uni-button--medium').click();
        cy.url().should('eq', 'https://www.hudl.com/home');
        cy.get('a.hui-primarynav__item[data-qa-id="webnav-primarynav-video"]').click({ force: true });
        cy.contains('span.library-checkbox__label', 'Goals').click();
        cy.get('span[data-qa-id="video-details-thumbnail"]').click();   
        cy.wait(5000); // 5000 milliseconds = 5 seconds
        // Click the "Exit" button
        cy.get('div[data-hudl-element="vpe-shared-main-exit-btn"]').click();
    });
});
});