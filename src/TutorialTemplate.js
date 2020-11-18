import React from 'react';
import styled from 'styled-components/macro';
import meditation from './assets/image-meditation.jpg'
import data from './data/content.json'
import {useState, useEffect}from 'react'




export default function TutorialTemplate (){
 
    const [content, setContent] = useState([])
    useEffect(() => setContent(data.content), [])

    return (<div>{content.map(({headline, title, image, description}) =>
    (<TutorialWrapper>
        <img src={image} alt=""/>
        <h2>{headline}</h2>
        <h3>{title}</h3>
        <p>{description}</p>
    </TutorialWrapper>
    )
    )}
    </div>)
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