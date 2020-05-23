import styled from 'styled-components'

export const PortfolioDiv = styled.div`
display: grid;
grid-template-columns: 1fr;
grid-gap: 15px;
`

export const ButtonContainer = styled.div`
display: grid;
margin-top: 20px;
grid-gap: 15px;
`
export const DeleteButton = styled.button`

background: black;
color: white;
width: 100px;
font-size: 12px;
`

export const ViewButton  = styled(DeleteButton)`
background: blue;
color: white;
`

export const TitleDiv = styled.div`
word-break: break-all;
min-height: 60px;
font-size: 20px;
`
