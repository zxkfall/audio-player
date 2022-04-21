describe('Mini Layout', function () {

    it('should render min layout', function () {
        cy.visit('/')
        cy.get('.audio-player-mini').should('exist')
        cy.get('button[class=audio-player-mini-sound]').should('exist')
        cy.get('input[class=audio-player-mini-voice]').should('exist')
        cy.get('button[class=audio-player-mini-pre]').should('exist')
        cy.get('button[class=audio-player-mini-play]').should('exist')
        cy.get('button[class=audio-player-mini-next]').should('exist')
        cy.get('input[class=audio-player-mini-progress]').should('exist')
    });
});
