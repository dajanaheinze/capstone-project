import { createGlobalStyle } from 'styled-components/macro'

export default createGlobalStyle`
*, ::after, ::before {
    box-sizing: border-box;
    font-family: 'Work Sans', sans-serif;
}
:root {
    --primary-background: #A5A697;
    --secondary-background: #F2F2F2;
    --primary-text: #080808;
    --secondary-text:#323331;
    --primary-border: #F2F2F2;
    --primary-shadow: #8c8d80;
    --secondary-shadow: #bebfae;
    --tertiary-shadow: #757670;
    --primary-headline: #262626;

}

body {
    background-color: var(--primary-background);
    color: var(--primary-text);
    font-size: 112.5%;
    margin:0;  
   
}
h2 {
    font-size: 1em;
    font-weight: 500;
    text-align: center;
    text-transform: uppercase;
  }
  h3 {
    font-size: 0.8em;
    font-weight: 400;
    margin-top: 0;
    text-align: center;
    text-transform: uppercase;
  }

  p {
    font-size: 0.8em;
    font-weight: 200;
    margin-top: 10px;
    padding: 0 10px;
    text-align: center;
  }

`
