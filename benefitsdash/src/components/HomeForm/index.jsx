import React from 'react';
import { useHistory } from 'react-router-dom';
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
import circuloscircles from '../../assets/circuloscircles.svg';
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
        history.push('/rh/acme');
      }
      if (values.email === 'rh@tpbank.com' && values.password === 'tpbank') {
        history.push('/rh/tpbank');
      }
    },
  });

  return (
    <>
      <HomeFormContainer>
        <Container>
          <Text className="title" variant="h3">
            Sejam bem vindes
          </Text>
        </Container>
        <Container className="imagecontainer">
          <Circles src={circuloscircles} />
        </Container>
        <Container>
          <Text className="bold" variant="h4">
            Faça o Login
          </Text>
        </Container>
        <Form onSubmit={formik.handleSubmit}>
          <InputComponent
            id="email"
            name="email"
            label="E-mail"
            value={formik.values.email}
            onChange={formik.handleChange}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
          />
          <InputComponent
            id="password"
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
