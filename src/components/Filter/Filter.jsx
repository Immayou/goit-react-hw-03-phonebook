import React, { Component } from "react";
import PropTypes from 'prop-types'; 
import shortid from "shortid";
import { FilterWrapper, FilterLabel, InputFilterField } from './Filter.styled'


class Filter extends Component {

    static propTypes = {
      value: PropTypes.string.isRequired,
      filterInput: PropTypes.func.isRequired
    }

    filterInputId = shortid.generate()

    render () {
        return (
            <FilterWrapper>
              <FilterLabel htmlFor={this.filterInputId}>Find contacts by name</FilterLabel>
              <InputFilterField
            id={this.filterInputId}
            onChange={this.props.filterInput}
            type="text"
            value={this.props.value}
            name="filter"
            title="Filter by name"
          />
            </FilterWrapper>
        );
};}

export default Filter;
