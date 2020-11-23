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
    --primary-border: #F2F2F2;
    --primary-shadow: #8c8d80;
    --secondary-shadow: #bebfae;

    --primary-black: #0D0D0D;
    --primary-anthrazit: #262626;
    --primary-white:  #F2F2F2;

}

body {
    background-color: var(--primary-background);
    color: var(--primary-text);
    font-size: 112.5%;
    margin:0;  
   
}
`
