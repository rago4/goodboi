// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { CSSProp } from "styled-components"

declare global {
  namespace JSX {
    interface IntrinsicAttributes {
      css?: CSSProp
    }
  }
}
