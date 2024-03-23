import SelectablePage from "../pageObjects/selectable.page";

describe('Interactions', () => { 

    context("Selectable", () => {
        beforeEach( () => {
            SelectablePage.visit();
        })
        
        it("Select grid numbers", () => {
            //open grid tab
            SelectablePage.gridTab.click();
            SelectablePage.gridTab.should('have.class', 'nav-item nav-link active')
            //select numbers and validate selection
           
            SelectablePage.gridRow1.contains("Two").click();
            SelectablePage.gridRow2.contains("Four").click();
            SelectablePage.gridRow2.contains("Six").click();
            SelectablePage.gridRow3.contains("Eight").click();

            SelectablePage.gridRow1.contains("Two").should("have.class", "list-group-item active")
            SelectablePage.gridRow2.contains("Four").should("have.class", "list-group-item active")
            SelectablePage.gridRow2.contains("Six").should("have.class", "list-group-item active")
            SelectablePage.gridRow3.contains("Eight").should("have.class", "list-group-item active")
            SelectablePage.gridRow1.contains("One").should("not.have.class", "list-group-item active")
            SelectablePage.gridRow1.contains("Three").should("not.have.class", "list-group-item active")
            SelectablePage.gridRow2.contains("Five").should("not.have.class", "list-group-item active")
            SelectablePage.gridRow3.contains("Seven").should("not.have.class", "list-group-item active")
            SelectablePage.gridRow3.contains("Nine").should("not.have.class", "list-group-item active")
        })
    })
 })