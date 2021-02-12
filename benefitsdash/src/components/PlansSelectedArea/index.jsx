import React from 'react';
import { useStateContext } from '../../contexts/StateContext';
import {
  SelectedPlansContainer,
  Text,
  PlansList,
  PlansListItem,
  WarningContaoner,
} from './styles';

const PlansSelectedArea = ({ isAcme }) => {
  const { selected } = useStateContext();
  return (
    <>
      {isAcme ? (
        <SelectedPlansContainer className="acmecolor">
          {selected.length > 0 ? (
            <>
              <Text variant="h6">Planos selecionados:</Text>
              <PlansList>
                {selected.map((plan) => {
                  return (
                    <PlansListItem className="acmecolor">
                      {plan.label}&nbsp;📌
                    </PlansListItem>
                  );
                })}
              </PlansList>
            </>
          ) : (
            <Text variant="h6">Você não selecionou nenhum plano :(</Text>
          )}
        </SelectedPlansContainer>
      ) : (
        <SelectedPlansContainer className="tpbankcolor">
          {selected.length > 0 ? (
            <>
              <Text variant="h6">Você selecionou os seguintes planos:</Text>
              <PlansList className="tpbank">
                {selected.map((plan) => {
                  return (
                    <PlansListItem className="tpbankcolor">
                      {plan.label}&nbsp;📌
                    </PlansListItem>
                  );
                })}
              </PlansList>
            </>
          ) : (
            <Text variant="h6">Você não selecionou nenhum plano :(</Text>
          )}
        </SelectedPlansContainer>
      )}
      <WarningContaoner>
        <Text variant="body2" className="warning">
          **Preencha o formulário de inclusão e o funcionário será inserido nos
          planos selecionados.
        </Text>
      </WarningContaoner>
    </>
  );
};

export default PlansSelectedArea;
