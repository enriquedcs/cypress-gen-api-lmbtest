
export default class MainMethods {

    static GetMethod(url){
        cy.request({
            method: 'GET',
            url: url,
            failOnStatusCode: false,
        }).as('details')

    }

    static PostMethod(url,body){
        cy.request({
            method: 'POST',
            url: url,
            failOnStatusCode: false,
            'auth': {
                'bearer': 'e2360bb230c2fc83af7451f8346d9fcdb699879e3a8f14462a2187f9d670675e'
            },
            body: body
        }).as('details')
    }

}