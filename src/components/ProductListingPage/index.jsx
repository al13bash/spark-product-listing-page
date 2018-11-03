import React, { Component } from 'react';

import ProductContainer from '../../containers/ProductContainer';
import Filter from '../Filter'

import products from '../../config/products';
import colors from '../../config/colors';
import categories from '../../config/categories';

import { intersection } from '../../lib'

class ProductListingPage extends Component {
  state = {
    selectedColors: [],
    selectedCategories: [],
  }

  handleChange = (options, name) => {
    this.setState({ [name]: options.map(option => option.value) });
  }

  filter = ({categoryIds, colorIds}) => {
    const { selectedCategories, selectedColors } = this.state;
    return (selectedCategories.length === 0 || intersection(categoryIds, selectedCategories).length !== 0) &&
      (selectedColors.length === 0 || intersection(colorIds, selectedColors).length !== 0);
  }

  render() {
    const colorOptions = colors.map(color => ({value: color.id, label: color.title}));
    const categoryOptions = categories.map(category => ({value: category.id, label: category.title}));

    return (
      <div>
        <h1>Product Listing Page</h1>
        <h2>Filters</h2>
        <Filter
          options={colorOptions}
          handleChange={this.handleChange}
          name='selectedColors'
        />
        <Filter
          options={categoryOptions}
          handleChange={this.handleChange}
          name='selectedCategories'
        />
        {
          products
            .filter(product => this.filter(product))
            .map(product => <ProductContainer key={product.id} {...product} />)
        }
      </div>
    );
  }
}

export default ProductListingPage;