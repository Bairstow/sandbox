import React, { PropTypes } from 'react';
import rh from 'react-hyperscript';

import '../styles/radialProgressBar.scss';

class RadialProgressBar extends React.Component {
  render() {
    const { progressValue, mainDisplayValue, secondaryDisplayValue } = this.props;
    const currentProgressValue = Math.round(progressValue) || 0;
    const mainDisplayText = mainDisplayValue || '-';
    const secondaryDisplayText = secondaryDisplayValue || '';
    const progressAttribute = { 'data-progress': currentProgressValue };
    return (
      rh('div', { className: 'radialProgressContainer', ...progressAttribute }, [
        rh('div', { className: 'radialProgressBar' }, [
          rh('div', { className: 'mask full' }, [
            rh('div', { className: 'fill' }),
          ]),
          rh('div', { className: 'mask half' }, [
            rh('div', { className: 'fill' }),
            rh('div', { className: 'fill fix' }),
          ]),
          rh('div', { className: 'shadow' }),
        ]),
        rh('div', { className: 'inset' }, [
          rh('div', { className: 'mainValue' }, mainDisplayText),
          rh('div', { className: 'secondaryValue' }, secondaryDisplayText),
        ]),
      ])
    );
  }
}

RadialProgressBar.propTypes = {
  progressValue: PropTypes.number,
  mainDisplayValue: PropTypes.string,
  secondaryDisplayValue: PropTypes.string,
};

export default RadialProgressBar;
