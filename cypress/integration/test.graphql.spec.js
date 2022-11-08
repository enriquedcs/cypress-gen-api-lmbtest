import config from './config.json'
 
describe('Graphql Testing ', function () {

    it('API - List all the users', () => {

        cy.request({
            method: 'POST',
            url: `${config.URL4}`,
            failOnStatusCode: false,
            header: {
                'Accept-Encoding': 'application/json', 
                'Content-Type' : 'application/json',
                'bearer': `${config.Bearer_Graph}`
            },
            body: { query: 'query{users {pageInfo {endCursor startCursor hasNextPage hasPreviousPage} totalCount nodes {id name email gender status}}}' }
        }).as('details')
        //Validate status code
        cy.get('@details').its('status').should('eq', 200)
        cy.get('@details').then((response) => {
            cy.log(JSON.stringify(response.body))
        })
    })



})