import MultiSelect from 'react-multi-select-component';
import styled from 'styled-components';

export const MainContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
`;
export const SelectPlans = styled(MultiSelect)`
  width: 90%;
  --rmsc-h: 45px; /*height*/
  --rmsc-radius: 6px; /* border-radius */
  &.acmeColor {
    --rmsc-main: var(--purple); /* border-color :active */
    --rmsc-hover: var(--purple); /*background-color :hover */
    --rmsc-selected: var(--purple); /*background-color selected item */
    --rmsc-border: var(--purple); /* border-color */
    --rmsc-bg: var(--white); /*background-color */
  }
  &.tpBankColor {
    --rmsc-main: var(--blue); /* border-color :active */
    --rmsc-hover: var(--blue); /*background-color :hover */
    --rmsc-selected: var(--blue); /*background-color selected item */
    --rmsc-border: var(--blue); /* border-color */
    --rmsc-bg: var(--white); /*background-color */
  }
`;
