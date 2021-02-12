import React from 'react';
import { useStateContext } from '../../contexts/StateContext';
import {
  EmployeeListContainer,
  EmployeesRelation,
  Text,
  EmployeesListItem,
  ListButtons,
  ButtonsContainer,
} from './styles';

const EmployeeList = ({ isAcme }) => {
  const {
    acmeEmployees,
    tpBankEmployees,
    isOpen,
    setIsOpen,
  } = useStateContext();

  console.log(acmeEmployees);

  const handleToggle = () => setIsOpen(!isOpen);
  return (
    <>
      {isAcme ? (
        <EmployeeListContainer>
          <Text className="bold" variant="h6">
            Relação de Funcionários(as)
          </Text>
          {acmeEmployees.length === 0 ? (
            <EmployeesRelation className="acmeColor">
              <Text variant="h6">Nenhum Funcionário cadastrado :(</Text>
            </EmployeesRelation>
          ) : (
            <EmployeesRelation className="acmeColor">
              {acmeEmployees.map((employee) => {
                return (
                  <EmployeesListItem key="{employee}">
                    <Text variant="body1">{employee.name}</Text>
                    <ButtonsContainer>
                      <ListButtons onClick={() => handleToggle()}>
                        Detalhes
                      </ListButtons>
                      <ListButtons className="editButtons">Editar</ListButtons>
                      <ListButtons className="deleteButtons">
                        Excluir
                      </ListButtons>
                    </ButtonsContainer>
                  </EmployeesListItem>
                );
              })}
            </EmployeesRelation>
          )}
        </EmployeeListContainer>
      ) : (
        <EmployeeListContainer>
          <Text className="bold" variant="h6">
            Relação de Funcionários(as)
          </Text>
          <EmployeesRelation className="tpBankColor">
            {tpBankEmployees.map((employee) => {
              return (
                <EmployeesListItem key="{employee}">
                  <Text variant="body1">{employee.name}</Text>
                  <ButtonsContainer>
                    <ListButtons onClick={() => handleToggle()}>
                      Detalhes
                    </ListButtons>
                    <ListButtons className="editButtons">Editar</ListButtons>
                    <ListButtons className="deleteButtons">Excluir</ListButtons>
                  </ButtonsContainer>
                </EmployeesListItem>
              );
            })}
          </EmployeesRelation>
        </EmployeeListContainer>
      )}
    </>
  );
};

export default EmployeeList;
