import React from "react"
import { Link, graphql } from "gatsby"
import styled from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"
import { createGlobalStyle } from "styled-components"
import { Applause } from "../../static/assets/Applause"
import ClapButton from "../components/ClapButton"
import gql from "graphql-tag"

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
  li,ol,strong,ul,p{
    font-family: MonteserratR!important;
  }
  h1,h2{
    font-family: MonteserratB!important;
  }
`

const Blog = props => {
  const { data } = props
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allMdx.edges

  return (
    <Layout location={props.location} title={siteTitle}>
      <GlobalStyles />
      <SEO />
      <div style={{ margin: "20px 0 40px" }}>
        {posts.map(({ node }) => {
          console.log(node.frontmatter.reactions)
          const title = node.frontmatter.title || node.fields.slug
          return (
            <PostDiv key={node.fields.slug}>
              <Link
                style={{ boxShadow: `none` }}
                to={`blog${node.fields.slug}`}
              >
                <HeaderPost headerImg={node.frontmatter.headerImg} />
                <PostTile style={{ marginBottom: rhythm(1 / 4) }}>
                  {title}
                </PostTile>
                <small>{node.frontmatter.date}</small>
                <p
                  dangerouslySetInnerHTML={{
                    __html: node.frontmatter.description || node.excerpt,
                  }}
                />
              </Link>
              {/* <ClapButton
                count={node.frontmatter.reactions}
                countTotal={node.frontmatter.reactions}
                iconComponent={props => <Applause />}
              /> */}
            </PostDiv>
          )
        })}
      </div>
    </Layout>
  )
}

export default Blog

const PostTile = styled.h3`
  margin-bottom: rhythm(1 / 4);
  font-family: MonteserratR;
  color: #f3b52a;
  margin-top: 1.5rem !important;
  margin-left: 1rem;
  a {
    font-family: MonteserratR;
    color: #f3b52a;
  }
`

const PostDiv = styled.div`
  margin-bottom: 2rem;
  small,
  p {
    font-family: MontserratL;
    color: black;
    margin-left: 1rem;
  }
  border: 1px solid #f3b543;
  border-radius: 5px;
`

const ApplauseDiv = styled.button`
  padding: 0;
  border: none;
  outline: none;
  cursor: pointer;
  margin-left: 1rem;
  :hover {
    opacity: 0.5;
  }
`

const HeaderPost = styled.div`
  background-image: url(${props => props.headerImg});
  width: 100%;
  height: 10rem;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
`

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
            headerImg
            reactions
          }
        }
      }
    }
  }
`
