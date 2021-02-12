import { Typography } from '@material-ui/core';
import styled from 'styled-components';

export const MainContainer = styled.main`
  width: 88%;
  margin-top: 15vh;

  display: flex;
  flex-direction: column;

  &.hide {
    visibility: hidden;
  }
`;
export const TextContainer = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-between;
`;
export const Text = styled(Typography)`
  &#closebutton {
    text-transform: lowercase;
    text-decoration: underline;
    cursor: pointer;
  }
  &.title {
    font-weight: bold;
  }
  & > span {
    font-weight: bold;
  }
`;
export const ListsContainer = styled.div`
  width: 100%;
  border-radius: 6px;

  display: grid;

  &.acmeColor {
    border: 1px solid var(--purple);
  }
  &.tpBankColor {
    border: 1px solid var(--blue);
  }
`;
export const EmployeeList = styled.ul`
  width: 100%;
  margin: 25px 0 25px 25px;

  display: grid;
  gap: 10px;

  &.acmeplans {
    width: 100%;
    height: 100%;
    justify-content: space-between;
    align-items: center;
  }
`;
export const EmployeeListItem = styled.li`
  list-style: none;

  display: flex;
  align-items: center;

  &.acmeplans {
    width: 60%;
    padding: 3px;
    border-radius: 8px;

    grid-column: 3 / 4;
    justify-content: center;

    background-color: var(--purple);

    color: var(--white);
    font-weight: bold;
  }

  &.employeename {
    margin-top: 10px;
    grid-column: 1 / 2;
    grid-row: 5 / 6;
  }
  &.employeedocument {
    margin-top: 10px;
    grid-column: 3 / 4;
    grid-row: 5 / 6;
  }
  &.admitdate {
    grid-column: 1 / 2;
    grid-row: 6 / 7;
  }
  &.weightheight {
    grid-column: 1 / 3;
    grid-row: 7 / 8;
  }
  &.email {
    grid-column: 3 / 4;
    grid-row: 7 / 8;
  }
  &.address {
    grid-column: 3 / 4;
    grid-row: 7 / 8;
  }
  &.meditatedhours {
    grid-column: 3 / 4;
    grid-row: 6 / 7;
  }
`;

export const AdjustLayoutBox = styled.div`
  width: 100%;
`;
