import React from 'react'
import styled from 'styled-components'
import { Button } from 'react-bootstrap'

const StyledFavRunsContainer = styled.div`
    width: 99%;
    height: 100vh;
    max-height: 600px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    border-radius: 30px;
    padding: 2em;
    margin-bottom: 2em;
    background-color: white;
    box-shadow: 0 0px 2.2px rgba(0, 0, 0, 0.02),
    0 0px 5.3px rgba(0, 0, 0, 0.028),
    0 0px 10px rgba(0, 0, 0, 0.035),
    0 0px 17.9px rgba(0, 0, 0, 0.042),
    0 0px 33.4px rgba(0, 0, 0, 0.05),
    0 0px 80px rgba(0, 0, 0, 0.07)

    @media (min-width: 450px) {
        min-width: 450px;
        width: 35%;
    }
`;

const SavedTrailsTitle = styled.div`
    width: 100%;
    font-size: 30px;
`;

const StyledListItem = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1em;
    margin-bottom: 1em;
    border-radius: 3px;
`;

export default class FavRunsContainer extends React.Component {
    
    

    onDeleteClick(event) {
        this.props.handleDelete(event.target.value)
    }
    
    render() {
        
        return (
            <StyledFavRunsContainer>
              <SavedTrailsTitle>Saved Trails</SavedTrailsTitle>  
              {
                 this.props.favRuns.map(trail => {
                     return(
                         <StyledListItem>
                             <p>{trail.name}</p>
                             <p>{trail.length} mi.</p>
                             <Button
                                value={trail.name}
                                onClick={this.onDeleteClick.bind(this)}>
                                    Delete
                                </Button>
                         </StyledListItem>
                     );
                 }) 
              }
            </StyledFavRunsContainer>
        )
    }
}