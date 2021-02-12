import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html{
  font-family: 'Roboto', sans-serif;
}

body, #root{
  width: 100vw;
  height: 100vh;
}

:root{
  --white: #fffffc;
  --black: #000001;
  --pink: #A91f6c;
  --purple: #8e44ad;
  --blue: #2980b9;
  --green: #2E979A;
  --red: #FF6B6B;
  --grey: #a0a0a0;

}
`;
export default GlobalStyle;
