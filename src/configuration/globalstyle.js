import { createGlobalStyle } from 'styled-components';
 
const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;
    scroll-behavior: smooth;
    background: #f4f5fd;
   
  }
/*scrollbar design*/
body::-webkit-scrollbar {
    width: 5px;
}
body::-webkit-scrollbar-track {
    background: #e6e6e6;
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
}
body::-webkit-scrollbar-thumb {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    background: #3c6382;
}

`;
 
export default GlobalStyle;
