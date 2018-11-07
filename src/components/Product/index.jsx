import React, { Component } from 'react';

import './styles.scss';

class Product extends Component {
  render() {
    const {
      id,
      title,
      description,
      price,
      colors,
      images,
      changeColor,
      selectedColor = this.props.colors[0].id
    } = this.props;

    return (
      <div className='Product'>
        <img src={images[selectedColor]} alt={title} />
        <h2>{title}</h2>
        <div className='Product__description'>{description}</div>
        <div className='Product__price'>{`$${price}`}</div>
        <div className='Product__colors'>
          {
            colors.map(color =>
              <span
                key={color.id}
                className={`Product__color ${color.className} ${color.id === selectedColor ? 'selected' : ''}`}
                onClick={() => changeColor(color.id, id)}
              />
            )
          }
        </div>
      </div>
    );
  }
}

export default Product;