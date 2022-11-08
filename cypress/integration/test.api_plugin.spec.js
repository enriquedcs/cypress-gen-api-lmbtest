import config from './config.json'
import { faker } from '@faker-js/faker'
 
describe('API Testing ', function () {
    let att1   

    it('API - GET details', () => {
        cy.api({
            method: 'GET',
            url: `${config.URL}`,
        }).as('details')
        //Validate status code
        cy.get('@details').its('status').should('eq', 200)
        cy.get('@details').then((response) => {
            cy.log(JSON.stringify(response.body))
        })
    })

    it('API - POST Request', () => {
        cy.api({
            method: 'POST',
            url: `${config.URL}`,
            failOnStatusCode: false,
            'auth': {
                'bearer': `${config.Bearer_Rest}`
            },
            body: {'name':faker.internet.userName(), 
            'gender':'male', 
            'email':faker.internet.email(), 
            'status':'active'}
        }).as('details')
        //Validate status code
        cy.get('@details').its('status').should('eq', 201)
        cy.get('@details').then((response) => {
            let res = response.body
            att1 = res.id
            cy.log(att1)
        })
        cy.get('@details').then((response) => {
            cy.log(JSON.stringify(response.body))
        })
            
    })

    it('API - PUT Request', () => {
        cy.api({
            method: 'PUT',
            url: `${config.URL}`+att1,
            failOnStatusCode: false,
            'auth': {
                'bearer': `${config.Bearer_Rest}`
            },
            body: {'name':faker.internet.userName(), 
            'gender':'female', 
            'email':faker.internet.email(), 
            'status':'active'}
        }).as('details')
        //Validate status code
        cy.get('@details').its('status').should('eq', 200)
        cy.get('@details').then((response) => {
            cy.log(JSON.stringify(response.body))
        })
            
    })

    it('API - DELETE Request', () => {
        cy.api({
            method: 'DELETE',
            url: `${config.URL}`+att1,
            failOnStatusCode: false,
            'auth': {
                'bearer': `${config.Bearer_Rest}`
            },
        }).as('details')
        //Validate response code
        cy.get('@details').its('status').should('eq', 204)
        cy.get('@details').then((response) => {
            cy.log(JSON.stringify(response.body))
        })
        
            
    })

})