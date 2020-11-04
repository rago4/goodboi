import { byTestId } from "../support/helpers"

const navLinks = [
  { title: "Home", url: "/" },
  { title: "Adoption", url: "/adoption" },
]

describe("Home", () => {
  it("should successfully load", () => {
    cy.visit("/")
  })

  it("should properly render navigation links", () => {
    cy.get(byTestId("home.nav-link")).each((element, index) => {
      cy.wrap(element)
        .should("contain", navLinks[index].title)
        .and("have.attr", "href", navLinks[index].url)
    })
  })

  it('should redirect to the adoption page on "Get started" button click', () => {
    cy.get("a")
      .contains(/get started/i)
      .click()
    cy.location().should(({ pathname }) => {
      expect(pathname).to.eq(navLinks[1].url)
    })
  })
})
