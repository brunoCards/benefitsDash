import React from 'react';
import { useFormik } from 'formik';
import { useStyles } from '../InputComponent/styles';
import { useStateContext } from '../../contexts/StateContext';
import inclusionAcmeFormSchema from '../../schema/inclusionAcmeFormSchema';

import {
  FormContainer,
  Title,
  Form,
  SubmitButton,
  CancelButton,
} from './styles';
import InputComponent from '../InputComponent';
import { useHistory } from 'react-router-dom';

const InclusionForm = ({ isNorteEuropa }) => {
  const {
    selected,
    acmeEmployees,
    setAcmeEmployees,
    tpBankEmployees,
    setTpBankEmployees,
  } = useStateContext();
  const history = useHistory();
  const formik = useFormik({
    initialValues: {
      name: '',
      cpf: '',
      admitDate: '',
      email: '',
      weight: '',
      height: '',
    },
    validationSchema: inclusionAcmeFormSchema,
    onSubmit: (values) => {
      if (selected.length > 0) {
        const newFormData = {
          name: formik.values.name,
          cpf: formik.values.cpf,
          admitDate: formik.values.admitDate,
          email: formik.values.email,
          weight: formik.values.weight,
          height: formik.values.height,
          plans: { selected },
        };

        setAcmeEmployees([...acmeEmployees, newFormData]);
        alert('O empregado foi cadastrado com sucesso!');
        return history.push('/rh/acme');
      }
    },
  });

  const classes = useStyles();
  return (
    <>
      <FormContainer>
        <Title variant="h4">Formulário de Inclusão</Title>
        <Form onSubmit={formik.handleSubmit}>
          <InputComponent
            className={classes.name}
            type="text"
            name="name"
            label="Nome"
            value={formik.values.name}
            onChange={formik.handleChange}
            error={formik.touched.name && Boolean(formik.errors.name)}
            helperText={formik.touched.name && formik.errors.name}
          />
          <InputComponent
            className={classes.cpf}
            type="text"
            name="cpf"
            label="Cpf"
            value={formik.values.cpf}
            onChange={formik.handleChange}
            error={formik.touched.cpf && Boolean(formik.errors.cpf)}
            helperText={formik.touched.cpf && formik.errors.cpf}
          />
          {selected.length === 1 &&
          selected[0].label === 'Plano Dental Sorriso' ? (
            <>
              <InputComponent
                className={classes.admitDate}
                name="admitDate"
                placeholder="Data de admissão"
                disabled
              />
              <InputComponent
                className={classes.email}
                name="email"
                placeholder="E-mail"
                disabled
              />
            </>
          ) : (
            <>
              <InputComponent
                className={classes.admitDate}
                name="admitDate"
                onFocus={(event) => {
                  event.currentTarget.type = 'date';
                  event.currentTarget.focus();
                }}
                placeholder="Data de admissão"
                value={formik.values.admitDate}
                onChange={formik.handleChange}
                error={
                  formik.touched.admitDate && Boolean(formik.errors.admitDate)
                }
                helperText={formik.touched.admitDate && formik.errors.admitDate}
              />
              <InputComponent
                className={classes.email}
                name="email"
                label="E-mail"
                value={formik.values.email}
                onChange={formik.handleChange}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
              />
            </>
          )}
          {selected.length === 1 &&
          selected[0].label === 'Plano de Saúde Norte Europa' ? (
            <>
              <InputComponent
                className={classes.weight}
                name="weight"
                label="Peso(kg)"
                disabled
              />
              <InputComponent
                className={classes.height}
                name="height"
                label="Altura(cm)"
                disabled
              />
            </>
          ) : (
            <>
              <InputComponent
                className={classes.weight}
                name="weight"
                label="Peso(kg)"
                value={formik.values.weight}
                onChange={formik.handleChange}
                error={formik.touched.weight && Boolean(formik.errors.weight)}
                helperText={formik.touched.weight && formik.errors.weight}
              />
              <InputComponent
                className={classes.height}
                name="height"
                label="Altura(cm)"
                value={formik.values.height}
                onChange={formik.handleChange}
                error={formik.touched.height && Boolean(formik.errors.height)}
                helperText={formik.touched.height && formik.errors.height}
              />
            </>
          )}
          <SubmitButton type="submit">Incluir</SubmitButton>
          <CancelButton type="reset">Cancelar</CancelButton>
        </Form>
      </FormContainer>
    </>
  );
};

export default InclusionForm;
