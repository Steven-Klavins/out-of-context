import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import "../pages/index.css"

const IndexPage = ({ data }) => {
  console.log(data)
  return (
    <Layout>
      <h1>Welcome</h1>
    </Layout>
  )
}

export default IndexPage

// Test: Markdown exsport passed to data prop from markdown folder (searched via allMarkdownRemark)

export const query = graphql`
  {
    allMarkdownRemark {
      nodes {
        frontmatter {
          title
          image
        }
      }
    }
  }
`
