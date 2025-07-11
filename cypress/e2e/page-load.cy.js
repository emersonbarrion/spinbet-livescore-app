describe('Page Load Tests', () => {
    it('should load the page of event list successfully', () => {
        cy.visit('http://localhost:3000/');
        cy.get('.event-list').should('exist');
        cy.get('.event-list div.event-card').should('have.length.greaterThan', 0);
    });
});
