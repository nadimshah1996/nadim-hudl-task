describe('Successful message sent', function () {
    context('sending message', () => {
      it(`User navigates to message icon`, () => {
        cy.visit('https://www.hudl.com/en_gb/');
        cy.get('button.onetrust-close-btn-handler[aria-label="Close"]').click();
        cy.get('a.mainnav__item.mainnav__item--expandable[data-qa-id="login-select"]').click();
        cy.get('a[href="https://www.hudl.com/login?utm_content=hudl_primary&utm_source=www.hudl.com&utm_medium=login_dropdown&utm_campaign=platform_logins"].subnav__item.subnavitem.subnavitem--icon[data-qa-id="login-hudl"]').click();
        cy.get('input#email').click().type('nadimshah1996@gmail.com');
        cy.get('p#username-helptext.uni-text.uni-text--micro.uni-input-help-text').should('have.text', 'If you are a Hudl user, log in with your Hudl account here.');
        cy.get('input#password').click().type('shah-2468');  
        cy.get('button#logIn.uni-button.uni-button--primary.uni-button--medium').click();
        cy.url().should('eq', 'https://www.hudl.com/home');
        cy.get('#ssr-webnav > div > div.hui-webnav__grid.hui-navcontainer > nav.hui-webnav__grid-col--onewhole.hui-globalnav.uni-env--dark.uni-environment--dark > div:nth-child(4) > a.hui-globalnav__item.hui-globalnav__messages').click();
        cy.get('button.uni-btn--secondary.uni-btn--block').click();
        cy.get('div.msg-selectedrecipients-widget input[type="text"]').type('nadim');
        cy.contains('Nadim Shah (Coach)').click();
        cy.get('textarea.msg-compose-composer-text').type('This is a test');
        cy.get('button.uni-btn--primary.uni-btn--medium').click();
        //view details of who sent the message
        cy.get('button.uni-btn--secondary--minimal.uni-btn--medium:contains("Details")').click();
        cy.get('button.uni-btn--subtle--minimal.uni-btn--medium:contains("Back")').click();
        cy.get('button.uni-btn--subtle--minimal.uni-btn--medium:contains("Back")').click();
        cy.contains('div.msg-conversationitem-content', 'This is a test').should('have.length', 1).click();
      });
    });
  });