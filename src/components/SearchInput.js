import React from 'react';
import Select from 'react-select'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Button } from 'react-bootstrap'
import styled from 'styled-components'

const StyledInputContainer = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 1em;
`;

const StyledRegionSelect = styled(Select)`
    font-size: 25px;
    border-width: 0;
`;

const StyledOptions = styled.div`
    width: 100%;
    text-align: left;
`;

const MaxMinSection = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-top: 1em;
`;

const StyledDistanceForm = styled.form`
    font-size: 25px;
    margin-bottom: 1em;
`;

const StyledButton = styled(Button)`
    height: auto;
    width: 100%;
    font-size: 25px;
    background-color: #f5f5f5;
    color: darkgray;
    border: 2px solid lightgray;
    border-radius: 30px;
`;


export default class SearchInput extends React.Component {

    onAreaChange(selectedOption) {
        this.props.updateArea(selectedOption);
    }

    onMaxDistanceChange(event) {
        this.props.updateMaxDistance(event)
    }

    onMinDistanceChange(event) {
        this.props.updateMinDistance(event)
    }

    onSearchSubmit(event) {
        this.props.getResults(event)
    }

    

    render() {

        return (
            <StyledInputContainer>
                <StyledRegionSelect 
                        options={this.props.dropdownOptions} 
                        isSearchable
                        placeholder='Atlanta Region'
                        onChange={this.onAreaChange.bind(this)}/>
                <StyledOptions>
                    <MaxMinSection>
                        <StyledDistanceForm>
                            <input
                                type="integer" 
                                placeholder="Min Distance"
                                onChange={this.onMinDistanceChange.bind(this)}>
                            </input> 
                        </StyledDistanceForm>
                        <StyledDistanceForm>
                            <input
                                type="integer" 
                                placeholder="Max Distance"
                                onChange={this.onMaxDistanceChange.bind(this)}>
                            </input> 
                        </StyledDistanceForm>
                    </MaxMinSection>
                    <StyledButton 
                        variant="primary" 
                        type="submit"
                        onClick={this.onSearchSubmit.bind(this)}>
                        Search Trails
                    </StyledButton>
                </StyledOptions>
            </StyledInputContainer>
        );
    } 
}