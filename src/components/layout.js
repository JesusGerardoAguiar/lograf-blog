import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import Header from './Header';
import Lograf from "../../content/assets/lografLogo.svg";

import { rhythm, scale } from "../utils/typography"

class Layout extends React.Component {
  render() {
    const { children } = this.props
    let header = (<Header />)
    return (
      <Wrapper>
        <div
          style={{
            marginLeft: `auto`,
            marginRight: `auto`,
            maxWidth: rhythm(24),
            padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
          }}
        >
          <header>{header}</header>
          <main>{children}</main>
        </div>
        <Footer>
          © {new Date().getFullYear()}, powered by
          {` `}
          <a href="https://www.gatsbyjs.org"><img src={Lograf} alt="logo" style={{ width: "10rem" }} /></a>
        </Footer>
      </Wrapper>
    )
  }
}

const Wrapper = styled.div`
  min-height: 100vh;

  p {
    font-family: MonteserratR;
  }
`

const Footer = styled.footer`
  text-align: center;
  margin: 24px;
  font-family: MonteserratR;
`

export default Layout
