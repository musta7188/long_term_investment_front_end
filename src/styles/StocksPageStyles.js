import styled from "styled-components";

export const StockGrid = styled.div`
display: grid;
grid-template-columns: repeat(auto-fill, minmax(130px, 1fr));
grid-gap: 100px;
margin-bottom: 40px;
align-text: center;
`;


export const StockGridPortfolio = styled.div`
grid-gap: 125px;
padding-right: 20px;
display: grid;
grid-template-columns: repeat(auto-fill, minmax(130px, 1fr));

`

export const AddStockButton = styled.button`
background: green;
font-size: 20px;
color: white;
`