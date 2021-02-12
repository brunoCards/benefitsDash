import React from 'react';
import { useStateContext } from '../../contexts/StateContext';
import { MainContainer, Selector } from './styles';

const PlansList = ({ isAcme }) => {
  const { acmePlans, tpBankPlans, selected, setSelected } = useStateContext();

  return (
    <>
      {isAcme ? (
        <MainContainer>
          <Selector
            className="acmecolor"
            options={acmePlans}
            value={selected}
            onChange={setSelected}
            overrideStrings={{
              selectSomeItems: 'Selecione um ou mais planos',
              allItemsAreSelected: 'Todos os planos estão selecionados!',
              selectAll: 'Selecionar todos os planos',
              search: 'Buscar planos',
            }}
          />
        </MainContainer>
      ) : (
        <MainContainer>
          <Selector
            className="tpbankcolor"
            options={tpBankPlans}
            value={selected}
            onChange={setSelected}
            overrideStrings={{
              selectSomeItems: 'Selecione um ou mais planos',
              allItemsAreSelected: 'Todos os planos estão selecionados!',
              selectAll: 'Selecionar todos os planos',
              search: 'Buscar planos',
            }}
          />
        </MainContainer>
      )}
    </>
  );
};

export default PlansList;
