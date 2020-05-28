import styled from 'styled-components'

export const StocksGrid = styled.div`
display: grid;
grid-template-columns: 1fr 1fr;
border: solid 1px green;
background: white;
color: black;

width: 200px;
&:hover {

  cursor: pointer;
    box-shadow: 0px 0px 10px #03ff03;
}

padding: 5px;
`

export const SymbolDiv = styled.div`
text-align: right;
margin-top: 5px;
font-size: 40px;


`

export const InfoDiv = styled.div`
text-align: left;
margin-top: 20px;
font-size: 20px;

`

export const PriceDiv = styled.div`
text-align: right;
margin-top: 20px;
margin-right:10px;
font-size: 20px;
`

export const ButtonDetails = styled.button`
background: blue;
margin-top:15px;
color: white;
font-size: 20px;
width: 80px;
`

export const DeleteButton = styled(ButtonDetails)`
background: red;
`