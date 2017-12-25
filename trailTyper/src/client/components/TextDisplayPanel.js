import React, { PropTypes } from 'react';
import rh from 'react-hyperscript';

import MajorPanel from './MajorPanel';

import '../styles/text.scss';

class TextDisplayPanel extends React.Component {
  render() {
    const {
      isGameActive,
      isCountdown,
      countdownValue,
      preText,
      currentWord,
      postText,
    } = this.props;
    const countdownElement = (
      rh('div', { className: 'twelve columns countdown textDisplay' }, countdownValue.toString())
    );
    const textElement = (
      rh('div', { className: 'twelve columns textDisplay' }, [
        rh('span', { className: 'preText' }, preText),
        rh('span', { className: 'currentWord' }, currentWord),
        rh('span', { className: 'postText' }, postText),
      ])
    );
    const currentTextElement = isCountdown ? countdownElement : textElement;
    const displayElement = isGameActive ? (
      rh(MajorPanel, {}, [
        rh('div', { className: 'twelve columns textInfo' }, 'Text source temporarily - Bacon Ipsum'),
        currentTextElement,
      ])
    ) :
    null;

    return displayElement;
  }
}

TextDisplayPanel.propTypes = {
  isGameActive: PropTypes.bool.isRequired,
  isCountdown: PropTypes.bool.isRequired,
  countdownValue: PropTypes.number.isRequired,
  preText: PropTypes.string.isRequired,
  currentWord: PropTypes.string.isRequired,
  postText: PropTypes.string.isRequired,
};

export default TextDisplayPanel;
