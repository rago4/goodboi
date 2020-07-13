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
  PersonalityTraits,
  Top,
  styles as s,
} from "./styles"
import {
  ACTIVITY,
  ACTIVITY_LABELS,
  PLACE,
  PLACE_LABELS,
  ROUTES,
  SIZE,
  SIZE_LABELS,
  THEME,
} from "../../constants"
import { Values } from "../../utils"

interface Props {
  styles?: CSSProp
  id: number
  avatar: string
  name: string
  months: number
  traits: {
    size: Values<typeof SIZE>
    place: Values<typeof PLACE>
    activity: Values<typeof ACTIVITY>
  }
  description: string
}

const { SINGLE_DOG } = ROUTES
const {
  PALETTE: { MALIBU, PINK_SALMON },
} = THEME

export const DogTile: React.FC<Props> = ({
  styles = {},
  id,
  avatar,
  name,
  months,
  traits,
  description,
}) => {
  const age =
    months <= 12
      ? `${months} month/s old`
      : `${Math.round(months / 12)} year/s old`
  const excerpt = `${description.split(" ").slice(0, 50).join(" ")}...`
  const route = `${SINGLE_DOG}/${id}`

  return (
    <Container css={styles}>
      <Image src={avatar} alt={name} />
      <div>
        <Top>
          <Details>
            <Heading as="h2" css={s.name}>
              {name}
            </Heading>
            <Age>{age}</Age>
          </Details>
          <PersonalityTraits>
            <Tag background={MALIBU}>{SIZE_LABELS[traits.size]}</Tag>
            <Tag css={s.tag}>{PLACE_LABELS[traits.place]}</Tag>
            <Tag css={s.tag} background={PINK_SALMON}>
              {ACTIVITY_LABELS[traits.activity]}
            </Tag>
          </PersonalityTraits>
        </Top>
        <Text css={s.description}>{excerpt}</Text>
        <TextButtonLink to={route}>Read more</TextButtonLink>
      </div>
    </Container>
  )
}
