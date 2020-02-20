export function cleanPath({ pathname }) {
  return pathname === "/" ? "/" : pathname.split("/").join("")
}
