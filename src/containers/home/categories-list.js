// import PropTypes from 'prop-types';
import React from 'react';



/**
 * Robot feelings page
 *
 * @param {object} props The properties
 *
 * @return {function} Instructions and productgrid
 */
export default function () {
  return (
    <div className="row">
      <ul className="categories-list">
        <li className="categories-list__item categories-list__item--active">Highlights</li>
        <li className="categories-list__item">categories</li>
        <li className="categories-list__item">promotion</li>
      </ul>
    </div>
  );
}
