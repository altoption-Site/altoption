export function string_cleaning(string = "") {
  const first = string
    ? string
        .split("/")
        .map((e, i) => (i === i ? `<strong>${e}</strong>` : e))
        .join("")
    : "";

  return create_markup(first);
}

function create_markup(str = "") {
  return { __html: str };
}

export function clean_path({ pathname }) {
  return pathname === "/" ? "/" : pathname.split("/").join("");
}
