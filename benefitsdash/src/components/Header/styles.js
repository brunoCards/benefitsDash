import { Button, Typography } from '@material-ui/core';
import styled from 'styled-components';

export const MainAreaHeader = styled.header`
  width: 100%;
  height: 120px;

  display: flex;
`;
export const Text = styled(Typography)`
  width: 100%;
  padding: 20px 0 0 20px;
  &&.bold {
    font-weight: bold;
  }
`;
export const InclusionButton = styled(Button)`
  && {
    width: 20%;
    height: 35px;
    margin-right: 5vw;
    text-transform: capitalize;

    align-self: flex-end;
  }
  &&.acmeColor {
    background-color: var(--white);
    color: var(--purple);
    border: 1px solid var(--purple);
    :hover {
      background-color: var(--purple);
      color: var(--white);
    }
  }
  &&.tpBankColor {
    background-color: var(--white);
    color: var(--blue);
    border: 1px solid var(--blue);
    :hover {
      color: var(--white);
      background-color: var(--blue);
    }
  }
`;
