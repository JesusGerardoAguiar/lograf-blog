import styled, {css} from 'styled-components'
import {textStyles} from '../utils'

const ClapCountTotal = styled.span`
  transform: scale(1);
  text-align: center;
  right: 0;
  font-family: MontserratL;
  ${textStyles}

  ${({theme: {primaryColor, size}}) => css`
    right: -${size / 2}px;
    top: ${size / 3}px;
    color: '#F3B543';
    width: ${size}px;
  `}
`

export default ClapCountTotal
