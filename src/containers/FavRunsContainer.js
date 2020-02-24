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
    text-align: center;
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

const ItemName = styled.div`
    margin: 0;
`;

const ItemLength = styled.div`
    margin: 0;
`;

const StyledDeleteButton = styled(Button)`
    background-color: white;
    color: gray;
    font-size: 10px;
    font-weight: 600;
    border: 2px solid lightgray;
    border-radius: 8px;
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
                         <StyledListItem
                            key={trail.length}>
                             <ItemName>{trail.name}</ItemName>
                             <ItemLength>{trail.length} mi.</ItemLength>
                             <StyledDeleteButton
                                value={trail.name}
                                onClick={this.onDeleteClick.bind(this)}>
                                    Delete
                                </StyledDeleteButton>
                         </StyledListItem>
                     );
                 }) 
              }
            </StyledFavRunsContainer>
        )
    }
}