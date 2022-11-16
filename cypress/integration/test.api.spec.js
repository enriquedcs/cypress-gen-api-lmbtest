import config from './config.json'
import { faker } from '@faker-js/faker'
import MainMethod from '../builder/components/Mainmethods'
 
describe('API Testing ', function () {
    let att1
    let att2   

    it('API - GET details', () => {

        MainMethod.GetDelMethod(`${config.URL}`,'GET')
        //Validate status code
        cy.get('@details').its('status').should('eq', 200)
        cy.get('@details').then((response) => {
            cy.log(JSON.stringify(response.body))
        })
    })

    it('API - POST Request', () => {
        const body = {'name':faker.internet.userName(), 
                'gender':'male', 
                'email':faker.internet.email(), 
                'status':'active'}
        //Method
        MainMethod.PostMethod(`${config.URL}`, JSON.parse(JSON.stringify(body)))
        //Validate status code
        cy.get('@details').its('status').should('eq', 201)
        cy.get('@details').then((response) => {
            let res = response.body
            att1 = res.id
            att2 = res.user
            cy.log(att1)
        })
        cy.get('@details').then((response) => {
            cy.log(JSON.stringify(response.body))
        })
            
    })

    it('API Post - POST Request', () => {
        const body = {'name':att1,
                'user_id': att1, 
                'gender':'male', 
                'email':faker.internet.email(), 
                'title':'This is a title',
                'body': 'This is a message'}
        //Method
        MainMethod.PostMethod(`${config.URL2}`, JSON.parse(JSON.stringify(body)))
        //Validate status code
        cy.get('@details').its('status').should('eq', 201)
        cy.get('@details').then((response) => {
            let res = response.body
            let post_id = res.id
            cy.log(post_id)
        })
        cy.get('@details').then((response) => {
            cy.log(JSON.stringify(response.body))
        })
            
    })

    it('API - PUT Request', () => {
        cy.request({
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
        MainMethod.GetDelMethod(`${config.URL}`+att1,'DELETE')
        cy.get('@details').its('status').should('eq', 204)
        cy.get('@details').then((response) => {
            cy.log(JSON.stringify(response.body))
        })     
    })

})