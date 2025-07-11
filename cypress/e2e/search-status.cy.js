describe('Search Event By Status Tests', () => {
    it('should load the event list based on selected status successfully', () => {
        cy.visit('http://localhost:3000/');
        cy.get('.menu button').click();
        cy.contains('Live').click();
        cy.get('.event-list div.event-card').should('have.length', 18);
    });
});
