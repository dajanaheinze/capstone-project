import React from 'react';
import styled from 'styled-components/macro';
import meditation from './assets/image-meditation.jpg'


export default function TutorialTemplate (){
    return (
    <TutorialWrapper>
        <img src={meditation} alt=""/>
            <h2> Meditation 5 min.</h2>
                <ul>
                    <li>Text 1</li>
                    <li>Text 2</li>
                    <li>Text 3</li>
                </ul>
    </TutorialWrapper>
    )   
}

const TutorialWrapper = styled.div`
    display: grid;
    justify-content: center;
    align-items: center;
    width: 90%;
    border: 2px, none, grey;
    border-radius: 2px;

    img {
        display: grid;
        justify-content: center;
        width: 100px;
        height: 100px;
        border-radius: 2px;
    }

    li {
        text-decoration: none;
    }


`
