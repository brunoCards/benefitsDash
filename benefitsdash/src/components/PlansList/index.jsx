import React from 'react';
import { MainContainer } from './styles';

const PlansList = ({ isAcme, isInclusion }) => {
  return (
    <>
      {isAcme ? (
        <MainContainer></MainContainer>
      ) : (
        <MainContainer></MainContainer>
      )}
    </>
  );
};

export default PlansList;
