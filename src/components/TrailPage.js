import React from 'react';
import { Button } from 'react-bootstrap'
import styled from 'styled-components'
import { faHeart, faBook } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const TrailPageContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
`;

const TrailInfoContainer = styled.div`
    width: 100%:
    height: 90%;
    display: flex;
    flex-direction: column;
    border: 1px solid gray;
    border-radius: 6px;
    padding: 1em;
`;

const TrailPageNav = styled.div`
    width: 100%;
    height: 10%;
    display: flex;
    flex-direction: column;
    margin-top: 1em;

`;

const TrailPageNavButtonList = styled.ul`
    width: 100%:
    height: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    list-style: none;
    margin: 0;
    padding: 0;
`;

const StyledButton = styled(Button)`
    margin-bottom: 1em;
    background-color: white;
    color: gray;
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
                <StyledButton
                    onClick={this.onReturnToList.bind(this)}>Return To Trail List</StyledButton>
                <TrailInfoContainer>
                    <p>Name: {this.props.trailInfo[0].name}</p>
                    <p>Summary: {this.props.trailInfo[0].summary}</p>
                    <p>Trail Type: {this.props.trailInfo[0].type}</p>
                    <p>Length: {this.props.trailInfo[0].length} miles</p>
                    <p>Stars: {this.props.trailInfo[0].stars} ★ | {this.props.trailInfo[0].starVotes} votes</p>
                    <p>Id: {this.props.trailId}</p>
                </TrailInfoContainer>
                <TrailPageNav>
                    <TrailPageNavButtonList>
                        <button
                            onClick={this.onFavClick.bind(this)}>
                                {favText}
                            </button>
                        <button
                            onClick={this.onLogClick.bind(this)}>
                            {logText}
                        </button>
                    </TrailPageNavButtonList>
                </TrailPageNav>
            </TrailPageContainer>
        );
    }
}