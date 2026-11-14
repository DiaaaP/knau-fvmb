export function asset(filename: string) {
  return import.meta.env.BASE_URL + 'images/' + filename
}
