import { Button, Typography } from '@material-ui/core';
import styled from 'styled-components';

export const EmployeeListContainer = styled.div`
  width: 88%;
  margin-top: 5vh;
`;
export const Text = styled(Typography)`
  &&.bold {
    font-weight: bold;
  }
`;
export const EmployeesRelation = styled.ul`
  width: 100%;
  padding: 20px 0 20px 20px;
  margin-top: 15px;
  border-radius: 6px;
  &.acmeColor {
    border: 1px solid var(--purple);
  }
  &.tpBankColor {
    border: 1px solid var(--blue);
  }
`;
export const EmployeesListItem = styled.li`
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;

  list-style: none;
`;
export const ListButtons = styled(Button)`
  && {
    width: 128px;
    height: 37px;
    color: var(--white);
    background-color: var(--green);
    text-transform: capitalize;
    &&:hover {
      background-color: var(--white);
      color: var(--green);
      border: 1px solid var(--green);
    }
  }
  &.editButtons {
    background-color: var(--purple);
    &&:hover {
      background-color: var(--white);
      color: var(--purple);
      border: 1px solid var(--purple);
    }
  }
  &.deleteButtons {
    background-color: var(--red);
    &&:hover {
      background-color: var(--white);
      color: var(--red);
      border: 1px solid var(--red);
    }
  }
`;
export const ButtonsContainer = styled.div`
  width: 50%;

  display: flex;
  justify-content: center;
  gap: 30px;
`;
