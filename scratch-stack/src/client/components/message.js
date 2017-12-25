import React, { PropTypes } from 'react';
import rh from 'react-hyperscript';

class Message extends React.Component {
  render() {
    return rh('div', {}, this.props.message);
  }
}

Message.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Message;
