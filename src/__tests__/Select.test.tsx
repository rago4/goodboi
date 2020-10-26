import React from "react"
import { fireEvent } from "@testing-library/react"
import { render } from "../utils/tests"
import { Select } from "../components/Select"

const props = {
  label: "Lorem ipsum",
  placeholder: "This is select placeholder",
  items: ["Apples", "Oranges", "Bananas"],
  onSelect: jest.fn(),
}

const testIds = {
  label: "select.label",
  input: "select.input",
  dropdown: "select.dropdown",
  option: "select.option",
}

describe("Select", () => {
  it("should properly apply label value", () => {
    const { getByTestId } = render(<Select {...props} />)

    expect(getByTestId(testIds.label)).toHaveTextContent("Lorem ipsum")
  })

  it("should properly apply placeholder value", () => {
    const { getByTestId } = render(<Select {...props} />)

    expect(getByTestId(testIds.input).getAttribute("placeholder")).toBe(
      "This is select placeholder"
    )
  })

  it("should properly handle dropdown open", () => {
    const { getByTestId, queryByTestId } = render(<Select {...props} />)

    expect(queryByTestId(testIds.dropdown)).not.toBeInTheDocument()
    fireEvent.click(getByTestId(testIds.input))
    expect(getByTestId(testIds.dropdown)).toBeInTheDocument()
  })

  it("should properly render all items", () => {
    const { getByTestId, getAllByTestId } = render(<Select {...props} />)
    fireEvent.click(getByTestId(testIds.input))
    const options = getAllByTestId(testIds.option)
    const contents = options.map(button => button.textContent)

    expect(contents).toEqual(["Select", "Apples", "Oranges", "Bananas"])
  })

  it("should properly handle initial selected item", () => {
    const { getByTestId } = render(<Select {...props} selected="Apples" />)

    expect(getByTestId(testIds.input)).toHaveValue("Apples")
  })

  // TODO: add test cases for item click
})
