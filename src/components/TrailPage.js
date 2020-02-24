import React from 'react';
import { Button } from 'react-bootstrap'
import styled from 'styled-components'
import { faHeart, faBook } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const TrailPageContainer = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
`;

const TrailInfoContainer = styled.div`
    width: 100%:
    height: auto;
    display: flex;
    flex-direction: column;
    border-radius: 30px;
    background-color: white;
    padding: 1.5em;
    z-index: 10;
    box-shadow: 0 0px 2.2px rgba(0, 0, 0, 0.02),
    0 0px 5.3px rgba(0, 0, 0, 0.028),
    0 0px 10px rgba(0, 0, 0, 0.035),
    0 0px 17.9px rgba(0, 0, 0, 0.042),
    0 0px 33.4px rgba(0, 0, 0, 0.05),
    0 0px 80px rgba(0, 0, 0, 0.07)
  ;

`;

const TrailPageNav = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: rgb(42, 67, 55);
    margin-top: -50px;
    padding: 40px 0 40px 0;

    @media (min-width: 450px) {
      border-radius: 28px;
    }
`;

const TrailPageNavButtonList = styled.ul`
    width: 100%:
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    list-style: none;
    padding: 0;
    padding-top: 50px;
`;

const TrailPageNavButton = styled.li`
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-size: 20px;
    width: 50%;

    &:hover {
        color: lightgray;
    }

    > * {
        margin: 10px;
    }
    
`;

const StyledButton = styled(Button)`
    width: 90%;
    margin-bottom: 1em;
    background-color: rgb(243, 242, 241);
    color: gray;
    border: 3px solid lightgray;
    border-radius: 30px;
`;

const TrailImageContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 1em;

`;

const TrailImage = styled.div`
    height: 300px;
    width: 100%;
    border-radius: 8px;
    background-size: cover;
    background-repeat: no-repeat;
`;

const TrailDescription = styled.div`
    font-size: 16px;
    color: #7f7f7f;
    margin-bottom: 1em;
`;

const TrailLength = styled.div`
    font-size: 16px;
    font-weight: 600;
    margin-bottom: 1em;
    color: #656565;
`;

const TrailStars = styled.div`
    font-size: 16px;
    color: #7f7f7f;
`;


export default class TrailPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            favText: <div><FontAwesomeIcon icon={faHeart} /> Save Trail</div>,
            logText: <FontAwesomeIcon icon={faBook} />
        }
    }

    onReturnToList() {
        this.props.handleReturnToList()
    }

    onFavClick() {
        this.props.handleFavClick(this.props.trailInfo[0]);
        this.changeFavButtonText();
    }

    onLogClick() {
        this.props.handleLogClick(this.props.trailInfo[0])
    }

    changeFavButtonText = () => {
        this.setState({
            favText: 'Saved!'});
    }

    render() {

        const { favText, logText } = this.state;
        
        return(
            <TrailPageContainer>
                    <StyledButton
                        onClick={this.onReturnToList.bind(this)}>Return To Results
                    </StyledButton>
                <TrailInfoContainer>
                    <TrailImageContainer>
                        <TrailImage style={{backgroundImage: `url(${this.props.trailInfo[0].imgSmallMed})`}} />
                    </TrailImageContainer>
                    {/* <img src={this.props.trailInfo[0].imgSmallMed} alt='Trail'/> */}
                    <h3>{this.props.trailInfo[0].name}</h3>
                    <TrailDescription>{this.props.trailInfo[0].summary}</TrailDescription>
                    <TrailLength>{this.props.trailInfo[0].length} miles</TrailLength>
                    <TrailStars>{this.props.trailInfo[0].stars} ☆ | {this.props.trailInfo[0].starVotes} votes</TrailStars>
                </TrailInfoContainer>
                <TrailPageNav>
                    <TrailPageNavButtonList>
                        <TrailPageNavButton
                            onClick={this.onFavClick.bind(this)}>
                                {favText}
                            </TrailPageNavButton>
                        <TrailPageNavButton
                            onClick={this.onLogClick.bind(this)}>
                            {logText} Log Run
                        </TrailPageNavButton>
                    </TrailPageNavButtonList>
                </TrailPageNav>
            </TrailPageContainer>
        );
    }
}