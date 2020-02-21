import React from 'react';
import styled from 'styled-components'
import { faBookmark, faRunning, faCompass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const StyledDashboardContainer = styled.div`
    width: 100%;
    height: auto;
    max-height: 600px;
    padding: 1em;
    margin-top: 1em;
    margin-left: 0px;

    @media (min-width: 450px) {
        min-width: 450px;
        width: 35%;
    }
`;

const StyledDashboardNav = styled.ul`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    list-style: none;
    margin: 0;
    padding: 0;
`;

const StyledNavElement = styled.li`
    &:hover {
        text-decoration: underline;
    }
    font-size: 30px;
    margin-bottom: 2em;
    color: white;

`;

export default class DashboardContainer extends React.Component {

    onNavClick(event) {
        // console.log(event.target.id);
        this.props.handleNavClick(event.target.id);
    }

    render() {

        return(
            <StyledDashboardContainer>
                <StyledDashboardNav>
                    <StyledNavElement id='search' onClick={this.onNavClick.bind(this)}><FontAwesomeIcon icon={faCompass}/> Search Atlanta Trails</StyledNavElement>
                    <StyledNavElement id='log' onClick={this.onNavClick.bind(this)}><FontAwesomeIcon icon={faRunning}></FontAwesomeIcon> Your Run Log</StyledNavElement>
                    <StyledNavElement id='saved' onClick={this.onNavClick.bind(this)}><FontAwesomeIcon icon={faBookmark}></FontAwesomeIcon> Saved Trails</StyledNavElement>
                    <StyledNavElement>Options</StyledNavElement>
                    <StyledNavElement>Logout</StyledNavElement>
                </StyledDashboardNav>
            </StyledDashboardContainer>

        );
    }
}
