import React from 'react';
import styled from 'styled-components/macro';
import meditation from './assets/image-meditation.jpg'


export default function TutorialTemplate (){
    return (
    <TutorialWrapper>
        <img src={meditation} alt=""/>
        <h2>Titel</h2>
        <p>Lorem ipsum dolor sit amet consectetur Quos accusamus libero minus ullam, beataelibero minus ullam, beatae possimus nostr</p>
    </TutorialWrapper>
    )   
}

const TutorialWrapper = styled.div`
    display: grid;
    border: 1px solid var(--primary-border);
    background-color: var(--secendary-background); 
    border-radius: 5px; 
    box-shadow:  20px 20px 60px var(--primary-shadow),
                -10px -10px 50px var(--secendary-shadow);
    margin-left: 50px;
    margin-top: 30px;
    padding:0 15px 15px 15px;
    place-items: center;
    width: 70%;

    img {
        border-radius: 2px;
        margin-top: 20px;
        width: 70%;
    }

    h2 {
        font-size: 18px;
        text-align: center;
        text-transform: uppercase;
    }

    p {
        font-size: 15px;
        margin: 0;
        padding: 0;
        text-align: center;
    }
`