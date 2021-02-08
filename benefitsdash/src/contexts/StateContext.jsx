import React, { createContext, useContext, useState } from 'react';

const StateContext = createContext();

const employeesToAcme = [];
const employeesToTpBank = [];

export const StateProvider = ({ children }) => {
  const [acmePlans, setAcmePlans] = useState();
  const [tpBankPlans, setTpBankPlans] = useState();
  const [acmeEmployees, setAcmeEmployees] = useState(employeesToAcme);
  const [tpBankEmployees, setTpBankEmployees] = useState(employeesToTpBank);
  const [isOpen, setIsOpen] = useState(true);
  const [selected, setSelected] = useState([]);

  return (
    <StateContext.Provider
      value={{
        acmePlans,
        setAcmePlans,
        tpBankPlans,
        setTpBankPlans,
        acmeEmployees,
        setAcmeEmployees,
        tpBankEmployees,
        setTpBankEmployees,
        isOpen,
        setIsOpen,
        selected,
        setSelected,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => {
  const context = useContext(StateContext);
  const {
    acmePlans,
    setAcmePlans,
    tpBankPlans,
    setTpBankPlans,
    acmeEmployees,
    setAcmeEmployees,
    tpBankEmployees,
    setTpBankEmployees,
    isOpen,
    setIsOpen,
    selected,
    setSelected,
  } = context;
  return {
    acmePlans,
    setAcmePlans,
    tpBankPlans,
    setTpBankPlans,
    acmeEmployees,
    setAcmeEmployees,
    tpBankEmployees,
    setTpBankEmployees,
    isOpen,
    setIsOpen,
    selected,
    setSelected,
  };
};
