
import styled from 'styled-components'

export const SearchInputDiv = styled.div`
text-align: center;

`

export const SearchInputStyle = styled.input`

padding: 0.5em;
  margin: 0.5em;
  font-size: 15px;
  border: none;
  border-radius: 3px;
  &:hover {
    cursor: pointer;
    box-shadow: 0px 0px 2px 4px green;
  }
`

export const SearchButton = styled.button`

background: green;
color: white;
border-radius: 10px;
font-size: 15px;
`