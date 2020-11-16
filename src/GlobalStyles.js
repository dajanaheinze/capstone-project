import { createGlobalStyle } from 'styled-components/macro';
@import url('https://fonts.googleapis.com/css2?family=Work+Sans:ital,wght@0,100;0,200;0,300;0,400;0,600;1,100;1,200;1,300&display=swap');

export default createGlobalStyle`
  *{
    box-sizing: border-box;
  }  

  html {
      font-family: 'Work Sans', sans-serif;
      font-size: 1.2em;
  }
 
  body {
    margin: 0;
  }
`;