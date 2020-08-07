import { FluidObject } from "gatsby-image"

// eslint-disable-next-line @typescript-eslint/ban-types
export type Keys<T extends object> = keyof T

// eslint-disable-next-line @typescript-eslint/ban-types
export type Values<T extends object> = T[Keys<T>]

export interface FluidImage {
  imageFile: {
    childImageSharp: {
      fluid: FluidObject
    }
  }
}
