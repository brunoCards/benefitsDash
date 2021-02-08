import { Box, Container, Typography } from '@material-ui/core';
import styled from 'styled-components';
import bgHome from '../../assets/bgHome.svg';

export const HomeLayout = styled.div`
  && {
    width: 100vw;
    height: 100vh;

    display: grid;
    justify-items: flex-start;
    grid-template-areas: 'BG HF';
    grid-template-columns: 70vw 30vw;
  }
`;
export const Background = styled(Container)`
  grid-area: BG;

  background-image: url(${bgHome});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

  display: flex;
  justify-content: center;
`;
export const TextContainer = styled(Box)`
  width: 100%;
  margin: 15vh 0 0 8vw;

  display: flex;
  justify-content: center;
`;
export const Title = styled(Typography)`
  && {
    width: 60%;
    border-radius: 8px;
    box-shadow: 5px -3px 60px 60px var(--white);

    background-color: var(--white);

    display: flex;
    justify-content: center;
    align-self: center;

    font-family: 'Carter One', cursive;
    color: var(--green);
    font-size: 5em;
  }
`;
