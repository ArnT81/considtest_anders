import query from './query';

const START_PAGE = `
query {
  startpage {
    title
    mainImage {
      url
    }
    content {
      value
    }
  }
}
`
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
    id
    price
    name
    mainImage {
      url
    }
  }
}
`
const PRODUCT = `
query ($name: String!) {
  product(filter: {name: {eq: $name}}) {
    price
    name
    mainImage {
      url
    }
    alternativeImages {
      url
      id
    }
    description {
      value
    }
  }
}
`

const startPage = async () => {
  const result = await query({ query: START_PAGE });
  return result.startpage;
}

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

const productByName = async name => {
  const result = await query({ query: PRODUCT, variables: { name } });
  return result.product;
}

export { startPage, aboutPage, contactPage, allProducts, productByName };