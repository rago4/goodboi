import React from "react"
import {
  Button,
  Container,
  CurrentImage,
  Dashboard,
  ImageWrapper,
  Image,
  Overlay,
} from "./styles"

interface Image {
  src: string
  alt: string
}

interface Props {
  images: Image[]
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
          <CurrentImage
            src={images[currentImageIndex].src}
            alt={images[currentImageIndex].alt}
          />
        </Overlay>
      )}
      <Container>
        {images.map((image, index) => (
          <ImageWrapper
            key={`gallery-image-${index}`}
            onClick={() => handleImageClick(index)}
          >
            <Image src={image.src} alt={image.alt} />
          </ImageWrapper>
        ))}
      </Container>
    </>
  )
}
