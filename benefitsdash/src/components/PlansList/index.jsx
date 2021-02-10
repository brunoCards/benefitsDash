import React from 'react';
import { useStateContext } from '../../contexts/StateContext';
import { MainContainer, Form, SelectItem, Selector, Label } from './styles';

const PlansList = ({ isAcme, isInclusion }) => {
  const {
    acmePlans,
    setAcmePlans,
    tpBankPlans,
    selected,
    setSelected,
  } = useStateContext();

  return (
    <>
      {isAcme ? (
        <MainContainer>
          <Selector
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
