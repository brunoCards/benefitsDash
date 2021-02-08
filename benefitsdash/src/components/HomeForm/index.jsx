import React from 'react';
import useLogin from '../../hooks/useLogin';
import { useSelect } from '../../contexts/FormContext';
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

const HomeForm = ({ isLoginAcme }) => {
  const [handleLogin] = useLogin();
  const { form, handleChangeInput } = useSelect();
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
        <Form>
          <InputComponent
            name="email"
            value={form.email}
            onChange={handleChangeInput}
            placeholder="Email"
          />
          <InputComponent
            name="password"
            value={form.password}
            onChange={handleChangeInput}
            placeholder="Senha"
          />

          <LoginButton onClick={() => handleLogin(form.email, form.password)}>
            login
          </LoginButton>
        </Form>
      </HomeFormContainer>
    </>
  );
};

export default HomeForm;
