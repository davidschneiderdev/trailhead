import React from 'react'
import styled from 'styled-components'

const ElementContainer = styled.div`
    height: auto;
    width: 100%;
    border: 1px solid gray;
    border-radius: 6px;
    padding: 2em;
    margin-bottom: 2em;
    background-color: lightgray;
`;

const ElementLine = styled.p`
    margin: 0;
`;

export default function SearchResultElement(props) {
    return(
        <ElementContainer>
            <ElementLine>{props.name}</ElementLine>
            <ElementLine>{props.location}</ElementLine>
            <ElementLine>{props.summary}</ElementLine>
            <ElementLine>{props.length} miles</ElementLine>
        </ElementContainer>
    );
}