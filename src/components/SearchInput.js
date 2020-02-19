import React from 'react';
import Select from 'react-select'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Form, Button } from 'react-bootstrap'
import styled from 'styled-components'

const StyledOptions = styled.form`
    width: 100%;
    text-align: left;
`;

const MaxMinSection = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 1em;
`;

const StyledButton = styled(Button)`
    width: 100%;
    background-color: gray;
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
            <div>
                <Select options={this.props.dropdownOptions} 
                        isSearchable
                        placeholder='Select Atlanta Region'
                        onChange={this.onAreaChange.bind(this)} />
                <StyledOptions>
                    <MaxMinSection>
                        <Form.Group>
                            <Form.Control 
                                type="integer" 
                                placeholder="Max Distance"
                                onChange={this.onMaxDistanceChange.bind(this)} />
                        </Form.Group>
                        <Form.Group>
                            <Form.Control 
                                type="integer" 
                                placeholder="Min Distance"
                                onChange={this.onMinDistanceChange.bind(this)} />
                        </Form.Group>
                    </MaxMinSection>
                    <StyledButton 
                        variant="primary" 
                        type="submit"
                        onClick={this.onSearchSubmit.bind(this)}>
                        Search Trails
                    </StyledButton>
                </StyledOptions>
            </div>
        );
    } 
}