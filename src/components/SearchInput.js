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
    0 0px 80px rgba(0, 0, 0, 0.07);
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
    margin-top: 1em;
`;

const SearchGraphicFrame = styled.div`
    height: 250px;
    width: 250px;
    border-radius: 50%;
    background-color: #EBF2FA;
    box-shadow: 0 0px 2.2px rgba(0, 0, 0, 0.02),
    0 0px 5.3px rgba(0, 0, 0, 0.028),
    0 0px 10px rgba(0, 0, 0, 0.035),
    0 0px 17.9px rgba(0, 0, 0, 0.042);
    // 0 0px 33.4px rgba(0, 0, 0, 0.05),
    // 0 0px 80px rgba(0, 0, 0, 0.07);
    
`;

const SearchGraphic = styled.img`
    width: 100%;
    height: 100%;
    border-radius: 50%;
    padding: 5px;

`;

const StyledRegionSelect = styled(Select)`
    width: 100%;
    font-size: 16px;
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
    display: flex;
    align-items: center;
    font-size: 16px;
    margin-bottom: 1em;
`;

const StyledDistanceLabel = styled.label`
    margin: 0;
`;

const StyledDistanceInput = styled.input`
    width: 35px;
    text-align: center;
    margin-left: 10px;
    background: none;
    border-width: 0px;
    border: .5px solid lightgray;
    border-radius: 6px;
    font-size: 16px;
`;

const StyledButton = styled(Button)`
    height: auto;
    width: 100%;
    font-size: 18px;
    // background-color: #f5f5f5;
    background-color: #319836;
    color: white;
    border: 1px solid #319836;
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
                <SearchInputTitle>Search Georgia Trails</SearchInputTitle>
                <SearchGraphicContainer>
                    <SearchGraphicFrame>
                        <SearchGraphic src={river}/>
                    </SearchGraphicFrame>
                </SearchGraphicContainer>
                <SearchInputForm>
                    <form>
                        <label>Select region: </label>
                        <StyledRegionSelect 
                                options={this.props.dropdownOptions} 
                                isSearchable
                                placeholder='Atlanta'
                                onChange={this.onAreaChange.bind(this)}/>
                    </form>
                    <StyledOptions>
                        <MaxMinSection>
                            <StyledDistanceForm>
                                <StyledDistanceLabel>Min. distance (miles): </StyledDistanceLabel>
                                <StyledDistanceInput
                                    type="number" 
                                    placeholder="0"
                                    onChange={this.onMinDistanceChange.bind(this)}>
                                </StyledDistanceInput> 
                            </StyledDistanceForm>
                            <StyledDistanceForm>
                                <StyledDistanceLabel>Max. distance (miles): </StyledDistanceLabel>
                                <StyledDistanceInput
                                    type="number" 
                                    placeholder="30"
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