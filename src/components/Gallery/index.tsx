import React from "react"
import Img from "gatsby-image"
import {
  Button,
  Container,
  Dashboard,
  ImageWrapper,
  Overlay,
  SelectedImage,
  styles as s,
} from "./styles"
import { FluidImage } from "../../utils"

interface Props {
  images: FluidImage[]
}

export const Gallery: React.FC<Props> = ({ images }) => {
  const [isOverlayVisible, setOverlayVisibility] = React.useState(false)
  const [currentImageIndex, setCurrentImageIndex] = React.useState(0)

  const handleNextClick = () => {
    setCurrentImageIndex(Math.min(currentImageIndex + 1, images.length - 1))
  }

  const handlePreviousClick = () => {
    setCurrentImageIndex(Math.max(currentImageIndex - 1, 0))
  }

  const handleImageClick = (index: number) => {
    setCurrentImageIndex(index)
    setOverlayVisibility(true)
  }

  const handleKeyDown = ({ key }: KeyboardEvent) => {
    switch (key) {
      case "Escape":
        setOverlayVisibility(false)
        break
      case "ArrowLeft":
        handlePreviousClick()
        break
      case "ArrowRight":
        handleNextClick()
        break
      default:
        break
    }
  }

  React.useEffect(() => {
    if (isOverlayVisible) {
      document.addEventListener("keydown", handleKeyDown)
    }

    return () => document.removeEventListener("keydown", handleKeyDown)
  }, [isOverlayVisible, handleKeyDown])

  return (
    <>
      {isOverlayVisible && (
        <Overlay data-testid="gallery.overlay">
          <Dashboard>
            <Button
              data-testid="gallery.button-previous"
              onClick={handlePreviousClick}
              disabled={currentImageIndex === 0}
            >
              &lt;
            </Button>
            <Button
              data-testid="gallery.button-next"
              onClick={handleNextClick}
              disabled={currentImageIndex === images.length - 1}
            >
              &gt;
            </Button>
            <Button
              data-testid="gallery.button-close"
              onClick={() => setOverlayVisibility(false)}
            >
              &times;
            </Button>
          </Dashboard>
          <SelectedImage data-testid="gallery.selected-image">
            <Img
              fluid={images[currentImageIndex].imageFile.childImageSharp.fluid}
              style={s.currentImgWrapper}
              imgStyle={s.currentImg}
            />
          </SelectedImage>
        </Overlay>
      )}
      <Container>
        {images.map(({ imageFile: { childImageSharp: { fluid } } }, index) => (
          <ImageWrapper
            key={`gallery-image-${index}`}
            data-testid="gallery.image-wrapper"
            onClick={() => handleImageClick(index)}
          >
            <Img
              fluid={fluid}
              sizes={{
                ...fluid,
                aspectRatio: 1,
              }}
            />
          </ImageWrapper>
        ))}
      </Container>
    </>
  )
}
