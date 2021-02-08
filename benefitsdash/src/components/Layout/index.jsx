import React from 'react';
import { PageLayout } from './styles';

const Layout = ({ children }) => {
  return (
    <>
      <PageLayout>{children}</PageLayout>
    </>
  );
};

export default Layout;
