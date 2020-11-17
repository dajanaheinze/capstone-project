import { createGlobalStyle } from 'styled-components/macro';

export default createGlobalStyle`
*, ::after, ::before {
    box-sizing: border-box;
    font-family: 'Work Sans', sans-serif;
}

body {
    margin:0;
    font-size: 112.5%;
    background-color: var(--primary-background);
    color: var(--primary-text);
}

 :root {
    --primary-background: #A5A697;
    --secendary-background: #F2F2F2;
    --primary-text: #262626;
    --primary-border: #F2F2F2;
    --primary-shadow: #8c8d80;
    --secendary-shadow: #bebfae;

    --primary-black: #0D0D0D;
    --primary-anthrazit: #262626;
    --primary-white:  #F2F2F2;

}
`