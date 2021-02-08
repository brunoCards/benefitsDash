import React from 'react';
import { useSelect } from '../../contexts/FormContext';
import { MainContainer, SelectPlans } from './styles';

const PlansList = ({ isAcme, isInclusion }) => {
  const { acmePlans, tpBankPlans, selected, setSelected } = useSelect();

  return (
    <>
      {isAcme ? (
        <MainContainer>
          <SelectPlans
            className="acmeColor"
            options={acmePlans}
            value={selected}
            onChange={setSelected}
            overrideStrings={{
              selectSomeItems: 'Selecione um ou mais planos',
              allItemsAreSelected: 'Todos os planos foram selecionados',
              selectAll: 'Selecionar todos os planos',
              search: 'Buscar',
            }}
          />
        </MainContainer>
      ) : (
        <MainContainer>
          <SelectPlans
            className="tpBankColor"
            options={tpBankPlans}
            value={selected}
            onChange={setSelected}
            overrideStrings={{
              selectSomeItems: 'Selecione um ou mais planos',
              allItemsAreSelected: 'Todos os planos foram selecionados',
              selectAll: 'Selecionar todos os planos',
              search: 'Buscar',
            }}
          />
        </MainContainer>
      )}
    </>
  );
};

export default PlansList;
