import React, { Component } from 'react';

import ProductListingPage from './components/ProductListingPage/index';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <div className='Header' />
        <ProductListingPage />
        <div className='Footer' />
      </div>
    );
  }
}

export default App;
