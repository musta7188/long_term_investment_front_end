import styled from 'styled-components'


export const PortfoliosGrid = styled.div`
display: grid;
grid-template-columns: repeat(auto-fill, minmax(130px, 1fr));
grid-gap: 115px;
margin: 60px;

`


export const PortfoliosCardStyle = styled.div`
font-size: 20px;
background: white;
padding: 10px;
&:hover {
  cursor: pointer;
  box-shadow: 0px 0px 2px 4px #212FD6;
}
`

export const CreateDiv = styled.div`

text-align: center;
padding-bottom: 50px;
`
