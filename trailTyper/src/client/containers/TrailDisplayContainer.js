import React, { Component } from 'react';
import rh from 'react-hyperscript';
import { connect } from 'react-redux';

import TrailDisplayPanel from '../components/TrailDisplayPanel';

class TrailDisplayContainer extends Component {
  render() {
    return rh(TrailDisplayPanel, { ...this.props });
  }
}

const mapStateToProps = state => ({ state });

export default connect(mapStateToProps)(TrailDisplayContainer);
