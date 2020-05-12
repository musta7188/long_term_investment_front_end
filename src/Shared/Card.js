import styled from 'styled-components'
import {subtleBoxShadow, lightBlueBackground, greenBoxShadow, redBoxShadow} from './styles.js'



export const Card = styled.div`
`

export const SelectableCard= styled(Card)`
&:hover{
  cursor: pointer;
  ${greenBoxShadow}
}
color: white;
padding: 10px;
${lightBlueBackground}
`
