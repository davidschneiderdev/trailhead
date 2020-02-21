import React from 'react'
import styled from 'styled-components'

const ElementContainer = styled.div`
    height: auto;
    width: 100%;
    display: flex;
    border-radius: 10px;
    margin-bottom: 2em;
    background-color: white;
    box-shadow:
  0 0px 2.2px rgba(0, 0, 0, 0.02),
  0 0px 5.3px rgba(0, 0, 0, 0.028),
  0 0px 10px rgba(0, 0, 0, 0.035),
  0 0px 17.9px rgba(0, 0, 0, 0.042),
  0 0px 33.4px rgba(0, 0, 0, 0.05),
  0 0px 80px rgba(0, 0, 0, 0.07)
;

`;

const ElementImage = styled.div`
    width: 30%;
    height: auto;
    background-size: cover;
    background-repeat: no-repeat;
    border-radius: 2px;
`;

const ElementText = styled.div`
    border-radius: 10px;
    width: 70%;
`;

const ElementTextTop = styled.div`
    width: 100%;
    height: 55%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: white;
    padding: 1em;
    border-radius: 10px;
`;

const ElementTextBottom = styled.div`
    width: 100%;
    height: 45%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: #f5f5f5;
    padding: 1em;
    border-radius: 10px;
`;

const ElementTitle = styled.div`
    font-size: 16px;
    font-weight: 700;
    margin: 0;

`;

const ElementLocation = styled.div`
    font-size: 12px;
    font-weight: 400;
    margin: 0;

`;

const ElementLine = styled.div`
    font-size: 12px;
    font-weight: 400;
    margin: 0;
`;

export default class SearchResultElement extends React.Component {

    onTrailSelect() {
        this.props.onTrailClick(this.props.id)
    }

    render() {
            return(
                <ElementContainer
                    onClick={this.onTrailSelect.bind(this)}>
                    <ElementImage style={{backgroundImage: `url(${this.props.imgSrc})`}}></ElementImage>
                    <ElementText>
                        <ElementTextTop>
                            <ElementTitle>{this.props.name}</ElementTitle>
                            <ElementLocation>{this.props.location}</ElementLocation>
                        </ElementTextTop>
                        <ElementTextBottom>
                            <ElementLine>{this.props.length} miles</ElementLine>
                            <ElementLine>{this.props.stars} ★ | {this.props.numRatings} Ratings</ElementLine>
                        </ElementTextBottom>
                    </ElementText>
                </ElementContainer>
            );
        }
    }
