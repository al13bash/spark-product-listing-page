import React, { Component } from 'react';
import Select from 'react-select';

import './styles.scss';

class Filter extends Component {
  render() {
    const { selected, handleChange, options, name, label } = this.props;

    return (
      <div className='Filter'>
        <div>{label}</div>
        <Select
          isMulti
          value={selected}
          onChange={(option) => handleChange(option, name)}
          options={options}
        />
      </div>
    );
  }
}

export default Filter;