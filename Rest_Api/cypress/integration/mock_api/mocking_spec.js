describe("Api Mocking", () => {
    it ("CHange dropdown", () => {
        cy.visit("https://www.cars24.com/")

        cy.server()
        cy.route('GET','**/v3/autocomplete/?source=1,2,3,5,7,6&value=hyndai&size=10&showFeatured=true&applicationId=2','fixture:suggestions.json')

        cy.get('input[id="carList"]')
        .should('have.attr','placeholder','Search your car here,')
        .type('bajaj')

        cy.get('a[optionname="Creta2019"]')
        .should('contain','Hyndai Creta 2019')
        .click()

        cy.fixture('city.json').as('city')
        cy.route('POST','**/v3/generatepq/','@city').as('car')

        cy.get('.location-selection.vertical-top')
        .children()
        .eq(1)
        .should('have.attr','data-lab','Hyundai_Creta 2019_')
        .click()

        cy.get('select[data-placeholder="Select city"]')
        .select('Delhi',{force:true})
    })
})