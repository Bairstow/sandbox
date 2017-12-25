import React, { PropTypes } from 'react';
import rh from 'react-hyperscript';
import styled from 'styled-components';

import colors from '../styles/colors';

const FullViewWidthElement = styled.div`
  width: 100vw;
  height: 64px;
  margin-bottom: 16px;
  background-color: ${colors.bgSecondary};
`;

class FullViewWidthPanel extends React.Component {
  render() {
    return (
      rh(FullViewWidthElement, { className: 'row panel' }, [this.props.children])
    );
  }
}

FullViewWidthPanel.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element),
};

export default FullViewWidthPanel;
