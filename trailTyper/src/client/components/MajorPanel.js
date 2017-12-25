import React, { PropTypes } from 'react';
import rh from 'react-hyperscript';

class MajorPanel extends React.Component {
  render() {
    return (
      rh('div', { className: 'row panel' }, [this.props.children])
    );
  }
}

MajorPanel.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element),
};

export default MajorPanel;
