export { Keys, Values, FluidImage } from "./types"
export { useOnClickOutside } from "./useOnClickOutside"

export const getKey = (value: string): string =>
  value.toLowerCase().split(" ").join("_")

const monthsDiff = (date: Date): number => {
  const now = new Date()

  let months = (now.getFullYear() - date.getFullYear()) * 12
  months -= now.getMonth()
  months += date.getMonth()

  return Math.max(0, months)
}

export const getAge = (birthdate: Date): string => {
  const months = monthsDiff(birthdate)

  return months <= 12
    ? `${months} month/s old`
    : `${Math.round(months / 12)} year/s old`
}
