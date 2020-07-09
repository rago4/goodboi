import React from "react"
import { CSSProp } from "styled-components"
import { TextButtonLink } from "../Button"
import { Heading } from "../Heading"
import { Tag } from "../Tag"
import { Text } from "../Text"
import {
  Age,
  Container,
  Details,
  Image,
  PersonalityTrails,
  Top,
  styles as s,
} from "./styles"
import { THEME } from "../../constants"

interface Props {
  styles?: CSSProp
}

const {
  PALETTE: { MALIBU, PINK_SALMON },
} = THEME

export const DogTile: React.FC<Props> = ({ styles = {} }) => {
  return (
    <Container css={styles}>
      <Image src="https://placehold.it/300" alt="Dog name" />
      <div>
        <Top>
          <Details>
            <Heading as="h2" css={s.name}>
              George
            </Heading>
            <Age>4 years old</Age>
          </Details>
          <PersonalityTrails>
            <Tag css={s.tag} background={MALIBU}>
              Medium
            </Tag>
            <Tag css={s.tag}>Flat</Tag>
            <Tag css={s.tag} background={PINK_SALMON}>
              Active
            </Tag>
          </PersonalityTrails>
        </Top>
        <Text css={s.description}>
          Vivamus in justo dictum, gravida arcu ut, lacinia risus. Etiam vitae
          accumsan felis, eget consectetur eros. Ut pellentesque nulla vitae
          lorem volutpat dictum. Donec eleifend nisi ut lacinia dictum. Nunc
          viverra, nisl lorem ipsum dolor sit amet donec eleifend nisi ut
          lacinia dictum...
        </Text>
        <TextButtonLink to="#">Read more</TextButtonLink>
      </div>
    </Container>
  )
}
