import React from 'react';
import { InclusionButton, MainAreaHeader, Text } from './styles';
import { useHistory } from 'react-router-dom';

const handleNavigateToInclusionAcme = (history) => {
  history.push('/rh/acme/inclusao');
};

const handleNavigateToInclusionTpBank = (history) => {
  history.push('/rh/tpbank/inclusao');
};

const Header = ({ isAcme, isInclusion }) => {
  const history = useHistory();
  return (
    <>
      {isAcme ? (
        <MainAreaHeader>
          {isInclusion ? (
            <Text className="bold" variant="h4">
              Acme Corporation
            </Text>
          ) : (
            <>
              <Text className="bold" variant="h4">
                Acme Corporation
              </Text>
              <InclusionButton
                onClick={() => handleNavigateToInclusionAcme(history)}
                className="acmeColor"
              >
                Incluir funcionário
              </InclusionButton>
            </>
          )}
        </MainAreaHeader>
      ) : (
        <MainAreaHeader>
          {isInclusion ? (
            <Text className="bold" variant="h4">
              Tio Patinhas Bank
            </Text>
          ) : (
            <>
              <Text className="bold" variant="h4">
                Tio Patinhas Bank
              </Text>
              <InclusionButton
                onClick={() => handleNavigateToInclusionTpBank(history)}
                className="tpBankColor"
              >
                Incluir funcionário
              </InclusionButton>
            </>
          )}
        </MainAreaHeader>
      )}
    </>
  );
};

export default Header;
