import {decrement, decrementAsync, increment, incrementAsync} from '../../modules/counter';
import PropTypes from 'prop-types';
import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {push} from 'react-router-redux';

const Home = (props) => (
    <div>
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
  ),
  mapDispatchToProps = (dispatch) => bindActionCreators({
    changePage: () => push('/about-us')
  }, dispatch);

Home.propTypes = {
  changePage: PropTypes.func,
  count: PropTypes.int,
  increment: PropTypes.func,
  incrementAsync: PropTypes.func,
  decrement: PropTypes.func,
  decrementAsync: PropTypes.func,
  isIncrementing: PropTypes.bool,
  isDecrementing: PropTypes.bool
};

export default connect(
  null,
  mapDispatchToProps
)(Home);
