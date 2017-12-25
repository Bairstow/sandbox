import React from 'react';
import rh from 'react-hyperscript';

import MajorPanel from './MajorPanel';

import '../styles/trail.scss';

class TrailDisplayPanel extends React.Component {
  render() {
    return (
      rh(MajorPanel, {}, [
        rh('div', { className: 'twelve columns trailDisplay' }),
        rh('div'),
      ])
    );
  }
}

export default TrailDisplayPanel;
