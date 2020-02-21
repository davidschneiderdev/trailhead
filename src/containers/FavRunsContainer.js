import React from 'react'
import styled from 'styled-components'
import { Button } from 'react-bootstrap'

const StyledFavRunsContainer = styled.div`
    width: 100%;
    height: auto;
    max-height: 600px;
    border: 1px solid gray;
    border-radius: 15px;
    padding: 1em;
    margin-bottom: 2em;

    @media (min-width: 450px) {
        min-width: 450px;
        width: 35%;
    }
`;

const SavedTrailsTitle = styled.div`
    width: 100%;
    height: 100%;
    font-size: 30px;
`;

const StyledListItem = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1em;
    margin-bottom: 1em;
    border: 1px solid gray;
    border-radius: 3px;
    background-color: #f5f5f5;
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