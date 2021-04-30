import query from './query';

const ABOUT_PAGE = `
query {
  page(filter: {slug: {eq: "about"}}) {
    title
    slug
    mainImage {
      url
    }
    content {
      value
    }
    seo {
      description
      title
      twitterCard
    }
  }
}
`
const CONTACT_PAGE = `
query {
  page(filter: {slug: {eq: "contact"}}) {
    title
    slug
    mainImage {
      url
    }
    content {
      value
    }
    seo {
      description
      title
      twitterCard
    }
  }
}
`

const ALL_PRODUCTS = `
query {
  allProducts(orderBy: name_ASC) {
    price
    name
    description {
      value
    }
    alternativeImages {
      url
    }
    mainImage {
      url
    }
  }
}
`


const aboutPage = async () => {
  const result = await query({ query: ABOUT_PAGE });
  return result.page;
}

const contactPage = async () => {
  const result = await query({ query: CONTACT_PAGE });
  return result.page;
}

const allProducts = async () => {
  const result = await query({ query: ALL_PRODUCTS });
  return result.allProducts;
}

export { aboutPage, contactPage, allProducts };