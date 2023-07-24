import { styled } from "styled-components";
import { cardStyle } from "../../style/styleMixins";

export const ContentBox = styled.div`
  background-color: #615eed;
  padding: 1rem;
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;
  align-items: start;
  ${cardStyle}
`;
