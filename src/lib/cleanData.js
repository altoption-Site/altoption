import React from "react"

export function cleanHomePageData(obj) {
  const data = obj.edges.reduce((acc, { node }) => node, {})
  console.log({ data })
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

  const { homeBgColor } = data

  const homeImage = data.homeImg.asset.fluid

  // const tagline = createMarkup(tag)

  //   console.log(tagline)
  return {
    tagline,
    description,
    servicesLeft,
    servicesRight,
    homeBgColor,
    homeImage,
  }
}

export function cleanAboutUsPage(obj) {
  //
  const data = obj.edges.reduce((acc, { node }) => node, {})

  const { aboutBgColor } = data

  const aboutImg = data.aboutImg.asset.fluid
  return { ...data, aboutImg, aboutBgColor }
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

export function cleanServicesPage(obj) {
  const data = obj.edges.reduce((acc, { node }) => node, {})
  const { tagline, servicesList } = data

  return { ...data }
}
