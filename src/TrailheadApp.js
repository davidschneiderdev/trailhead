import React from 'react'
import DashboardContainer from './containers/DashboardContainer'
import SearchContainer from './containers/SearchContainer'
import FavRunsContainer from './containers/FavRunsContainer'
import RunLogContainer from './containers/RunLogContainer'
import { faBars, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styled from 'styled-components'

const TrailheadAppContainer = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: rgb(243, 242, 241);

  @media (min-width: 450px) {
    height: 100%;
    max-width: 450px;
    margin-top: 3em;
    border-radius: 8px;
    border: .5px solid lightgray;
    box-shadow: 0 0px 2.2px rgba(0, 0, 0, 0.02),
    0 0px 5.3px rgba(0, 0, 0, 0.028),
    0 0px 10px rgba(0, 0, 0, 0.035),
    0 0px 17.9px rgba(0, 0, 0, 0.042),
    0 0px 33.4px rgba(0, 0, 0, 0.05),
    0 0px 80px rgba(0, 0, 0, 0.07)
  ;
    }
`;

const TrailheadNav = styled.div`
    top: 0;
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 1em;
`;

const TrailheadNavIcon = styled.div`
    font-size: 20px;
    color: gray;
`;

export default class TrailheadApp extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            currentContainer: 'search',
            favRunsArray: [],
            runLogArray: [{name: 'West Palisades', dateRun: '12/20/2020', length: '4.2'}],
            currentRunLogEntry: [],
            isLogEntered: false
        }
    }

    _updateCurrentContainer(containerName) {
        console.log(containerName);
        this.setState({
            currentContainer: containerName
        })
    }

    _updateCurrentToDashboard() {
        console.log('dash clicked');
        this.setState({
            currentContainer: 'dashboard'
        })
    }

    _updateCurrentToSearch() {
        console.log('search clicked');
        this.setState({
            currentContainer: 'search'
        })
    }

    _updateFavRunsArray(trailInfo) {
        this.setState({
            favRunsArray: [ ...this.state.favRunsArray, trailInfo]
        })
    }

    _updateCurrentEntry(trailInfo) {
        this.setState({
            currentRunLogEntry: [ trailInfo ],
            isLogEntered: false,
            currentContainer: 'log'
        })
    }

    _updateRunLogArray(newLogObject) {
        console.log(newLogObject);
        this.setState({
            runLogArray: [ newLogObject[0], ...this.state.runLogArray ],
            isLogEntered: true
        });
    }

    _deleteFromFavRuns(trailName) {
        console.log(`delete button clicked for: ${trailName}`);
        const newFavRunsArray = [...this.state.favRunsArray];
        let index;
        for (let trailIndex in newFavRunsArray) {
            if (newFavRunsArray[trailIndex].name === trailName) {
                index = trailIndex;
                console.log(index);
            }
        }
        if (index !== -1) newFavRunsArray.splice(index, 1);
        this.setState({
            favRunsArray: newFavRunsArray
        })
    }

    render() {
        let { currentContainer } = this.state;
        let displayCurrentContainer;

        let appBackgroundColor;

        if (currentContainer === 'search') {
            displayCurrentContainer = <SearchContainer
            handleFavClick={this._updateFavRunsArray.bind(this)}
            handleLogClick={this._updateCurrentEntry.bind(this)}/>
        } else if (currentContainer === 'log') {
            displayCurrentContainer = <RunLogContainer
            handleLogEntry={this._updateRunLogArray.bind(this)}
            currentRunLogEntry={this.state.currentRunLogEntry}
            runLog={this.state.runLogArray}
            isLogEntered={this.state.isLogEntered}/>
        } else if (currentContainer === 'saved') {
            displayCurrentContainer = <FavRunsContainer
            handleDelete={this._deleteFromFavRuns.bind(this)}
            favRuns={this.state.favRunsArray}/>
        } else {
            displayCurrentContainer = <DashboardContainer
            handleNavClick={this._updateCurrentContainer.bind(this)}/>;
            appBackgroundColor = {backgroundColor: "rgb(42, 67, 55)"};
        }

        return (
            <TrailheadAppContainer
                style={appBackgroundColor}>
                <TrailheadNav>
                    <TrailheadNavIcon onClick={this._updateCurrentToDashboard.bind(this)}><FontAwesomeIcon icon={faBars}/></TrailheadNavIcon>
                    <TrailheadNavIcon onClick={this._updateCurrentToSearch.bind(this)}><FontAwesomeIcon icon={faSearch}/></TrailheadNavIcon>
                </TrailheadNav>
                {displayCurrentContainer}
            </TrailheadAppContainer>
        );

    }
}
