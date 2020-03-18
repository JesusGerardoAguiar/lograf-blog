import styled, {css} from 'styled-components'
import {textStyles} from '../utils'

const ClapCount = styled.span`
right: ${({size}) => size/2,5}px;
    top: ${({size}) => size / 3}px;
  color: '#F3B543';
  border-radius: 50%;
  backface-visibility: hidden;
  font-family: MontserratL;
  ${textStyles}

  ${({theme: {secondaryColor, size}}) => {
    const half = `${size / 2}px`
    return css`
      height: ${half};
      width: ${half};
      line-height: ${half};
      right: -${size / 4}px;
    top: ${size / 3}px;
      background: #F3B543;
    `
  }}
`

export default ClapCount
