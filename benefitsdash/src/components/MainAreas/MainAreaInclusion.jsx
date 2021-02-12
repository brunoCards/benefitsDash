import React from 'react';
import Header from '../Header';
import InclusionForm from '../InclusionForm';
import PlansList from '../PlansList';
import PlansSelectedArea from '../PlansSelectedArea';

import { MainContainer } from './styles';

const MainAreaInclusion = ({ isAcme }) => {
  return (
    <>
      {isAcme ? (
        <MainContainer>
          <Header isAcme isInclusion />
          <PlansList isAcme />
          <PlansSelectedArea isAcme />
          <InclusionForm />
        </MainContainer>
      ) : (
        <MainContainer>
          <Header isInclusion />
          <PlansList />
          <PlansSelectedArea />
          <InclusionForm />
        </MainContainer>
      )}
    </>
  );
};

export default MainAreaInclusion;
