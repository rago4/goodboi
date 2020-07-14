import React from "react"
import { css } from "styled-components"
import { Tag } from "../Tag"
import {
  ACTIVITY,
  ACTIVITY_LABELS,
  PLACE,
  PLACE_LABELS,
  SIZE,
  SIZE_LABELS,
  THEME,
} from "../../constants"
import { Values } from "../../utils"

export interface ITraits {
  size: Values<typeof SIZE>
  place: Values<typeof PLACE>
  activity: Values<typeof ACTIVITY>
}

interface Props {
  traits: ITraits
}

const {
  PALETTE: { MALIBU, PINK_SALMON },
} = THEME
const s = {
  tag: css`
    margin-left: 7px;
  `,
}

export const Traits: React.FC<Props> = ({ traits }) => (
  <>
    <Tag background={MALIBU}>{SIZE_LABELS[traits.size]}</Tag>
    <Tag css={s.tag}>{PLACE_LABELS[traits.place]}</Tag>
    <Tag css={s.tag} background={PINK_SALMON}>
      {ACTIVITY_LABELS[traits.activity]}
    </Tag>
  </>
)
