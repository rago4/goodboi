// eslint-disable-next-line @typescript-eslint/ban-types
export type Keys<T extends object> = keyof T

// eslint-disable-next-line @typescript-eslint/ban-types
export type Values<T extends object> = T[Keys<T>]
