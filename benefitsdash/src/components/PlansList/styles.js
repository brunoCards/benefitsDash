import MultiSelect from 'react-multi-select-component';
import styled from 'styled-components';

export const MainContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
`;
export const Selector = styled(MultiSelect)`
  width: 90%;
  height: 35px;
  --rmsc-p: 10px; //propriedade padding do select
  --rmsc-radius: 6px; // border-radius do select e select items

  --rmsc-bg: var(--white); // fundo nativo do select

  &.acmecolor {
    --rmsc-main: var(--purple); //propriedade border no evento onblur
    --rmsc-hover: var(--purple); // pseudo-class hover dos select items
    --rmsc-selected: var(--purple); // fundo da propriedade de seleção
    --rmsc-border: var(--purple); // propriedade border nativa
    --rmsc-gray: var(--purple); // propriedade color das fontes do select
  }
  &.tpbankcolor {
    --rmsc-main: var(--blue); //propriedade border no evento onblur
    --rmsc-hover: var(--blue); // pseudo-class hover dos select items
    --rmsc-selected: var(--blue); // fundo da propriedade de seleção
    --rmsc-border: var(--blue); // propriedade border nativa
    --rmsc-gray: var(--blue); // propriedade color das fontes do select
  }
`;
