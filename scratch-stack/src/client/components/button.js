import React, { PropTypes } from 'react';
import rh from 'react-hyperscript';

class Button extends React.Component {
  render() {
    return rh('button', { onClick: this.props.action }, this.props.actionLabel);
  }
}

Button.propTypes = {
  action: PropTypes.func.isRequired,
  actionLabel: PropTypes.string.isRequired,
};

export default Button;
