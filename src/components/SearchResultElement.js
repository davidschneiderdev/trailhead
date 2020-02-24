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

    &:hover {
        box-shadow: 0 0 3pt 2pt lightblue;
}
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
    background-color: #EBF2FA;
    padding: 1em;
    border-radius: 10px;
`;

const ElementTitle = styled.div`
    font-size: 18px;
    font-weight: 700;
    margin: 0;

`;

const ElementLocation = styled.div`
    font-size: 14px;
    font-weight: 400;
    margin: 0;
    color: #656565

`;

const ElementLength = styled.div`
    font-size: 14px;
    font-weight: 500;
    margin: 0;
    color: #656565;

`;

const ElementStars = styled.div`
    font-size: 14px;
    font-weight: 400;
    margin: 0;
    color: #7f7f7f;
`;

export default class SearchResultElement extends React.Component {

    onTrailSelect() {
        this.props.onTrailClick(this.props.id)
    }

    render() {

        let isImage = this.props.imgSrc;
        let content;
        let textWidth;

        if (isImage) {
            content = <ElementImage style={{backgroundImage: `url(${this.props.imgSrc})`}}></ElementImage>;
        } else {
            content = <ElementImage style={{display: `none`}}></ElementImage>;
            textWidth = {width: '100%'} ;
        }

            return(
                <ElementContainer
                    onClick={this.onTrailSelect.bind(this)}>
                    {content}
                    <ElementText
                        style={textWidth}>
                        <ElementTextTop>
                            <ElementTitle>{this.props.name}</ElementTitle>
                            <ElementLocation>{this.props.location}</ElementLocation>
                        </ElementTextTop>
                        <ElementTextBottom>
                            <ElementLength>{this.props.length} miles</ElementLength>
                            <ElementStars>{this.props.stars} ★ | {this.props.numRatings} Ratings</ElementStars>
                        </ElementTextBottom>
                    </ElementText>
                </ElementContainer>
            );
        }
    }
