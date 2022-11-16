import config from '../../integration/config.json'

export default class MainMethods {

    static GetDelMethod(url,method){
        cy.request({
            method: method,
            url: url,
            failOnStatusCode: false,
            'auth': {
                'bearer': `${config.Bearer_Rest}`
            },
        }).as('details')

    }

    static GetDelMethodLam(url,method){
        cy.request({
            method: method,
            url: url,
            failOnStatusCode: false,
            'headers' : {
                'accept': 'application/octet-stream',
                'content-type': 'application/x-gzip',
                'Authorization': "Basic "
            },

        }).as('details')

    }

    static PostMethod(url,body){
        cy.request({
            method: 'POST',
            url: url,
            failOnStatusCode: false,
            'auth': {
                'bearer': `${config.Bearer_Rest}`
            },
            body: body
        }).as('details')
    }

    static PatchMethodLam(url){
        cy.request({
            method: 'PATCH',
            url: url,
            failOnStatusCode: false,
            'headers' : {
                'accept': 'application/json',
                'Authorization': "Basic "
            },
            body: { 'name': 'cypress - api mod2 cypress' }
              
        }).as('details')
    }

}