class SelectablePage {

    static visit() {
        return cy.visit("https://demoqa.com/selectable")
    }

    static get gridTab() {
        return cy.get("a#demo-tab-grid")
    }

    static get gridRow1() {
        return cy.get("div#row1")
    }

    static get gridRow2() {
        return cy.get("div#row2")
    }

    static get gridRow3() {
        return cy.get("div#row3")
    }

    
}

export default SelectablePage