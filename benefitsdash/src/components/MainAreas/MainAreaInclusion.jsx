import React from 'react';
import Header from '../Header';
import PlansList from '../PlansList';
import InclusionForm from '../InclusionForm';
import { MainContainer } from './styles';

const MainAreaInclusion = ({ isAcme }) => {
  return (
    <>
      {isAcme ? (
        <MainContainer>
          <Header isAcme isInclusion />
          <PlansList isAcme isInclusion />
        </MainContainer>
      ) : (
        <MainContainer>
          <Header isInclusion />
          <PlansList isInclusion />
        </MainContainer>
      )}
    </>
  );
};

export default MainAreaInclusion;
