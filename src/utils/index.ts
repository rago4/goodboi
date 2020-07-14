export { Keys, Values } from "./types"
export { useOnClickOutside } from "./useOnClickOutside"
export const getKey = (value: string): string =>
  value.toLowerCase().split(" ").join("_")
