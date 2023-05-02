export function isValidKey<T extends object>(
  key: string,
  object: T
): key is keyof T & string {
  return key in object;
}
