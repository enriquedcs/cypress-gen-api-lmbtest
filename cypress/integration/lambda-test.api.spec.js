import config from './config.json'
import MainMethod from '../builder/components/Mainmethods'
 
describe('API Testing LambdaTest ', function () {

    it('API - GET Console', () => {

        MainMethod.GetDelMethodLam(`${config.URLL}`+`${config.testId}`+'/console','GET')
        //Validate status code
        cy.get('@details').its('status').should('eq', 200)
        cy.get('@details').then((response) => {
            cy.log(JSON.stringify(response.body))
        })
    })

    it('API - GET Network', () => {

        MainMethod.GetDelMethodLam(`${config.URLL}`+`${config.testId}`+'/network','GET')
        //Validate status code
        cy.get('@details').its('status').should('eq', 200)
        cy.get('@details').then((response) => {
            cy.log(JSON.stringify(response.body))
        })
    })

    it.only('API - PATCH Build Name', () => {

        MainMethod.PatchMethodLam(`${config.URLL2}`+'8806675')
        //Validate status code
        cy.get('@details').its('status').should('eq', 200)
        cy.get('@details').then((response) => {
            cy.log(JSON.stringify(response.body))
        })
    })

    

})