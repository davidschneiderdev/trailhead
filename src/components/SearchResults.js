import React from 'react';
import SearchResultElement from './SearchResultElement'
import { Button } from 'react-bootstrap'
import styled from 'styled-components'

const StyledButton = styled(Button)`
    width: 100%;
    background-color: white;
    margin-bottom: 2em;
    color: gray;
`;

export default function SearchResults(props) {

    const resultsLogged = props.searchResults;

    function onReturnToSearch() {
        props.onReturnToSearch()
    }

    return(
        <div>
            <StyledButton
                onClick={onReturnToSearch.bind(this)}
            >Back To Search</StyledButton>

            {resultsLogged ? (
                props.searchResults.map(result => {
                    return(
                        <SearchResultElement 
                            name={result.name}
                            location={result.location}
                            summary={result.summary}
                            length={result.length}
                            stars={result.stars}
                        />
                    );
                })     
            ) : ('')
            }
        </div>
    );
}

