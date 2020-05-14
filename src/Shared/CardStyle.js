import styled from "styled-components";
import { lightBlueBackground, greenBoxShadow } from "./styles.js";

export const Card = styled.div``;

export const SelectableCard = styled(Card)`
  &:hover {
    cursor: pointer;
    ${greenBoxShadow}
  }
  color: white;
  padding: 4px;
  ${lightBlueBackground}
`;

export const SelectedStockCard = styled(SelectableCard)``;
