import React from 'react';
import Select from 'react-select'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Button } from 'react-bootstrap'
import styled from 'styled-components'
import river from '../runningTrail.jpg'

const StyledInputContainer = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 2em;
    border-radius: 30px;
    background-color: white;
    box-shadow: 0 0px 2.2px rgba(0, 0, 0, 0.02),
    0 0px 5.3px rgba(0, 0, 0, 0.028),
    0 0px 10px rgba(0, 0, 0, 0.035),
    0 0px 17.9px rgba(0, 0, 0, 0.042),
    0 0px 33.4px rgba(0, 0, 0, 0.05),
    0 0px 80px rgba(0, 0, 0, 0.07)
`;

const SearchInputForm = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const SearchInputTitle = styled.div`
    width: 100%;
    text-align: center;
    font-size: 30px;
`;

const SearchGraphicContainer = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const SearchGraphicFrame = styled.div`
    height: 250px;
    width: 250px;
    border-radius: 50%;
    background-color: #f2f1f0;
    
`;

const SearchGraphic = styled.img`
    width: 100%;
    height: 100%;
    border-radius: 50%;
    padding: 10px;

`;

const StyledRegionSelect = styled(Select)`
    font-size: 18px;
    border-width: 0;
`;

const StyledOptions = styled.div`
    width: 100%;
    text-align: left;
    font-size: 18px;
`;

const MaxMinSection = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-top: 1em;
`;

const StyledDistanceForm = styled.form`
    font-size: 18px;
    margin-bottom: 1em;
`;

const StyledDistanceInput = styled.input`
    width: 170px;
    background: none;
    border-width: 0px;
`;

const StyledButton = styled(Button)`
    height: auto;
    width: 100%;
    font-size: 18px;
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
                <SearchInputTitle>Search Atlanta Trails</SearchInputTitle>
                <SearchGraphicContainer>
                    <SearchGraphicFrame>
                        <SearchGraphic src={river}/>
                    </SearchGraphicFrame>
                </SearchGraphicContainer>
                <SearchInputForm>
                    <form>
                        <input type="radio"/>
                        <label>See results for Greater Atlanta</label>
                    </form>
                    <label>Narrow search to region: </label>
                    <StyledRegionSelect 
                            options={this.props.dropdownOptions} 
                            isSearchable
                            placeholder='Atlanta Region'
                            onChange={this.onAreaChange.bind(this)}/>
                    <StyledOptions>
                        <MaxMinSection>
                            <StyledDistanceForm>
                                <label>Min. distance (miles): </label>
                                <StyledDistanceInput
                                    type="number" 
                                    placeholder=" Enter"
                                    onChange={this.onMinDistanceChange.bind(this)}>
                                </StyledDistanceInput> 
                            </StyledDistanceForm>
                            <StyledDistanceForm>
                                <label>Max. distance (miles): </label>
                                <StyledDistanceInput
                                    type="number" 
                                    placeholder=" Enter"
                                    onChange={this.onMaxDistanceChange.bind(this)}>
                                </StyledDistanceInput> 
                            </StyledDistanceForm>
                        </MaxMinSection>
                    </StyledOptions>
                </SearchInputForm>
                <StyledButton 
                        variant="primary" 
                        type="submit"
                        onClick={this.onSearchSubmit.bind(this)}>
                        Search Trails
                    </StyledButton>
            </StyledInputContainer>
        );
    } 
}