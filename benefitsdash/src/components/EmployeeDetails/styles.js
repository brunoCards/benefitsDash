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
`;
export const EmployeeListItem = styled.li`
  width: 100%;
  list-style: none;

  &.healhtplan {
    grid-column-start: 3;
    grid-column-end: 4;
  }
  &.listtitle {
    grid-column-start: 1;
    grid-column-end: 2;
    grid-row-start: 1;
    grid-row-end: 3;

    display: flex;
    align-items: center;
  }
  &.dentalplan {
    grid-column-start: 3;
    grid-column-end: 4;
  }
  &.mentalplan {
    grid-column-start: 3;
    grid-column-end: 4;
  }
  &.employeename {
    margin-top: 10px;
    grid-column-start: 1;
    grid-column-end: 2;
    grid-row-start: 5;
    grid-row-end: 6;
  }
  &.employeedocument {
    margin-top: 10px;
    grid-column-start: 3;
    grid-column-end: 4;
    grid-row-start: 5;
    grid-row-end: 6;
  }
  &.admitdate {
    grid-column-start: 1;
    grid-column-end: 2;
    grid-row-start: 6;
    grid-row-end: 7;
  }
  &.weightheight {
    grid-column-start: 1;
    grid-column-end: 3;
    grid-row-start: 7;
    grid-row-end: 8;
  }
  &.email {
    grid-column-start: 3;
    grid-column-end: 4;
    grid-row-start: 7;
    grid-row-end: 8;
  }
  &.address {
    grid-column-start: 3;
    grid-column-end: 4;
    grid-row-start: 7;
    grid-row-end: 8;
  }
  &.meditatedhours {
    grid-column-start: 3;
    grid-column-end: 4;
    grid-row-start: 6;
    grid-row-end: 7;
  }
`;
export const AdjustLayoutBox = styled.div`
  width: 100%;
`;
