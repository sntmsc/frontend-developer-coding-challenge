import { createGlobalStyle } from 'styled-components';
 
const GlobalStyle = createGlobalStyle`

@font-face{
  font-family: 'Montserrat', sans serif;
  src:url('https://fonts.googleapis.com/css2?family=Montserrat:wght@600;900&display=swap')
  }
html,
body {
  padding: 0;
  margin: 0;
  font-family: 'Montserrat',  -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  scroll-behavior: smooth;
  width: 100%;
}

a {
    color: inherit;
    text-decoration: none;
  }
  
  * {
    box-sizing: border-box;
  }
  
`;
 
export default GlobalStyle;