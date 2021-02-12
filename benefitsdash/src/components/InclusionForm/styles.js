import { Button, Typography } from '@material-ui/core';
import styled from 'styled-components';

export const FormContainer = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Title = styled(Typography)`
  color: var(--black);
  font-weight: bold;
`;
export const Form = styled.form`
  width: 90%;
  height: 100%;
  margin-top: 3vh;

  display: grid;
  gap: 15px;
`;
export const SubmitButton = styled(Button)`
  && {
    width: 100%;
    height: 45px;
    margin-top: 5px;

    grid-column: 4/5;
    grid-row: 3/4;

    color: var(--white);
    text-transform: capitalize;

    background-color: var(--green);
    &&:hover {
      background-color: var(--white);
      border: 2px solid var(--green);
      color: var(--green);
    }
  }
`;
export const CancelButton = styled(Button)`
  && {
    width: 100%;
    height: 45px;
    margin-top: 5px;

    grid-column: 3/4;
    grid-row: 3/4;

    color: var(--white);
    text-transform: capitalize;

    background-color: var(--red);
    &&:hover {
      background-color: var(--white);
      border: 2px solid var(--red);
      color: var(--red);
    }
  }
`;
