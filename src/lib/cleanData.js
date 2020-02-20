import React from "react"

export function cleanHomePageData(obj) {
  const data = obj.allSanityHomePage.edges.reduce((acc, { node }) => node, {})
  //   console.log(data)

  const { services } = data
  let servicesLeft = []
  let servicesRight = []

  services.forEach((el, i) => {
    if (i < services.length / 2) {
      servicesLeft.push(el)
    } else {
      servicesRight.push(el)
    }
  })

  servicesLeft = servicesLeft.map(el => <li>{el}</li>)
  servicesRight = servicesRight.map(el => <li>{el}</li>)

  // console.log(servicesRight)

  const description = data.heroDescription
  // console.log(description)
  const tagline = stringCleaning(data.tagline)

  // const tagline = createMarkup(tag)

  //   console.log(tagline)
  return { tagline, description, servicesLeft, servicesRight }
}

function createMarkup(string) {
  return { __html: string }
}

export function stringCleaning(string) {
  console.log(string)
  const first = string
    ? string
        .split("/")
        .map((el, i) => {
          if (i === 1) {
            return `<strong>${el}</strong>`
          }
          return el
        })
        .join(" ")
    : ""
  return createMarkup(first)
}
