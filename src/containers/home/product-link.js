import {Link} from 'react-router';
import PropTypes from 'prop-types';
import React from 'react';

import getFunnelSteps from '../ajaxCalls/funnelGetStep';

/**
 * Link to a product with image and from price
 *
 * @param {object} props Properties
 *
 * @return {element} The rendered element
 */
const productLink = function (props) {
  const _onClick = function () {
    props.funnelCurrentSelectionPropertiesAdd({
      product: props.product.url.replace('/', ''),
      name: props.product.name
    });

    getFunnelSteps(props, props.product.url);
  };

  return (
    <div className="product-link col-xs-6 col-md-4 less-padding">
      <div className="product-link__container">
        <Link to={`/product${props.product.url}`} onClick={_onClick} className="product-link__link">
          <picture className="product-link__picture">
            <source srcSet={props.product.image_srcset} type="image/webp" className="product-link__source" />
            <img src={props.product.image_src} alt={props.product.name} className="product-link__image" />
          </picture>
          <span className="product-link__title">{props.product.name}</span>
        </Link>
      </div>
    </div>
  );
};

productLink.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    image_src: PropTypes.string.isRequired,
    image_srcset: PropTypes.string.isRequired
  }).isRequired,
  funnelCurrentSelectionPropertiesAdd: PropTypes.func.isRequired
};

export default productLink;
