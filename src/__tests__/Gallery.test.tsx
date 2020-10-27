import React from "react"
import { fireEvent } from "@testing-library/react"
import { render } from "../utils/tests"
import { Gallery } from "../components/Gallery"

const getImage = (src: string) => ({
  imageFile: {
    childImageSharp: {
      fluid: {
        aspectRatio: 1,
        src,
        srcSet: "",
        sizes: "",
      },
    },
  },
})

const props = {
  images: [getImage("/path/to/image1.jpg"), getImage("/path/to/image2.jpg")],
}

const testIds = {
  buttonPrevious: "gallery.button-previous",
  buttonNext: "gallery.button-next",
  buttonClose: "gallery.button-close",
  imageWrapper: "gallery.image-wrapper",
  selectedImage: "gallery.selected-image",
}

describe("Gallery", () => {
  it("should properly render images", () => {
    const { getAllByTestId } = render(<Gallery {...props} />)
    const wrappers = getAllByTestId(testIds.imageWrapper)
    const sources = wrappers.map(wrapper =>
      wrapper.children[0].querySelector("img")?.getAttribute("src")
    )

    expect(wrappers).toHaveLength(2)
    expect(sources).toEqual(["/path/to/image1.jpg", "/path/to/image2.jpg"])
  })

  it("should properly open image in overlay", () => {
    const { getAllByTestId, getByTestId } = render(<Gallery {...props} />)
    const wrappers = getAllByTestId(testIds.imageWrapper)
    fireEvent.click(wrappers[1])
    const selectedImage = getByTestId(testIds.selectedImage)

    expect(selectedImage).toBeInTheDocument()
  })

  it("should properly handle navigation with buttons", () => {
    const { getAllByTestId, getByTestId } = render(<Gallery {...props} />)
    const wrappers = getAllByTestId(testIds.imageWrapper)
    fireEvent.click(wrappers[0])
    const selectedImage = getByTestId(testIds.selectedImage)
    const img = selectedImage.querySelector("img")
    const buttonPrevious = getByTestId(testIds.buttonPrevious)
    const buttonNext = getByTestId(testIds.buttonNext)
    const buttonClose = getByTestId(testIds.buttonClose)

    expect(img).toHaveAttribute("src", "/path/to/image1.jpg")
    expect(buttonPrevious).toHaveAttribute("disabled")

    fireEvent.click(buttonNext)

    expect(img).toHaveAttribute("src", "/path/to/image2.jpg")
    expect(buttonPrevious).not.toHaveAttribute("disabled")
    expect(buttonNext).toHaveAttribute("disabled")

    fireEvent.click(buttonClose)

    expect(selectedImage).not.toBeInTheDocument()
  })

  // TODO: test keyboard navigation
})
