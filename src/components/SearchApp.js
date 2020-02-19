import React from 'react';
import Select from 'react-select'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Form, Button } from 'react-bootstrap'
import styled from 'styled-components'
import axios from 'axios'

const atlantaAreas = [
    { label: 'Marietta', value: 1, lat: 33.952602, lon: -84.549934 },
    { label: 'Smyrna', value: 2, lat: 33.883991, lon: -84.514374 },
    { label: 'Norcross', value: 3, lat: 33.941212, lon: -84.213531 },
    { label: 'Roswell', value: 4, lat: 34.022003, lon: -84.361549 },
    { label: 'Sandy Springs', value: 5, lat: 33.935101, lon: -84.360924 },
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

// const StyledSortBySection = styled(Form.Group)`
//     display: flex;
//     justify-content: flex-start;
//     align-items: center;
//     color: gray;
// `;

// const StyledSortByTitle = styled(Form.Label)`
//     margin: 0;
//     font-size: 16px;
// `;

const MaxMinSection = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 1em;
`;

// const StyledSortRadioList = styled(Row)`
//     display: flex;
//     flex-direction: row;
//     flex-wrap: wrap;
//     justify-content: flex-start;
//     align-items: flex-start;
//     margin-left: 1em;
//     color: gray;
// `;

// const StyledRadioButton = styled(Form.Check)`
//     margin-right: 1em;
// `;

const StyledButton = styled(Button)`
    width: 100%;
    background-color: gray;

`;

export default class SearchApp extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedOption: null,
            maxDistance: 30,
            minDistance: 0,
            sortBy: 'quality',
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

    _getResults = (event) => {
        event.preventDefault();
        console.table(this.state);
        axios.get(`https://www.trailrunproject.com/data/get-trails?lat=${this.state.selectedOption.lat}&lon=${this.state.selectedOption.lon}&maxDistance=${this.state.maxDistance}&minLength=${this.state.minDistance}&sort=${this.state.sortBy}&key=200688416-477b9e0468e40695259891ec8a715b01`)
            .then(response => {
                console.log(response)
                }  
            )
            .catch(err => {
                console.log("Not working")
            })
        // console.log("working")
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
                    {/* <StyledSortBySection>
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
                            value="quality"
                            onChange={this._updateSortBy}
                            />
                        </StyledSortRadioList>
                    </StyledSortBySection> */}
                    <StyledButton 
                        variant="primary" 
                        type="submit"
                        onClick={this._getResults}>
                        Search Trails
                    </StyledButton>
                </StyledOptions>
            </SearchAppContainer>
        );
    }

    
}