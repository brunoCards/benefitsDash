import { Box, Button, Typography } from '@material-ui/core';
import styled from 'styled-components';

export const HomeFormContainer = styled.div`
  width: 100%;
  grid-area: HF;

  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Container = styled(Box)`
  width: 100%;

  text-align: center;

  display: flex;
  justify-content: center;

  &.imagecontainer {
    margin: 0;
    height: 100px;
    align-items: center;
  }
`;
export const Text = styled(Typography)`
  width: 80%;
  height: 60px;

  &&.title {
    margin-top: 15vh;

    font-weight: bold;
    font-size: 2.5em;

    text-align: center;
  }
  &&.bold {
    font-weight: bold;
    margin-top: 5vh;
  }
`;
export const Circles = styled.img`
  width: 50%;
  height: 100%;

  object-fit: fill;
`;
export const Form = styled.form`
  width: 80%;
  height: calc(100% - 400px);

  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
`;
export const LoginButton = styled(Button)`
  && {
    width: 50%;
    margin-top: 25px;

    background-color: var(--pink);

    color: var(--white);
    font-weight: bold;
    text-transform: capitalize;
  }

  &&:hover {
    border: 1px solid var(--pink);
    color: var(--pink);
    background-color: var(--white);
  }
`;
