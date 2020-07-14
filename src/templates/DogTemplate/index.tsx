import React from "react"
import { graphql, PageProps } from "gatsby"
import {
  Body,
  Button,
  Gallery,
  Heading,
  Layout,
  NavLink,
  Tag,
  Text,
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
import { ROUTES, THEME } from "../../constants"

interface Data {
  strapiDogs: {
    id: string
  }
}

const { ADOPTION } = ROUTES
const {
  PALETTE: { MALIBU, PINK_SALMON },
} = THEME

const DogTemplate: React.FC<PageProps<Data>> = ({ data }) => {
  const images = [
    { src: "https://placehold.it/300", alt: "" },
    { src: "https://placehold.it/300", alt: "" },
    { src: "https://placehold.it/300", alt: "" },
    { src: "https://placehold.it/300", alt: "" },
  ]
  console.log(data)

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
              <Image src="https://placehold.it/300" alt="" />
            </ImageWrapper>
            <Button css={s.cta}>Adopt me</Button>
          </LeftColumn>

          <RightColumn>
            <Heading as="h2" css={s.name}>
              Hello, my name is George
            </Heading>
            <Age>I am about 4 years old</Age>
            <div>
              <Tag css={s.tag} background={MALIBU}>
                Medium
              </Tag>
              <Tag css={s.tag}>Flat</Tag>
              <Tag css={s.tag} background={PINK_SALMON}>
                Active
              </Tag>
            </div>
            <Section>
              <Heading as="h3" css={s.sectionHeading}>
                About me
              </Heading>
              <Text>
                Nunc hendrerit ex augue, vel imperdiet turpis posuere eget.
                Aliquam varius urna nec nibh laoreet, sollicitudin ultrices
                justo elementum. Curabitur mattis iaculis sapien euismod
                dignissim. Morbi fermentum enim et risus sagittis, at hendrerit
                felis interdum. Maecenas varius eget urna tincidunt gravida.
                Proin aliquam, lorem vel mollis pellentesque, lectus ex
                tincidunt ipsum, et porttitor augue mi non leo. Fusce in ante ac
                lacus bibendum fermentum non sit amet arcu. Praesent volutpat
                vel ex ut cursus. Aliquam finibus nisi at sapien sollicitudin,
                sit amet faucibus elit blandit. Integer semper auctor sapien non
                tincidunt. Mauris maximus mauris non mi dictum vulputate. In
                ligula enim, placerat vel elit eget, interdum aliquet risus.
              </Text>
            </Section>
            <Section>
              <Heading as="h3" css={s.sectionHeading}>
                Gallery
              </Heading>
              <Gallery images={images} />
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
      id
    }
  }
`

export default DogTemplate
