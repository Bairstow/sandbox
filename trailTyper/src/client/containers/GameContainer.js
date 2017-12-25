import React, { Component } from 'react';
import rh from 'react-hyperscript';
import { connect } from 'react-redux';

import TrailDisplayContainer from '../containers/TrailDisplayContainer';
import TextDisplayContainer from '../containers/TextDisplayContainer';
import TextInputContainer from '../containers/TextInputContainer';

class GameContainer extends Component {
  render() {
    return (
      rh('div', { className: 'game-container' }, [
        rh(TrailDisplayContainer),
        rh(TextDisplayContainer, { ...this.props }),
        rh(TextInputContainer, { ...this.props }),
      ])
    );
  }
}

const mapStateToProps = state => ({ state });

export default connect(mapStateToProps)(GameContainer);
