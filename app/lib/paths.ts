export function toPublicPath(path: string) {
  return path.replace(/^@\//, "/");
}
