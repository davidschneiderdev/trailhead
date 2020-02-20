import React from 'react'
import SearchContainer from './containers/SearchContainer'
import FavRunsContainer from './containers/FavRunsContainer'
import RunLogContainer from './containers/RunLogContainer'
import styled from 'styled-components'

const TrailheadAppContainer = styled.div`
  height: 100%;
  width: 80%;
  display: flex;
  margin-top: 5em;
  justify-content: center;
  align-items: center;
`;

export default class TrailheadApp extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            favRunsArray: [],
            runLogArray: [{name: 'Palisades', dateRun: '12/20/2020', length: '4.2'}],
            currentRunLogEntry: [],
            isLogEntered: false
        }
    }

    _updateFavRunsArray(trailInfo) {
        this.setState({
            favRunsArray: [ ...this.state.favRunsArray, trailInfo]
        })
    }

    _updateCurrentEntry(trailInfo) {
        this.setState({
            currentRunLogEntry: [ trailInfo ],
            isLogEntered: false
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
        return(
            <TrailheadAppContainer>
                <SearchContainer
                    handleFavClick={this._updateFavRunsArray.bind(this)}
                    handleLogClick={this._updateCurrentEntry.bind(this)}/>
                <FavRunsContainer
                    handleDelete={this._deleteFromFavRuns.bind(this)}
                    favRuns={this.state.favRunsArray}/>
                <RunLogContainer
                    handleLogEntry={this._updateRunLogArray.bind(this)}
                    currentRunLogEntry={this.state.currentRunLogEntry}
                    runLog={this.state.runLogArray}
                    isLogEntered={this.state.isLogEntered}/>
            </TrailheadAppContainer>
        );

    }
}
