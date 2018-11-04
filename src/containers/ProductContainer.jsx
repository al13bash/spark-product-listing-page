import React, { Component } from 'react';

import Product from '../components/Product';

import colors from '../config/colors';

class ProductContainer extends Component {
  render() {
    const { title, description, price, colorIds, images } = this.props;
    const productColors = colors.filter(color => colorIds.includes(color.id))

    return (
      <Product
        images={images}
        title={title}
        description={description}
        price={price}
        colors={productColors}
      />
    )
  }
}

export default ProductContainer;