import React from 'react';

import HomeForm from '../../components/HomeForm';

import { Background, HomeLayout, TextContainer, Title } from './styles';

const HomePage = () => {
  return (
    <>
      <HomeLayout>
        <Background>
          <TextContainer>
            <Title variant="h1">Benefits-Dash</Title>
          </TextContainer>
        </Background>
        <HomeForm />
      </HomeLayout>
    </>
  );
};
export default HomePage;
