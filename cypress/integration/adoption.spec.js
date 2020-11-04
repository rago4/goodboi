import { byTestId } from "../support/helpers"

describe("Adoption", () => {
  it("should successfully load", () => {
    cy.visit("/adoption")
  })

  it('should properly filter results by "Size"', () => {
    cy.get(byTestId("select.input")).eq(0).click()
    cy.get("button").contains(/small/i).click()
    cy.get("button")
      .contains(/submit/i)
      .click()
    cy.get("span[class^=Tag]")
      .contains(/medium|big/i)
      .should("not.exist")
  })

  it('should dynamically redirect on "Read more" click', () => {
    cy.get("a")
      .contains(/read more/i)
      .first()
      .click()
    cy.get("h2").contains(/hello, my name is eddie/i)
  })
})
