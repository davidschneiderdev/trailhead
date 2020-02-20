import React from 'react'
import styled from 'styled-components'
import RunLogEntryForm from '../components/RunLogEntryForm'
import RunLogList from '../components/RunLogList'

const StyledRunLogContainer = styled.div`
    width: 100%;
    height: auto;
    max-height: 600px;
    border: 1px solid gray;
    border-radius: 15px;
    padding: 1em;
    margin-top: 1em;
    margin-left: 0px;
    transition: margin 2s;

    @media (min-width: 450px) {
        min-width: 450px;
        width: 35%;
    }
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
              <p>Run Log:</p>  
              {content}
              <RunLogList
                completeRunLog={this.props.runLog}/>
            </StyledRunLogContainer>
        )
    }
}