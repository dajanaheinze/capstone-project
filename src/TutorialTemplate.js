import React from 'react';
import styled from 'styled-components/macro';
import meditation from './assets/image-meditation.jpg'


export default function TutorialTemplate (){
    return (
    <TutorialWrapper>
        <img src={meditation} alt=""/>
        <h2>Meditation</h2>
        <p>Lorem ipsum dolor sit amet consectetur Quos accusamus libero minus ullam, beataelibero minus ullam, beatae possimus nostr</p>
    </TutorialWrapper>
    )   
}

const TutorialWrapper = styled.div`
    display: grid;
    border: 1px solid #F2F2F2;
    background-color: #F2F2F2; 
    border-radius: 5px; 
    margin-left: 40px;
    margin-top: 30px;
    place-items: center;
    width: 80%;

    img {
        border-radius: 2px;
        margin-top: 20px;
        width: 60%;
    
       
    }

    h2 {
        font-size: 18px;
        text-align: center;
        text-transform: uppercase;
    }

    p {
        font-size: 16px;
        margin: 0;
        padding: 0;
        text-align: center;
    }


`
