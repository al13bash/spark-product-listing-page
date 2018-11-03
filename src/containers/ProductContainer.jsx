import React, { Component } from 'react';

import Product from '../components/Product';

import colors from '../config/colors';
import categories from '../config/categories';

class ProductContainer extends Component {
  render() {
    const { title, description, price, colorIds, categoryIds } = this.props;
    const productColors = colors.filter(color => colorIds.includes(color.id))
    const productCategories = categories.filter(category => categoryIds.includes(category.id));

    return (
      <div>
        <Product
          title={title}
          description={description}
          price={price}
          colors={productColors}
          categories={productCategories}
        />
      </div>
    )
  }
}

export default ProductContainer;