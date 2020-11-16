import React from 'react';
import styled from 'styled-components/macro';
import meditation from './assets/image-meditation.jpg'


export default function TutorialTemplate (){
    return (
    <TutorialWrapper>
        <img src={meditation} alt=""/>
            <h2>Meditation</h2>
                <ul>
                    <li>Lorem ipsum dolor sit amet consectetur </li>
                    <li>Quos accusamus libero minus ullam, beatae p</li>
                    <li>libero minus ullam, beatae possimus nostr</li>
                </ul>
    </TutorialWrapper>
    )   
}

const TutorialWrapper = styled.div`
    display: grid;
    place-items: center;
    border: 10px black;
    margin-top: 25px;


    img {
        width: 350px;
        height: 250px;
        border-radius: 2px;
    }

    h2 {
    font-size: 20px;
    text-align: center;
    text-transform: uppercase;
    }

    li {
        list-style-type: none;
        font-size: 16px;
    }


`
