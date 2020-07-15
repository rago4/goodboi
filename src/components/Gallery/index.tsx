import React from "react"
import Img, { FluidObject } from "gatsby-image"
import {
  Button,
  Container,
  Dashboard,
  ImageWrapper,
  Overlay,
  styles as s,
} from "./styles"

interface Props {
  images: {
    imageFile: {
      childImageSharp: {
        fluid: FluidObject
      }
    }
  }[]
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
        <Overlay>
          <Dashboard>
            <Button
              onClick={handlePreviousClick}
              disabled={currentImageIndex === 0}
            >
              &lt;
            </Button>
            <Button
              onClick={handleNextClick}
              disabled={currentImageIndex === images.length - 1}
            >
              &gt;
            </Button>
            <Button onClick={() => setOverlayVisibility(false)}>&times;</Button>
          </Dashboard>
          <Img
            fluid={images[currentImageIndex].imageFile.childImageSharp.fluid}
            style={s.currentImgContainer}
            imgStyle={s.currentImg}
          />
        </Overlay>
      )}
      <Container>
        {images.map(({ imageFile: { childImageSharp: { fluid } } }, index) => (
          <ImageWrapper
            key={`gallery-image-${index}`}
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
