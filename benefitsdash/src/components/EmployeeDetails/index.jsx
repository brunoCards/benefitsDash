import React from 'react';
import { useStateContext } from '../../contexts/StateContext';
import {
  MainContainer,
  Text,
  TextContainer,
  EmployeeList,
  EmployeeListItem,
  ListsContainer,
  AdjustLayoutBox,
} from './styles';

const EmployeeDetails = ({ isAcme }) => {
  const {
    acmeEmployees,
    tpBankEmployees,
    isOpen,
    setIsOpen,
  } = useStateContext();

  const handleToggle = () => setIsOpen(!isOpen);

  return (
    <>
      {isAcme ? (
        <MainContainer className={isOpen ? 'hide' : ' '}>
          <TextContainer>
            <Text className="title" variant="body1">
              Detalhes do funcionário
            </Text>
            <Text
              id="closebutton"
              variant="button"
              className={isOpen ? 'hide' : ' '}
              onClick={() => handleToggle()}
            >
              Fechar
            </Text>
          </TextContainer>
          <ListsContainer className="acmeColor">
            <AdjustLayoutBox />
            {acmeEmployees.map((employee) => {
              return (
                <>
                  <EmployeeList>
                    <EmployeeListItem className="listtitle">
                      <Text className="title">Planos vigentes</Text>
                    </EmployeeListItem>
                    <EmployeeListItem className="healhtplan">
                      {employee.plans.health}
                    </EmployeeListItem>
                    <EmployeeListItem className="dentalplan">
                      {employee.plans.dental}
                    </EmployeeListItem>
                    <EmployeeListItem className="employeename">
                      <Text variant="body1">
                        <span className="bold">Nome: </span>
                        {employee.name}
                      </Text>
                    </EmployeeListItem>
                    <EmployeeListItem className="employeedocument">
                      <Text variant="body1">
                        <span className="bold">Cpf: </span>
                        {employee.cpf}
                      </Text>
                    </EmployeeListItem>
                    <EmployeeListItem className="admitdate">
                      <Text variant="body1">
                        <span className="bold">Data de admissão: </span>
                        {employee.admitdate}
                      </Text>
                    </EmployeeListItem>
                    <EmployeeListItem className="weightheight">
                      <Text variant="body1">
                        <span className="bold">Peso: </span>
                        {employee.weight}
                        &nbsp; &nbsp;
                        <span className="bold">Altura: </span>
                        {employee.height}
                      </Text>
                    </EmployeeListItem>
                    <EmployeeListItem className="email">
                      <Text variant="body1">
                        <span className="bold">Email: </span>
                        {employee.email}
                      </Text>
                    </EmployeeListItem>
                  </EmployeeList>
                </>
              );
            })}
          </ListsContainer>
        </MainContainer>
      ) : (
        <MainContainer className={isOpen ? 'hide' : ' '}>
          <TextContainer>
            <Text className="title" variant="body1">
              Detalhes do funcionário
            </Text>
            <Text
              id="closebutton"
              variant="button"
              className={isOpen ? 'hide' : ' '}
              onClick={() => handleToggle()}
            >
              Fechar
            </Text>
          </TextContainer>
          <ListsContainer className="tpBankColor">
            <AdjustLayoutBox />
            {tpBankEmployees.map((employee) => {
              return (
                <>
                  <EmployeeList>
                    <EmployeeListItem className="listtitle">
                      <Text className="title">Planos vigentes</Text>
                    </EmployeeListItem>
                    <EmployeeListItem className="healhtplan">
                      {employee.plans.health}
                    </EmployeeListItem>
                    <EmployeeListItem className="dentalplan">
                      {employee.plans.dental}
                    </EmployeeListItem>
                    <EmployeeListItem className="mentalplan">
                      {employee.plans.mental}
                    </EmployeeListItem>
                    <EmployeeListItem className="employeename">
                      <Text variant="body1">
                        <span className="bold">Nome: </span>
                        {employee.name}
                      </Text>
                    </EmployeeListItem>
                    <EmployeeListItem className="employeedocument">
                      <Text variant="body1">
                        <span className="bold">Cpf: </span>
                        {employee.cpf}
                      </Text>
                    </EmployeeListItem>
                    <EmployeeListItem className="admitdate">
                      <Text variant="body1">
                        <span className="bold">Data de admissão: </span>
                        {employee.admitdate}
                      </Text>
                    </EmployeeListItem>
                    <EmployeeListItem className="weightheight">
                      <Text variant="body1">
                        <span className="bold">Peso: </span>
                        {employee.weight}
                        &nbsp; &nbsp;
                        <span className="bold">Altura: </span>
                        {employee.height}
                      </Text>
                    </EmployeeListItem>
                    <EmployeeListItem className="meditatedhours">
                      <Text variant="body1">
                        <span className="bold">Horas meditadas: </span>
                        {employee.meditatedHours}
                      </Text>
                    </EmployeeListItem>
                    <EmployeeListItem className="address">
                      <Text variant="body1">
                        <span className="bold">Endereço: </span>
                        {employee.address}
                      </Text>
                    </EmployeeListItem>
                  </EmployeeList>
                </>
              );
            })}
          </ListsContainer>
        </MainContainer>
      )}
    </>
  );
};

export default EmployeeDetails;
