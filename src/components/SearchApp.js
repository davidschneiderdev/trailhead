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
    width: 100%;
    text-align: left;
`;

const StyledSortBySection = styled(Form.Group)`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    color: gray;
`;

const StyledSortByTitle = styled(Form.Label)`
    margin: 0;
    font-size: 16px;
`;

const MaxMinSection = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 1em;
`;

const StyledSortRadioList = styled(Row)`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: flex-start;
    margin-left: 1em;
    color: gray;
`;

const StyledRadioButton = styled(Form.Check)`
    margin-right: 1em;
`;

const StyledButton = styled(Button)`
    width: 100%;
    background-color: gray;

`;

export default class SearchApp extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedOption: null,
            maxDistance: 0,
            minDistance: 0,
            sortBy: 'rating',
            minNumStars: 2
        }
    }

    _updateSelectedOption = (selectedOption) => {
        console.log(selectedOption.label);
        this.setState({ selectedOption })
    }

    _updateMaxDist = (event) => {
        this.setState({
            maxDistance: event.target.value
        })
    }

    _updateMinDist = (event) => {
        this.setState({
            minDistance: event.target.value
        })
    }

    _updateSortBy = (event) => {
        console.log(event.target.value);
        this.setState({
            sortBy: event.target.value
        });
    }

    _printState = (event) => {
        event.preventDefault();
        console.table(this.state);
    }

    render() {
        return(
            <SearchAppContainer>
                <Select options= { atlantaAreas } 
                            isSearchable
                            placeholder='Select Atlanta Region'
                            onChange={this._updateSelectedOption} />
                <StyledOptions>
                    <MaxMinSection>
                        <Form.Group>
                            <Form.Control 
                                type="integer" 
                                placeholder="Max Distance"
                                onChange={this._updateMaxDist} />
                        </Form.Group>
                        <Form.Group>
                            <Form.Control 
                                type="integer" 
                                placeholder="Min Distance"
                                onChange={this._updateMinDist} />
                        </Form.Group>
                    </MaxMinSection>
                    <StyledSortBySection>
                        <StyledSortByTitle >
                            Sort Results By:
                        </StyledSortByTitle>
                        <StyledSortRadioList>
                            <StyledRadioButton
                            type="radio"
                            label="Distance"
                            name="formHorizontalRadios"
                            id="formHorizontalRadios1"
                            value="distance"
                            onChange={this._updateSortBy}
                            />
                            <StyledRadioButton
                            type="radio"
                            label="Rating"
                            name="formHorizontalRadios"
                            id="formHorizontalRadios2"
                            value="rating"
                            onChange={this._updateSortBy}
                            />
                        </StyledSortRadioList>
                    </StyledSortBySection>
                    <StyledButton 
                        variant="primary" 
                        type="submit"
                        onClick={this._printState}>
                        Search Trails
                    </StyledButton>
                </StyledOptions>
            </SearchAppContainer>
        );
    }

    
}