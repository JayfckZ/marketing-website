import styled from 'styled-components'
import { colors } from '../../global'

export const Container = styled.header`
  height: 20vh;
  background-color: ${colors.green};
  display: flex;
  align-items: center;
  justify-content: center;

  h1 {
    font-size: 64px;
    color: ${colors.white};
  }
`
