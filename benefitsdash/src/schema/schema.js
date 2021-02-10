import * as Yup from 'yup';

const schema = Yup.object().shape({
  email: Yup.string()
    .email('O E-mail é inválido!')
    .required('O E-mail é obrigatório!')
    .matches(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i),
  password: Yup.string().required('A senha é obrigatória!'),
});

export default schema;
