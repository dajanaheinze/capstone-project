import React from 'react';
import styled from 'styled-components/macro';
import meditation from './assets/image-meditation.jpg'


export default function TutorialTemplate (){
    return (
    <TutorialWrapper>
        <img src={meditation} alt=""/>
        <h2>5 Minuten...</h2>
        <h3>Meditation</h3>
        <p>Schritt 1 - wähle deinen Sitz. Setzt dich aufrecht auf den Boden mit gekreuzten Beinen oder auf einen Stuhl mit den Füßen am Boden. Lege deine Hände auf deinen Oberschenkeln ab. Schritt 2 - sei Still, schließ deine Augen. Schritt 3 - fokussiere, deinen Atem auf das Mantra las los. Mit jeder Einatmung denkst du las mit jeder Ausatmung denkst du los. Stell dir einen Timer auf 5 Minuten. Beobachte nach der Übung für einen kurzen Moment wie sich dein Körper anfühlt.</p>
    </TutorialWrapper>
    )   
}

const TutorialWrapper = styled.div`
    display: grid;
    border: 1px solid var(--primary-border);
    background-color: var(--secondary-background); 
    box-shadow:  20px 20px 60px var(--primary-shadow),
                -10px -10px 50px var(--secondary-shadow);
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
        font-size: 1em;
        font-weight: 500;
        text-align: center;
        text-transform: uppercase;
    }
    h3 {
        font-size: 0.9em;
        font-weight: 400;
        margin-top: 0;
        text-align: center;
    }

    p {
        font-size: 0.8em;
        font-weight: 200;
        margin: 0;
        padding: 0 10px 0 10px;
        text-align: center;
    }
`