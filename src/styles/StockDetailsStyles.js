import styled from 'styled-components'

export const StocksGrid = styled.div`
display: grid;
grid-template-columns: 1fr 1fr;
border: solid 1px green;
background: #000080;
&:hover {

  cursor: pointer;
    box-shadow: 0px 0px 60px #03ff03;
}

padding: 5px;
`

export const SymbolDiv = styled.div`
text-align: right;
margin-top: 5px;
font-size: 20px;


`

export const InfoDiv = styled.div`
text-align: left;
margin-top: 20px;

`

export const PriceDiv = styled.div`
text-align: right;
margin-top: 20px;
margin-right:10px;
`

export const ButtonDetails = styled.button`
text-align: left;
margin-top: 20px;
background: green;
color: white;
margin: 2px;
margin-top: 5px;
width: 60px;
`

export const DeleteButton = styled(ButtonDetails)`
color: black;
background: red;

align-text: left;
`