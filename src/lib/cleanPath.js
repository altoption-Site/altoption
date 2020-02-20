export function cleanPath({ pathname }) {
  console.log(pathname)
  return pathname === "/" ? "/" : pathname.split("/").join("")
}
