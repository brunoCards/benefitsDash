import React from 'react';
import Header from '../Header';
import EmployeeList from '../EmployeeList';
import { MainContainer } from './styles';
import EmployeeDetails from '../EmployeeDetails';

const MainAreaRead = ({ isAcme }) => {
  return (
    <>
      {isAcme ? (
        <MainContainer>
          <Header isAcme />
          <EmployeeList isAcme />
          <EmployeeDetails isAcme />
        </MainContainer>
      ) : (
        <MainContainer>
          <Header />
          <EmployeeList />
          <EmployeeDetails />
        </MainContainer>
      )}
    </>
  );
};

export default MainAreaRead;
