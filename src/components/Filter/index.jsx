import React, { Component } from 'react';
import Select from 'react-select';

class Filter extends Component {
  render() {
    const { selected, handleChange, options, name } = this.props;

    return (
      <Select
        isMulti
        value={selected}
        onChange={(option) => handleChange(option, name)}
        options={options}
      />
    );
  }
}

export default Filter;