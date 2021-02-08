// import { toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// const handleNameErrorNotifies = () => {
//   toast.error(
//     'Nome inválido, não é permitido caractéres diferentes de letras ',
//     {
//       position: toast.POSITION.TOP_CENTER,
//       autoClose: 7000,
//     }
//   );
// };
// const handleCpfErrorNotifies = () => {
//   toast.error('Cpf inválido! o campo deve ter pelo menos 11 caracteres.', {
//     position: toast.POSITION.TOP_CENTER,
//     autoClose: 3000,
//   });
// };
// const handleEmailErrorNotifies = () => {
//   toast.error('Email inválido!', {
//     position: toast.POSITION.TOP_CENTER,
//     autoClose: 3000,
//   });
// };
// const handleWeightErrorNotifies = () => {
//   toast.error('O campo Peso está inválido!', {
//     position: toast.POSITION.TOP_CENTER,
//     autoClose: 3000,
//   });
// };
// const handleHeightErrorNotifies = () => {
//   toast.error('O campo Altura está inválido!', {
//     position: toast.POSITION.TOP_CENTER,
//     autoClose: 3000,
//   });
// };
// const handleHoursErrorNotifies = () => {
//   toast.error('O campo Horas meditadas está inválido!', {
//     position: toast.POSITION.TOP_CENTER,
//     autoClose: 3000,
//   });
// };

// export const handleNameValidation = (name) => {
//   const lettersRegExPattern = /^[a-zà-úA-ZÀ-Ú]*$/; //aceita letras maiúsculas e minúsculas com e sem acento
//   const patternTest = lettersRegExPattern.test(name);
//   if (patternTest === true && name !== '') {
//     return;
//   } else {
//     return handleNameErrorNotifies();
//   }
// };
// export const handleCpfValidation = (cpf) => {
//   return cpf
//     .replace(/\D/g, '')
//     .replace(/(\d{3})(\d)/, '$1.$2')
//     .replace(/(\d{3})(\d)/, '$1.$2')
//     .replace(/(\d{3})(\d{1,2})/, '$1-$2');
// };
// export const handleEmailValidation = (email) => {
//   const emailRegexPattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/gi;
//   const patternTest = emailRegexPattern.test(email);
//   if (patternTest === true && email !== '') {
//     return;
//   } else {
//     return handleEmailErrorNotifies();
//   }
// };
// export const handleWeightValidation = (weight) => {
//   const numbersRegexPattern = /^[0-9 ,]+$/;
//   const patternTest = numbersRegexPattern.test(weight);
//   if (patternTest === true && weight !== '' && weight !== ',') {
//     return;
//   } else {
//     return handleWeightErrorNotifies();
//   }
// };
// export const handleHeightValidation = (height) => {
//   const numbersRegexPattern = /^[0-9,]+$/;
//   const patternTest = numbersRegexPattern.test(height);
//   if (patternTest === true && height !== '' && height !== ',') {
//     return;
//   } else {
//     return handleHeightErrorNotifies();
//   }
// };
// export const handleHoursValidation = (hours) => {
//   const numbersRegexPattern = /^[0-9,]+$/;
//   const patternTest = numbersRegexPattern.test(hours);
//   if (patternTest === true && hours !== '' && hours !== ',') {
//     return;
//   } else {
//     return handleHoursErrorNotifies();
//   }
// };
