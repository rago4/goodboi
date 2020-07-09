import React from "react"
import { Body, ButtonLink, Heading, Layout, NavLink, Text } from "../components"
import {
  Container,
  Content,
  Image,
  Navigation,
  styles as s,
} from "../pages-styles"
import { ROUTES } from "../constants"
import DogImage from "../../static/dog.png"

const { HOME, ADOPTION } = ROUTES

const Index: React.FC = () => {
  return (
    <Layout>
      <Body css={s.body}>
        <Container>
          <Navigation>
            <Heading>goodboi</Heading>
            <div>
              <NavLink to={HOME} css={s.navLink}>
                Home
              </NavLink>
              <NavLink to={ADOPTION}>Adoption</NavLink>
            </div>
          </Navigation>

          <Image src={DogImage} alt="Black dog with head up" />

          <Content>
            <Heading as="h2" css={s.heading}>
              Adopting a dog can be a very rewarding experience
            </Heading>
            <Text css={s.copy}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
              tincidunt purus tellus, id venenatis sem placerat vel. Donec
              tempor, dui vel viverra semper, massa velit pretium purus, a
              sodales diam enim consequat arcu. Nullam id metus bibendum, porta
              justo quis, tempus purus.
            </Text>
            <Text css={s.copy}>
              Massa velit pretium purus, a sodales diam enim consequat arcu.
              Nullam id metus bibendum, porta justo quis, tempus purus.
            </Text>
            <ButtonLink css={s.cta} to={ADOPTION}>
              Get started
            </ButtonLink>
          </Content>
        </Container>
      </Body>
    </Layout>
  )
}

export default Index
