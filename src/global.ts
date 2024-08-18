import { createGlobalStyle } from 'styled-components'

export const colors = {
  green: '#107C10',
  white: '#fff',
  gray: '#1E1E1E',
  black: '#000'
}

const EstiloGlobal = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
  }
`

export default EstiloGlobal
