export { Keys, Values } from "./types"
export { useOnClickOutside } from "./useOnClickOutside"

export const getKey = (value: string): string =>
  value.toLowerCase().split(" ").join("_")

export const getAge = (months: number): string =>
  months <= 12
    ? `${months} month/s old`
    : `${Math.round(months / 12)} year/s old`
