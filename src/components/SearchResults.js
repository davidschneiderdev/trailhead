import React from 'react';
import SearchResultElement from './SearchResultElement'
import { Button } from 'react-bootstrap'
import styled from 'styled-components'


const SearchResultsContainer = styled.div`
    width: 100%;
    height: 400px;
    overflow: auto;
`;

const StyledButton = styled(Button)`
    width: 100%;
    background-color: white;
    margin-bottom: 2em;
    color: gray;
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
            <div>
                <StyledButton
                    onClick={this.onReturnToSearch.bind(this)}
                >Back To Search</StyledButton>
                <SearchResultsContainer>
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
    
                </SearchResultsContainer>
            </div>
        );

    }
}

