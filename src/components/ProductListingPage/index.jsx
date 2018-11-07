import React, { Component } from 'react';
import { connect } from 'react-redux';

import ProductContainer from '../../containers/ProductContainer';
import Filter from '../Filter';

import { changeFilters } from '../../actions/filters';

import { intersection } from '../../lib';

import './styles.scss';

class ProductListingPage extends Component {
  handleChange = (options, name) => {
    this.props.changeFilters({ [name]: options.map(option => option.value) })
  }

  filter = ({categoryIds, colorIds}) => {
    const { selectedCategories, selectedColors } = this.props.filters;
    return (selectedCategories.length === 0 || intersection(categoryIds, selectedCategories).length !== 0) &&
      (selectedColors.length === 0 || intersection(colorIds, selectedColors).length !== 0);
  }

  render() {
    const { products, colors, categories } = this.props;
    const colorOptions = colors.map(color => ({value: color.id, label: color.title}));
    const categoryOptions = categories.map(category => ({value: category.id, label: category.title}));

    return (
      <div className='ProductListingPage'>
        <h1>Product Listing Page</h1>
        <Filter
          options={colorOptions}
          handleChange={this.handleChange}
          name='selectedColors'
          label='Colors'
        />
        <Filter
          options={categoryOptions}
          handleChange={this.handleChange}
          name='selectedCategories'
          label='Categories'
        />
        <div className='ProductsList'>
          {
            products
              .filter(product => this.filter(product))
              .map(product => <ProductContainer key={product.id} {...product} />)
          }
        </div>
      </div>
    );
  }
}

export default connect(state => ({
  products: state.products,
  colors: state.colors,
  categories: state.categories,
  filters: state.filters,
}), {changeFilters})(ProductListingPage);
