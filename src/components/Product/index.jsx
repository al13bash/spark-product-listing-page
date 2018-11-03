import React, { Component } from 'react';

class Product extends Component {
  render() {
    const { title, description, price, colors } = this.props;
    return (
      <div>
        <h2>{title}</h2>
        <div>{description}</div>
        <div>{price}</div>
        <div>Colors</div>
        {colors.map(color => <div key={color.id}>{color.title}</div>)}
      </div>
    );
  }
}

export default Product;