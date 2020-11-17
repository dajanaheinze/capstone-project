import React from 'react';
import styled from 'styled-components/macro';
import meditation from './assets/image-meditation.jpg'


export default function TutorialTemplate (){
    return (
    <TutorialWrapper>
        <img src={meditation} alt=""/>
        <h2>5 Minuten of...</h2>
        <p>Lorem ipsum dolor sit amet consectetur Quos accusamus libero minus ullam, beataelibero minus ullam, beatae possimus nostr</p>
    </TutorialWrapper>
    )   
}

const TutorialWrapper = styled.div`
    display: grid;
    border: 1px solid var(--primary-border);
    background-color: var(--secendary-background); 
    box-shadow:  20px 20px 60px var(--primary-shadow),
                -10px -10px 50px var(--secendary-shadow);
    margin-left: 60px;
    margin-top: 30px;
    padding:0 15px 20px 15px;
    place-items: center;
    width: 70%;

    img {
        border-radius: 2px;
        margin-top: 25px;
        width: 80%;
    }

    h2 {
        font-size: 18px;
        font-weight: 500;
        text-align: center;
        text-transform: uppercase;
    }

    p {
        font-size: 15px;
        font-weight: 200;
        margin: 0;
        padding: 0 10px 0 10px;
        text-align: center;
    }
`