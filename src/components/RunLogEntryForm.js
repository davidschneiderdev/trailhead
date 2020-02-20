import React from 'react';
import styled from 'styled-components'

const StyledLogEntry = styled.div`
    display: flex;
    flex-direction: column;
    border: 1px solid lightgray;
    padding: 1em;
`;

const StyledLogHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export default class RunLogEntryForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            dateLogged: null
        }
    }

    onLogSubmitClick() {
        this.props.runLog[0].dateRun = this.state.dateLogged;
        console.log(this.props.runLog);
        this.props.handleLogSubmit(this.props.runLog);
    }

    updateRunDate(event) {
        console.log(event.target.value);
        this.setState({
            dateLogged: event.target.value
        });
        console.log(this.state.dateLogged);
    }

    render() {
        return(
            <div>
                {
                    this.props.runLog.map(trail => {
                        return(
                           <StyledLogEntry>
                               <StyledLogHeader>
                                   <div>
                                       <h3>{trail.name}</h3>
                                       <p>{trail.length} mi.</p>
                                   </div>
                                   <div>
                                       <button
                                            onClick={this.onLogSubmitClick.bind(this)}>
                                            Log Entry
                                        </button>
                                   </div>
                               </StyledLogHeader>
                               <form>
                                   <input
                                       placeholder='Date run (dd/mm/yy)'
                                       onChange={this.updateRunDate.bind(this)}>
                                   </input>
                               </form>
                           </StyledLogEntry>
                        );
                    }) 
                 }
            </div>
        );
    }
}