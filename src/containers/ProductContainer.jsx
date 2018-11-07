import React, { Component } from 'react';
import { connect } from 'react-redux';

import Product from '../components/Product';

import { changeColor } from '../actions/products';

class ProductContainer extends Component {
  render() {
    const { colorIds, colors } = this.props;
    const productColors = colors.filter(color => colorIds.includes(color.id))

    return (
      <Product
        {...this.props}
        colors={productColors}
      />
    )
  }
}

export default connect((state) => ({
  colors: state.colors,
}), {changeColor})(ProductContainer);
