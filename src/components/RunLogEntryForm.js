import React from 'react';
import styled from 'styled-components'
import plusBotton from '../plus.svg'
// import Calendar from 'react-input-calendar'
// import Moment from 'moment';
// import { extendMoment } from 'moment-range';

// const moment = extendMoment(Moment);
// import DatePicker from 'react-datepicker'
// import "react-datepicker/dist/react-datepicker.css";

const StyledLogEntry = styled.div`
    display: flex;
    flex-direction: column;
    border-radius: 8px;
    background-color: #428BCA;
    padding: 1em;
    box-shadow: 0 0px 2.2px rgba(0, 0, 0, 0.02),
    0 0px 5.3px rgba(0, 0, 0, 0.028),
    0 0px 10px rgba(0, 0, 0, 0.035),
    0 0px 17.9px rgba(0, 0, 0, 0.042),
    0 0px 33.4px rgba(0, 0, 0, 0.05),
    0 0px 80px rgba(0, 0, 0, 0.07)
`;

const StyledLogHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const StyledTrailName = styled.div`
    font-size: 16px;
    font-weight: 600;
    color: white;
`;

const StyledTrailLength = styled.div`
    font-size: 16px;
    font-weight: 400;
    color: white;
`;

const SubmitButtonContainer = styled.div`
    height: 30px;
    width: 30px;
    background-color: white;
    border-radius: 50%;
    outline: none;

`;

const SubmitButton = styled.img`
    width: 100%;
    height: 100%;
    padding: 5px;
`;

const StyledDateLabel = styled.label`
    color: white;
    font-size: 14px;
`;

const StyledDateInput = styled.input`
    width: 140px;
    font-size: 14px;
    color: gray;
    margin: 10px;
    border: 0px solid white;
    border-radius: 8px;
`;




export default class RunLogEntryForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            dateLogged: null
        }
    }

    onLogSubmitClick(event) {
        // event.preventDefault();
        this.props.runLog[0].dateRun = this.state.dateLogged;
        // console.log(this.props.runLog);
        // console.log(event.key);
        this.props.handleLogSubmit(this.props.runLog);
    }

    updateRunDate(event) {
        // console.log(event.target.value);
        this.setState({
            dateLogged: event.target.value
        });
        // console.log(this.state.dateLogged);
    }

    onEnterClick(event) {
        if (event.key === 'Enter') {
            event.preventDefault();
            console.log('hit enter');
            this.updateRunDate(event);
            this.onLogSubmitClick(event);
        }

    }

    render() {
        return(
            <div>
                {
                    this.props.runLog.map(trail => {
                        return(
                           <StyledLogEntry
                                key={trail.length}>
                               <StyledLogHeader>
                                   <div>
                                       <StyledTrailName>{trail.name}</StyledTrailName>
                                       <StyledTrailLength>{trail.length} mi.</StyledTrailLength>
                                   </div>
                                   <div>
                                       <SubmitButtonContainer
                                            onClick={this.onLogSubmitClick.bind(this)}>
                                            <SubmitButton src={plusBotton}/>
                                        </SubmitButtonContainer>
                                   </div>
                               </StyledLogHeader>
                               <form>
                                    <StyledDateLabel>
                                        Enter date of run:
                                    </StyledDateLabel>
                                    <StyledDateInput
                                        type='date'
                                        onChange={this.updateRunDate.bind(this)}
                                        onKeyPress={this.onEnterClick.bind(this)} 
                                        required>
                                    </StyledDateInput>
                               </form>
                           </StyledLogEntry>
                        );
                    }) 
                 }
            </div>
        );
    }
}