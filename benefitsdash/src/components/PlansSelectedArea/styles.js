import { Typography } from '@material-ui/core';
import styled from 'styled-components';

export const SelectedPlansContainer = styled.div`
  width: 90%;
  height: 70px;
  border: 1px solid var(--black);
  border-radius: 6px;
  margin-top: 2vh;

  display: flex;
  gap: 10px;
  justify-content: center;
  align-items: center;

  &.acmecolor {
    background-color: var(--purple);
  }

  &.tpbankcolor {
    background-color: var(--blue);
  }
`;
export const Text = styled(Typography)`
  && {
    font-size: 18px;
    font-weight: bold;
    color: var(--white);
  }
  &&.warning {
    font-size: 16px;
    color: var(--black);
  }
`;
export const PlansList = styled.ul`
  width: 70%;

  display: flex;
  gap: 20px;

  &.tpbank {
    width: 70%;
    justify-content: center;
    gap: 10px;
    font-size: 12px;
  }
  & > :nth-child(2) {
    width: 35%;
  }
`;
export const PlansListItem = styled.li`
  width: 50%;
  padding: 5px;
  border-radius: 6px;
  display: flex;
  gap: 15px;
  justify-content: center;

  background-color: var(--black);

  &.acmecolor {
    color: var(--purple);
  }

  &.tpbankcolor {
    color: var(--blue);
  }
`;
export const WarningContaoner = styled.div`
  width: 90%;
  height: 15vh;

  display: flex;
  justify-content: center;
  align-items: center;
`;
