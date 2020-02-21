import React from 'react'
import styled from 'styled-components'
import RunLogEntryForm from '../components/RunLogEntryForm'
import RunLogList from '../components/RunLogList'

const StyledRunLogContainer = styled.div`
    width: 100%;
    height: auto;
    max-height: 600px;
    padding: 1em;
    margin: 1em 0 1em 0;
    // margin-top: 1em;
    // margin-left: 0px;
    border: 1px solid gray;

    @media (min-width: 450px) {
        min-width: 450px;
        width: 35%;
    }
`;

const RunLogTitle = styled.div`
    font-size: 30px;
    margin-bottom: 1em;
`;

export default class RunLogContainer extends React.Component {

    _handleLogEntered(newLogObject) {
        this.props.handleLogEntry(newLogObject);
    }

    render() {

        let isLogEntered = this.props.isLogEntered;
        let content;

        if (!isLogEntered) {
            content = <RunLogEntryForm
            runLog={this.props.currentRunLogEntry}
            handleLogSubmit={this._handleLogEntered.bind(this)}/>
        }

        return (
            <StyledRunLogContainer>
              <RunLogTitle>Run Log</RunLogTitle>  
              {content}
              <RunLogList
                completeRunLog={this.props.runLog}/>
            </StyledRunLogContainer>
        )
    }
}