import React from 'react'
import styled from 'styled-components'

const StyledLogElement = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    // border: 1px solid gray;
    border-radius: 3px;
    padding: 1em;
    // background-color: #f5f5f5;
`;

const StyledLogContent = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0;
    margin-bottom: 1em;
    padding: 0;
    padding-bottom: 1em;
    border-bottom: .5px solid lightgray;
`;

const RunLogLine = styled.div`
    margin: 10px;
`;

export default function RunLogList(props) {

    
    return(
        <StyledLogElement>
            {
                props.completeRunLog.map((logObject, id) => {
                    return(
                        <StyledLogContent
                            key={id}>
                            <RunLogLine>{logObject.dateRun}</RunLogLine>
                            <RunLogLine>{logObject.name}</RunLogLine>
                            <RunLogLine>{logObject.length} mi.</RunLogLine>
                        </StyledLogContent>
                    );
                })
            }
        </StyledLogElement>
    )
}