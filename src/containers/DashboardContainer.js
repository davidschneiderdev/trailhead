import React from 'react';
import styled from 'styled-components'
import { faBookmark, faRunning, faCompass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import trailrunner from '../trailrunner.jpg'

const StyledDashboardContainer = styled.div`
    width: 100%;
    height: 100%;
    max-height: 600px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    padding: 1.5em;

    @media (min-width: 450px) {
        min-width: 450px;
        max-height: 700px;
    }
`;

const ProfileContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: flex-start;
    align-items: center;
    margin-bottom: 3em;
`;

const ProfilePictureContainer = styled.div`
    width: 70px;
    height: 70px;
    padding: 3px;
    background-color: lightgray;
    border-radius: 50%;
`;

const ProfilePicture = styled.img`
    width: 100%;
    height: 100%;
    border-radius: 50%;
`;

const ProfileName = styled.div`
    width: 100%:
    height: 100%;
    font-size: 20px;
    font-weight: 400;
    color: white;
    display: flex;
    align-items: center;
    margin: 1em;
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
    font-size: 3vh;
    margin-bottom: 2em;
    color: white;
`;

export default class DashboardContainer extends React.Component {

    onNavClick(event) {
        this.props.handleNavClick(event.target.id);
    }

    render() {

        return(
            <StyledDashboardContainer>
                <ProfileContainer>
                    <ProfilePictureContainer>
                        <ProfilePicture src={trailrunner}/>
                    </ProfilePictureContainer>
                    <ProfileName>Tom Runner</ProfileName>
                </ProfileContainer>
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
