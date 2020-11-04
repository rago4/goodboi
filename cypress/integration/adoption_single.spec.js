import { byTestId } from "../support/helpers"

describe("Adoption single", () => {
  it("should successfully load", () => {
    cy.visit("/adoption/1")
  })

  it("should properly open and close overlay", () => {
    cy.get(byTestId("gallery.image-wrapper")).first().click()
    cy.get(byTestId("gallery.overlay"))
    cy.get(byTestId("gallery.button-close")).click()
    cy.get(byTestId("gallery.overlay")).should("not.exist")
  })

  it('should redirect to the "Adoption" page on "Back" click', () => {
    cy.get("a").contains(/back/i).click()
    cy.location(({ pathname }) => {
      expect(pathname).to.eq("/adoption")
    })
  })
})
