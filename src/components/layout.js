import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import Header from './Header';
import Lograf from "../../content/assets/lografLogoBlack.svg";

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
        <Footer backgroundImg={Lograf}>
          © {new Date().getFullYear()}, powered by
          {` `}
          <a href="https://www.lografdesign.com"><img src={Lograf} alt="f" style={{width: '5rem'}} /></a>
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
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  a{
    display: flex;
    border-shadow: none;
    color: transparent;
    
  }
  img{
    width: 5rem;
    margin-bottom: 0px;
    margin-left: 0.5rem;
  }
`

export default Layout
