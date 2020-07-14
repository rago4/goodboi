import React from "react"
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
  Image,
  PersonalityTraits,
  Top,
  styles as s,
} from "./styles"
import { ROUTES } from "../../constants"
import { getAge } from "../../utils"

interface Props {
  styles?: CSSProp
  id: number
  avatar: string
  name: string
  months: number
  traits: ITraits
  description: string
}

const { ADOPTION } = ROUTES

export const DogTile: React.FC<Props> = ({
  styles = {},
  id,
  avatar,
  name,
  months,
  traits,
  description,
}) => {
  const excerpt = `${description.split(" ").slice(0, 50).join(" ")}...`

  return (
    <Container css={styles}>
      <Image src={avatar} alt={name} />
      <Content>
        <Top>
          <Details>
            <Heading as="h2" css={s.name}>
              {name}
            </Heading>
            <Age>{getAge(months)}</Age>
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
