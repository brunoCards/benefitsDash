import * as Yup from 'yup';

const inclusionAcmeFormSchema = Yup.object().shape({
  name: Yup.string()
    .matches(
      /^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$/,
      'Somente é permitido letras!'
    )
    .required('Este campo é obrigatório!'),

  cpf: Yup.string()
    .matches(/^[0-9]+$/, 'Somente é permitido números!')
    .max(11, 'É permitido apenas 11 caractéres')
    .required('Este campo é obrigatório!'),

  admitDate: Yup.date().required('Este campo é obrigatório!'),

  email: Yup.string()
    .email('E-mail inválido!')
    .matches(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i)
    .required('Este campo é obrigatório!'),

  weight: Yup.string()
    .matches(/^[0-9]+$/, 'Somente é permitido números!')
    .required('Este campo é obrigatório!'),

  height: Yup.string()
    .matches(/^[0-9]+$/, 'Somente é permitido números!')
    .required('Este campo é obrigatório!'),
});
export default inclusionAcmeFormSchema;
