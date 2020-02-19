import React from 'react';
import { Button } from 'react-bootstrap'
import styled from 'styled-components'

const StyledButton = styled(Button)`
    margin-bottom: 1em;
    background-color: white;
    color: gray;
`;

export default class TrailPage extends React.Component {

    onReturnToList() {
        this.props.handleReturnToList()
    }

    render() {
        return(
            <div>
                <StyledButton
                    onClick={this.onReturnToList.bind(this)}>Return To Trail List</StyledButton>
                <p>Name: {this.props.trailInfo[0].name}</p>
                <p>Summary: {this.props.trailInfo[0].summary}</p>
                <p>Trail Type: {this.props.trailInfo[0].type}</p>
                <p>Length: {this.props.trailInfo[0].length} miles</p>
                <p>Stars: {this.props.trailInfo[0].stars} ★ | {this.props.trailInfo[0].starVotes} votes</p>
                <p>Id: {this.props.trailId}</p>
            </div>
        );
    }
}