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
    padding: 2em 1em 1em 1em;
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
    // justify-content: center;
    background-color: rgb(42, 67, 55);
    margin-top: -30px;

    @media (min-width: 450px) {
      border-radius: 6px;
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
    color: white;
    font-size: 20px;
    width: 50%;
    height: 100%;
    display: flex;
    justify-content: center;
`;

const StyledButton = styled(Button)`
    margin-bottom: 1em;
    background-color: white;
    color: gray;
    border: 2px solid lightgray;
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


export default class TrailPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            favText: <FontAwesomeIcon icon={faHeart} />,
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
            favText: 'Added to favorites'});
    }

    render() {

        const { favText, logText } = this.state;
        
        return(
            <TrailPageContainer>
                <TrailInfoContainer>
                    <StyledButton
                        onClick={this.onReturnToList.bind(this)}>Return To Search Results
                    </StyledButton>
                    <TrailImageContainer>
                        <TrailImage style={{backgroundImage: `url(${this.props.trailInfo[0].imgSmallMed})`}} />
                    </TrailImageContainer>
                    {/* <img src={this.props.trailInfo[0].imgSmallMed} alt='Trail'/> */}
                    <h3>{this.props.trailInfo[0].name}</h3>
                    <p>{this.props.trailInfo[0].summary}</p>
                    <p>{this.props.trailInfo[0].length} miles</p>
                    <p>{this.props.trailInfo[0].stars} ★ | {this.props.trailInfo[0].starVotes} votes</p>
                </TrailInfoContainer>
                <TrailPageNav>
                    <TrailPageNavButtonList>
                        <TrailPageNavButton
                            onClick={this.onFavClick.bind(this)}>
                                {favText}
                            </TrailPageNavButton>
                        <TrailPageNavButton
                            onClick={this.onLogClick.bind(this)}>
                            {logText}
                        </TrailPageNavButton>
                    </TrailPageNavButtonList>
                </TrailPageNav>
            </TrailPageContainer>
        );
    }
}