import React from 'react';
import SearchResultElement from './SearchResultElement'
import { Button } from 'react-bootstrap'
import styled from 'styled-components'

const StyledSearchResultsContainer = styled.div`
    width: 100%:
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const SearchResultsContents = styled.div`
    width: 100%;
    height: 100%;
    overflow: auto;
    padding: 1em;
`;

const StyledButton = styled(Button)`
    width: 90%;
    height: 100%;
    background-color: white;
    color: gray;
    border: 2px solid lightgray;
    border-radius: 30px;
`;

// const resultsLogged = props.searchResults;

export default class SearchResults extends React.Component {

    onReturnToSearch() {
        this.props.onReturnToSearch()
    }

    onTrailSelect(id) {
        this.props.handleTrailClick(id)
    }

    render() {
        return(
            <StyledSearchResultsContainer>
                <StyledButton
                    onClick={this.onReturnToSearch.bind(this)}
                >Back To Search</StyledButton>
                <SearchResultsContents>
                    {this.props.searchResults ? (
                        this.props.searchResults.map(result => {
                            return(
                                <SearchResultElement
                                    id={result.id}
                                    name={result.name}
                                    location={result.location}
                                    summary={result.summary}
                                    length={result.length}
                                    stars={result.stars}
                                    numRatings={result.starVotes}
                                    imgSrc={result.imgSmall}
                                    onTrailClick={this.onTrailSelect.bind(this)}
                                />
                            );
                        })     
                    ) : ('')
                    }
    
                </SearchResultsContents>
            </StyledSearchResultsContainer>
        );

    }
}

