import React from "react"
import { graphql, PageProps } from "gatsby"
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
  Image,
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
        fixed: {
          src: string
        }
      }
    }
    name: string
    birthdate: string
    size: Values<typeof SIZE>
    place: Values<typeof PLACE>
    activity: Values<typeof ACTIVITY>
    description: string
    gallery: {
      formats: {
        thumbnail: {
          childImageSharp: {
            fixed: {
              src: string
            }
          }
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
      gallery,
    },
  } = data
  console.log(gallery)

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
              <Image src={avatar.childImageSharp.fixed.src} alt={name} />
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
              <Gallery images={[]} />
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
          fixed(height: 530, width: 530) {
            src
          }
        }
      }
      name
      birthdate(difference: "months")
      size
      place
      activity
      description
      gallery {
        formats {
          thumbnail {
            childImageSharp {
              fixed {
                src
              }
            }
          }
        }
      }
    }
  }
`

export default DogTemplate
