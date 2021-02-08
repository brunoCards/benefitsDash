import React from 'react';
import { Container } from './styles';

const Background = ({ isAcme }) => {
  return (
    <>
      {isAcme ? (
        <Container className="acmeColor" />
      ) : (
        <Container className="tpbankColor" />
      )}
    </>
  );
};

export default Background;
