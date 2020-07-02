import React from "react"
import { Body, Button, Heading, Layout, NavLink, Text } from "../components"
import { Container, Content, Image, Navigation, styles } from "../pages-styles"
import { ROUTES } from "../constants"
import DogImage from "../../static/dog.png"

const { HOME, ADOPTION } = ROUTES

const Index: React.FC = () => {
  return (
    <Layout>
      <Body css={styles.body}>
        <Container>
          <Navigation>
            <Heading>goodboi</Heading>
            <div>
              <NavLink to={HOME} css={styles.navLink}>
                Home
              </NavLink>
              <NavLink to={ADOPTION}>Adoption</NavLink>
            </div>
          </Navigation>

          <Image src={DogImage} alt="Black dog with head up" />

          <Content>
            <Heading as="h2" css={styles.heading}>
              Adopting a dog can be a very rewarding experience
            </Heading>
            <Text css={styles.copy}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
              tincidunt purus tellus, id venenatis sem placerat vel. Donec
              tempor, dui vel viverra semper, massa velit pretium purus, a
              sodales diam enim consequat arcu. Nullam id metus bibendum, porta
              justo quis, tempus purus.
            </Text>
            <Text css={styles.copy}>
              Massa velit pretium purus, a sodales diam enim consequat arcu.
              Nullam id metus bibendum, porta justo quis, tempus purus.
            </Text>
            <Button css={styles.cta}>Get started</Button>
          </Content>
        </Container>
      </Body>
    </Layout>
  )
}

export default Index
