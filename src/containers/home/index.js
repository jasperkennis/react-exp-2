import axios from 'axios';
import https from 'https';
import jQuery from 'jquery';
import {decrement, decrementAsync, increment, incrementAsync} from '../../modules/counter';
import CategoriesList from './categories-list';
import ProductGrid from './product-grid';
import PropTypes from 'prop-types';
import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {push} from 'react-router-redux';

/**
 * [getProducts description]
 * @param  {[type]} props [description]
 * @return {[type]}       [description]
 */
function getProducts (props) {
  if (props.products.length > 0 || props.funnel.complete) {
    return null;
  }

  const agent = axios.create({
    httpsAgent: new https.Agent({
      rejectUnauthorized: false
    })
  });

  agent.get('https://www.drukzo.nl.local/uitgelicht').then((res) => {
    // const html = res.data.replace(/<img[^>]*>/g, '');
    const html = res.data;
    const _$obj = jQuery(html);
    const _$items = _$obj.find('.normal-categories a.standard');
    const products = [];
    const link_parser = document.createElement('a');
    let _$;

    _$items.each(function (i, e) {
      _$ = jQuery(e);

      if (_$.text() && _$.attr('href')) {
        link_parser.href = _$.attr('href');
        products.push({
          url: link_parser.pathname,
          name: _$.find('.title').text(),
          image_src: _$.find('picture img').attr('src'),
          image_srcset: _$.find('picture source').attr('srcset')
        });
      }
    });

    props.productsSet(products);
  });
}
const Home = (props) => {
    getProducts(props);
    return (
      <div>
        <div>
          <div className="cell">
            <article className="article">
              <CategoriesList />
              <ProductGrid {...props} />
            </article>
          </div>
        </div>
        <h1>Home</h1>
        <p>Welcome home!</p>
        <p>Count: {props.count}</p>

        <p>
          <button onClick={props.increment} disabled={props.isIncrementing}>Increment</button>
          <button onClick={props.incrementAsync} disabled={props.isIncrementing}>Increment Async</button>
        </p>

        <p>
          <button onClick={props.decrement} disabled={props.isDecrementing}>Decrementing</button>
          <button onClick={props.decrementAsync} disabled={props.isDecrementing}>Decrement Async</button>
        </p>


        <button onClick={() => props.changePage()}>Go to about page via redux</button>
      </div>
    );
  },
  mapStateToProps = (state) => ({
    count: state.counter.count,
    isIncrementing: state.counter.isIncrementing,
    isDecrementing: state.counter.isDecrementing
  }),
  mapDispatchToProps = (dispatch) => bindActionCreators({
    changePage: () => push('/about-us'),
    decrement,
    decrementAsync,
    increment,
    incrementAsync
  }, dispatch);

Home.propTypes = {
  changePage: PropTypes.func,
  count: PropTypes.number,
  increment: PropTypes.func,
  incrementAsync: PropTypes.func,
  decrement: PropTypes.func,
  decrementAsync: PropTypes.func,
  isIncrementing: PropTypes.bool,
  isDecrementing: PropTypes.bool
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
