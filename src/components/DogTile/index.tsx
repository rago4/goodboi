import React from "react"
import Img, { FluidObject } from "gatsby-image"
import { CSSProp } from "styled-components"
import { TextButtonLink } from "../Button"
import { Heading } from "../Heading"
import { Text } from "../Text"
import { ITraits, Traits } from "../Traits"
import {
  Age,
  Container,
  Content,
  Details,
  ImageWrapper,
  PersonalityTraits,
  Top,
  styles as s,
} from "./styles"
import { ROUTES } from "../../constants"
import { getAge } from "../../utils"

interface Props {
  styles?: CSSProp
  id: string
  avatar: FluidObject
  name: string
  birthdate: Date
  traits: ITraits
  description: string
}

const { ADOPTION } = ROUTES

export const DogTile: React.FC<Props> = ({
  styles = {},
  id,
  avatar,
  name,
  birthdate,
  traits,
  description,
}) => {
  const excerpt = `${description.split(" ").slice(0, 50).join(" ")}...`

  return (
    <Container css={styles}>
      <ImageWrapper>
        <Img fluid={avatar} />
      </ImageWrapper>
      <Content>
        <Top>
          <Details>
            <Heading as="h2" css={s.name}>
              {name}
            </Heading>
            <Age>{getAge(birthdate)}</Age>
          </Details>
          <PersonalityTraits>
            <Traits traits={traits} />
          </PersonalityTraits>
        </Top>
        <Text css={s.description}>{excerpt}</Text>
        <TextButtonLink to={`${ADOPTION}/${id}`}>Read more</TextButtonLink>
      </Content>
    </Container>
  )
}
