import styled, {css, keyframes} from 'styled-components'

const shockwave = ({theme: {secondaryColor}}) => keyframes`
0%{
     box-shadow:0 0
 }
 70%{
     box-shadow:0 0 5px 10px rgba(255,255,255,0)
 }
 100%{
     box-shadow:0 0 0 0 rgba(255,255,255,0)
 }
`

const ClapButton = styled.button`
  position: relative;
  outline: 1px solid transparent;
  transition: border 0.1s ease-in;
  background: transparent;
  border: none;
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    border-radius: 50%;
  }

  &:hover {
    cursor: pointer;
  }

  

  ${({theme: {primaryColor, secondaryColor, size}}) => css`
    width: ${size}px;
    height: ${size}px;

    &::after {
      width: ${size - 1}px;
      height: ${size - 1}px;
      color: '#F3B543';
      fill: '#F3B543';
    }

  
  `}
`

export default ClapButton
