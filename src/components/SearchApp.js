import React from 'react';
import Select from 'react-select'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Form, Button, Row } from 'react-bootstrap'
import styled from 'styled-components'

const atlantaAreas = [
    { label: 'Marietta', value: 1 },
    { label: 'Smyrna', value: 2 },
    { label: 'Norcross', value: 3 },
    { label: 'Roswell', value: 4 },
    { label: 'Rivermont', value: 5 },

]

const SearchAppContainer = styled.div`
    width: 500px;
    height: auto;
    border: 2px solid lightgray;
    border-radius: 15px;
    padding: 2em;
    margin: 6em;
`;

const StyledOptions = styled.form`
    margin: 2em 5em 2em 0em;
    text-align: left;
`;

const StyledSortBy = styled(Form.Group)`
    
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: gray;
`;

const StyledSortByTitle = styled(Form.Label)`
    margin: 0;
    font-size: 16px;
`;

const StyledSortRadioList = styled(Row)`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: flex-start;
    color: gray;
`;

const StyledRadioButton = styled(Form.Check)`
    margin-right: 1em;
`;

const StyledButton = styled(Button)`
    background-color: gray;

`;

export default class SearchApp extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedOption: null,
            maxDistance: 100,
            minDistance: 0,
            sortBy: 'distance',
            numStars: 2
        }
    }

    _handleChange = (selectedOption) => {
        console.log(selectedOption.label);
        this.setState({ selectedOption })
    }

    render() {
        return(
            <SearchAppContainer>
                <Select options= { atlantaAreas } 
                            isSearchable
                            placeholder='Select Atlanta Region'
                            onChange={this._handleChange} />
                <StyledOptions>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Control type="integer" placeholder="Maximum Distance - Miles" />
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Control type="integer" placeholder="Minimum Distance - Miles" />
                    </Form.Group>
                    <StyledSortBy>
                        <StyledSortByTitle >
                            Sort By:
                        </StyledSortByTitle>
                        <StyledSortRadioList>
                            <StyledRadioButton
                            type="radio"
                            label="Distance"
                            name="formHorizontalRadios"
                            id="formHorizontalRadios1"
                            />
                            <StyledRadioButton
                            type="radio"
                            label="Rating"
                            name="formHorizontalRadios"
                            id="formHorizontalRadios2"
                            />
                        </StyledSortRadioList>
                    </StyledSortBy>
                    <StyledButton variant="primary" type="submit">
                        Search Trails
                    </StyledButton>
                </StyledOptions>
            </SearchAppContainer>
        );
    }

    
}