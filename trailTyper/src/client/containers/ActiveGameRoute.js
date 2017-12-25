import React, { PropTypes } from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';
import rh from 'react-hyperscript';
import { Route, Redirect } from 'react-router';

import { gameStates } from '../constants/game';

class ActiveGameRoute extends React.Component {
  render() {
    const { component, state, ...rest } = this.props;
    const gameState = state.getIn(['gameReducer', 'gameState']);
    const isActive = (gameState !== gameStates.INACTIVE);

    return (
      rh(Route, {
        ...rest,
        render: props => (
          isActive ? (
            React.createElement(component, props)
          ) : (
            rh(Redirect, { to: { pathname: '/' } })
          )
        ),
      })
    );
  }
}

ActiveGameRoute.propTypes = {
  component: PropTypes.func,
  state: ImmutablePropTypes.map,
};

export default ActiveGameRoute;
