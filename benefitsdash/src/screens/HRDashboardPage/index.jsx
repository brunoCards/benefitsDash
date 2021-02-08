import React from 'react';
import Layout from '../../components/Layout';
import Background from '../../components/Background';
import MainAreaRead from '../../components/MainAreas/MainAreaRead';

const HRDashboardPage = ({ isAcme }) => {
  return (
    <>
      {isAcme ? (
        <Layout>
          <Background isAcme />
          <MainAreaRead isAcme />
        </Layout>
      ) : (
        <Layout>
          <Background />
          <MainAreaRead />
        </Layout>
      )}
    </>
  );
};

export default HRDashboardPage;
