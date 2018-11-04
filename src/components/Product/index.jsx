import React, { Component } from 'react';

import './styles.scss';

class Product extends Component {
  state = {
    currentColor: this.props.colors[0].id
  }

  handleColorClick = (color) => {
    this.setState({ currentColor: color })
  }

  render() {
    const { title, description, price, colors, images } = this.props;
    const { currentColor } = this.state;

    return (
      <div className='Product'>
        <img src={images[currentColor]} alt={title} />
        <h2>{title}</h2>
        <div className='Product__description'>{description}</div>
        <div className='Product__price'>{`$${price}`}</div>
        <div className='Product__colors'>
          {
            colors.map(color =>
              <span
                key={color.id}
                className={`Product__color ${color.className} ${color.id === currentColor ? 'selected' : ''}`}
                onClick={() => this.handleColorClick(color.id)}
              />
            )
          }
        </div>
      </div>
    );
  }
}

export default Product;