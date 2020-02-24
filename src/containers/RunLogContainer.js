import React from 'react'
import styled from 'styled-components'
import RunLogEntryForm from '../components/RunLogEntryForm'
import RunLogList from '../components/RunLogList'

const StyledRunLogContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    margin: 0;
    padding: 0;
    border-radius: 30px;
    background-color: white;
    box-shadow: 0 0px 2.2px rgba(0, 0, 0, 0.02),
    0 0px 5.3px rgba(0, 0, 0, 0.028),
    0 0px 10px rgba(0, 0, 0, 0.035),
    0 0px 17.9px rgba(0, 0, 0, 0.042),
    0 0px 33.4px rgba(0, 0, 0, 0.05),
    0 0px 80px rgba(0, 0, 0, 0.07)
  ;
`;

const RunLogContainerContents = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1em;
    background-color: white;
    z-index: 100;
    border-radius: 30px;
    box-shadow: 0 0px 2.2px rgba(0, 0, 0, 0.02),
    0 0px 5.3px rgba(0, 0, 0, 0.028),
    0 0px 10px rgba(0, 0, 0, 0.035),
    0 0px 17.9px rgba(0, 0, 0, 0.042),
    0 0px 33.4px rgba(0, 0, 0, 0.05),
    0 0px 80px rgba(0, 0, 0, 0.07)
    ;
`;

const RunLogListContainer = styled.div`
    width: 100%:
    height: 100%;
    display: flex;
    flex-direction: column;
    margin-top: 1em;
    padding: 0;
  
`;

const RunLogTitle = styled.div`
    font-size: 30px;
    margin-bottom: 1em;
`;

const RunLogNav = styled.div`
    width: 100%;
    height: 100px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: rgb(42, 67, 55);
    margin-top: -30px;
    z-index: 1;

    @media (min-width: 450px) {
    border-radius: 6px;
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
              <RunLogContainerContents>
                <RunLogTitle>Run Log</RunLogTitle> 
                {content}
                <RunLogListContainer>
                    <RunLogList
                        completeRunLog={this.props.runLog}/>
                </RunLogListContainer>
              </RunLogContainerContents>
              <RunLogNav></RunLogNav>
            </StyledRunLogContainer>
        )
    }
}