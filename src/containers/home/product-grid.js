import PropTypes from 'prop-types';
import React from 'react';

import ProductLink from './product-link'; // eslint-disable-line sort-imports

/**
 * The grid of products
 *
 * @param  {object} props Properties of the component
 *
 * @return {element} The rendered element
 */
const productGrid = function (props) {
  return (
    <div className="product-grid row">
      {props.products.map((product, i) => <ProductLink {...props} key={product.url} i={i} product={product} />)}
    </div>
  );
};

productGrid.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object).isRequired
};

productGrid.defaultProps = {
  products: []
};

export default productGrid;
