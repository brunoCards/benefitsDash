import styled from 'styled-components';

export const Container = styled.div`
  grid-area: BG;

  width: 100%;
  height: 100%;

  &.acmeColor {
    background-color: var(--purple);
  }
  &.tpbankColor {
    background-color: var(--blue);
  }
`;
