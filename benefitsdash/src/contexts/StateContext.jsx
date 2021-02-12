import React, { createContext, useContext, useState } from 'react';
// import { v4 as uuidv4 } from 'uuid';

const StateContext = createContext();

const acmePlansDefaultValues = [
  {
    label: 'Plano de Saúde Norte Europa',
    value: 'Plano de Saúde Norte Europa',
  },
  { label: 'Plano Dental Sorriso', value: 'Plano Dental Sorriso' },
];
const tpBankPlansDefaultValues = [
  {
    label: 'Plano de Saúde Pampulha Intermédica',
    value: 'Plano de Saúde Pampulha Intermédica',
  },
  { label: 'Plano Dental Sorriso', value: 'Plano Dental Sorriso' },
  {
    label: 'Plano de Saúde Mental Mente Sã, Corpo São',
    value: 'Plano de Saúde Mental Mente Sã, Corpo São',
  },
];

export const StateProvider = ({ children }) => {
  const [acmePlans, setAcmePlans] = useState(acmePlansDefaultValues);
  const [tpBankPlans, setTpBankPlans] = useState(tpBankPlansDefaultValues);
  const [acmeEmployees, setAcmeEmployees] = useState([]);
  const [tpBankEmployees, setTpBankEmployees] = useState([]);
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
