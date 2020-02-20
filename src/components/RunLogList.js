import React from 'react'
import styled from 'styled-components'

const StyledLogEntry = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 1em;
    margin-bottom: 1em;
    border: 1px solid gray;
    border-radius: 3px;
    background-color: #f5f5f5;
`;

const StyledLogContent = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0;
    margin-bottom: 1em;
    padding: 0;
    padding-bottom: 1em;
    border-bottom: .5px solid lightgray;
`;

export default function RunLogList(props) {

    
    return(
        <StyledLogEntry>
            {
                props.completeRunLog.map(logObject => {
                    return(
                        <StyledLogContent>
                            <div>{logObject.dateRun}</div>
                            <div>{logObject.name}</div>
                            <div>{logObject.length} mi.</div>
                        </StyledLogContent>
                    );
                })
            }
        </StyledLogEntry>
    )
}