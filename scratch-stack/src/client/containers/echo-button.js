/* eslint-disable no-unused-vars */

import { connect } from 'react-redux';
import Button from '../components/button';
import { makeEcho } from '../actions/my-class-actions';

const mapDispatchToProps = dispatch => ({
  action: () => { dispatch(makeEcho()); },
  actionLabel: 'Echo',
});

export default connect(null, mapDispatchToProps)(Button);
