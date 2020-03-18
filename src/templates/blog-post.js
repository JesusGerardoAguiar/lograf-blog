import React from "react"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import styled from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm, scale } from "../utils/typography"
import { createGlobalStyle } from "styled-components"
const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: MontserratL;
    src: url(${require("../../content/assets/fonts/Montserrat-Light.ttf")});
  }
  @font-face {
    font-family: MonteserratR;
    src: url(${require("../../content/assets/fonts/Montserrat-Regular.otf")});
  }
  @font-face {
    font-family: MonteserratB;
    src: url(${require("../../content/assets/fonts/Montserrat-Bold.otf")});
  }
`

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.mdx
    console.log(this.props.data);
    console.log(post)
    const siteTitle = this.props.data.site.siteMetadata.title

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <GlobalStyles />
        <SEO
          title={post.frontmatter.title}
          description={post.frontmatter.description || post.excerpt}
        />
        <HeaderPost headerImg={post.frontmatter.headerImg} />
        <PostTile>{post.frontmatter.title}</PostTile>
        <p
          style={{
            ...scale(-1 / 5),
            fontFamily: "MontserratL",
            display: `block`,
            marginBottom: rhythm(1),
            marginTop: rhythm(-1),
          }}
        >
          {post.frontmatter.date}
        </p>
        <MDXRenderer style={{ fontFamily: "MonteserratR!important" }}>
          {post.body}
        </MDXRenderer>

        {/* <ul
          style={{
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,
            padding: 0,
          }}
        >
          <li>
            {previous && (
              <Link to={`blog${previous.fields.slug}`} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={`blog${next.fields.slug}`} rel="next">
                {next.frontmatter.title} →
              </Link>
            )}
          </li>
        </ul> */}
      </Layout>
    )
  }
}

export default BlogPostTemplate

const PostTile = styled.h1`
  font-family: MonteserratR;
  color: #f3b52a;
  margin-top: 1rem;
`


const HeaderPost = styled.div`
  background-image: url(${props => props.headerImg});
  width: 100%;
  height: 10rem;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  margin-top: 4rem;
`

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    mdx(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      body
      frontmatter {
        title
        headerImg
        date(formatString: "MMMM DD, YYYY")
        description
      }
    }
  }
`
