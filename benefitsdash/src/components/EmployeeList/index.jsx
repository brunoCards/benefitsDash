import React from 'react';
import { useSelect } from '../../contexts/FormContext';
import {
  EmployeeListContainer,
  EmployeesRelation,
  Text,
  EmployeesListItem,
  ListButtons,
  ButtonsContainer,
} from './styles';

const EmployeeList = ({ isAcme }) => {
  const { acmeEmployee, tpBankEmployee, isOpen, setIsOpen } = useSelect();

  const handleToggle = () => setIsOpen(!isOpen);

  console.log(isOpen);
  return (
    <>
      {isAcme ? (
        <EmployeeListContainer>
          <Text className="bold" variant="h6">
            Relação de Funcionários(as)
          </Text>
          <EmployeesRelation className="acmeColor">
            {acmeEmployee.map((employee) => {
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
      ) : (
        <EmployeeListContainer>
          <Text className="bold" variant="h6">
            Relação de Funcionários(as)
          </Text>
          <EmployeesRelation className="tpBankColor">
            {tpBankEmployee.map((employee) => {
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
