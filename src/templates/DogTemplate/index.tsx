import React from "react"
import { graphql, PageProps } from "gatsby"
import Img, { FluidObject } from "gatsby-image"
import {
  Body,
  Button,
  Gallery,
  Heading,
  Layout,
  NavLink,
  Text,
  Traits,
} from "../../components"
import {
  Age,
  Container,
  ImageWrapper,
  LeftColumn,
  Navigation,
  RightColumn,
  Section,
  styles as s,
} from "./styles"
import { ROUTES, SIZE, PLACE, ACTIVITY } from "../../constants"
import { getAge, Values } from "../../utils"

interface Data {
  strapiDogs: {
    avatar: {
      childImageSharp: {
        fluid: FluidObject
      }
    }
    name: string
    birthdate: string
    size: Values<typeof SIZE>
    place: Values<typeof PLACE>
    activity: Values<typeof ACTIVITY>
    description: string
    carousel: {
      imageFile: {
        childImageSharp: {
          fluid: FluidObject
        }
      }
    }[]
  }
}

const { ADOPTION } = ROUTES

const DogTemplate: React.FC<PageProps<Data>> = ({ data }) => {
  const {
    strapiDogs: {
      avatar,
      name,
      birthdate: months,
      description,
      size,
      place,
      activity,
      carousel,
    },
  } = data

  return (
    <Layout>
      <Body css={s.body}>
        <Container>
          <Navigation>
            <Heading>goodboi</Heading>
            <NavLink to={ADOPTION}>Back</NavLink>
          </Navigation>

          <LeftColumn>
            <ImageWrapper>
              <Img
                fluid={avatar.childImageSharp.fluid}
                alt={name}
                imgStyle={s.avatar}
              />
            </ImageWrapper>
            <Button css={s.cta}>Adopt me</Button>
          </LeftColumn>

          <RightColumn>
            <Heading as="h2" css={s.name}>
              Hello, my name is {name}
            </Heading>
            <Age>I am about {getAge(Number(months))}</Age>
            <div>
              <Traits traits={{ size, place, activity }} />
            </div>
            <Section>
              <Heading as="h3" css={s.sectionHeading}>
                About me
              </Heading>
              <Text>{description}</Text>
            </Section>
            <Section>
              <Heading as="h3" css={s.sectionHeading}>
                Gallery
              </Heading>
              <Gallery images={carousel} />
            </Section>
          </RightColumn>
        </Container>
      </Body>
    </Layout>
  )
}

export const query = graphql`
  query DogTemplate($id: Int!) {
    strapiDogs(strapiId: { eq: $id }) {
      avatar {
        childImageSharp {
          fluid(maxWidth: 345, maxHeight: 345) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      name
      birthdate(difference: "months")
      size
      place
      activity
      description
      carousel {
        imageFile {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`

export default DogTemplate
