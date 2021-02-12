import React from 'react';
import { useHistory } from 'react-router-dom';
import { useStyles } from '../InputComponent/styles';

import schema from '../../schema/schema';
import { useFormik } from 'formik';
import {
  Form,
  Container,
  Text,
  HomeFormContainer,
  LoginButton,
  Circles,
} from './styles';
import circles from '../../assets/circles.svg';
import InputComponent from '../InputComponent';

const HomeForm = () => {
  const history = useHistory();
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: schema,
    onSubmit: (values) => {
      if (values.email === 'rh@acme.com' && values.password === 'acme') {
        return history.push('/rh/acme');
      }
      if (values.email === 'rh@tpbank.com' && values.password === 'tpbank') {
        return history.push('/rh/tpbank');
      }
      alert('E-mail ou senha incorretos');
    },
  });

  const classes = useStyles();

  return (
    <>
      <HomeFormContainer>
        <Container>
          <Text className="title" variant="h3">
            Sejam bem vindes
          </Text>
        </Container>
        <Container className="imagecontainer">
          <Circles src={circles} />
        </Container>
        <Container>
          <Text className="bold" variant="h4">
            Faça o Login
          </Text>
        </Container>
        <Form onSubmit={formik.handleSubmit}>
          <InputComponent
            className={classes.root}
            name="email"
            label="E-mail"
            value={formik.values.email}
            onChange={formik.handleChange}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
          />
          <InputComponent
            className={classes.root}
            name="password"
            label="Senha"
            value={formik.values.password}
            onChange={formik.handleChange}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
          />
          <LoginButton type="submit">login</LoginButton>
        </Form>
      </HomeFormContainer>
    </>
  );
};

export default HomeForm;
