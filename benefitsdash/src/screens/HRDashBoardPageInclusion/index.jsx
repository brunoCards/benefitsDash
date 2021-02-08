import React from 'react';
import Layout from '../../components/Layout';
import Background from '../../components/Background';
import MainAreaInclusion from '../../components/MainAreas/MainAreaInclusion';

const HRDashboardPageInclusion = ({ isAcme }) => {
  return (
    <>
      {isAcme ? (
        <Layout>
          <Background isAcme />
          <MainAreaInclusion isAcme />
        </Layout>
      ) : (
        <Layout>
          <Background />
          <MainAreaInclusion />
        </Layout>
      )}
    </>
  );
};

export default HRDashboardPageInclusion;
