/* eslint-env browser */
import React, { PropTypes } from 'react';
import rh from 'react-hyperscript';

import MajorPanel from './MajorPanel';
import RadialProgressBar from './RadialProgressBar';

import '../styles/input.scss';

class TextDisplayPanel extends React.Component {
  constructor(props) {
    super(props);
    this.renderInputText = this.renderInputText.bind(this);
  }

  renderInputText() {
    const { displayInput } = this.props;
    return (
      rh('div', { className: 'inputBorder' }, [
        rh('span', {}, displayInput),
        rh('span', { className: 'inputCursor' }, '_'),
      ])
    );
  }

  render() {
    const {
      gameTextWordCount,
      currentWord,
      completedCharacterCount,
      displayInput,
    } = this.props;
    const targetString = (displayInput.length <= currentWord.length) ?
      currentWord.slice(0, displayInput.length) :
      currentWord;
    const currentWordStatus = (displayInput === targetString) ? '' : 'error';
    const { completedWordCount, lastTimeDiff } = this.props.progressStatistics;
    const elapsedMinutesToLastCompletion = (lastTimeDiff / 1000 / 60);
    const typedWordCount = completedCharacterCount ?
      (completedCharacterCount / 5) :
      0;
    const currentWPM = elapsedMinutesToLastCompletion ?
      Math.round(typedWordCount / elapsedMinutesToLastCompletion) :
      0;
    const currentCPS = elapsedMinutesToLastCompletion ?
      (completedCharacterCount / elapsedMinutesToLastCompletion / 60).toFixed(1) :
      0;
    const progressPercentage = Math.round((completedWordCount / gameTextWordCount) * 100);

    return (
      rh(MajorPanel, {}, [
        rh('div',
          { className: `eight columns textInput ${currentWordStatus}` },
          this.renderInputText()
        ),
        rh('div',
          { className: 'two columns progressBar' }, [
            rh(RadialProgressBar, {
              progressValue: progressPercentage,
              mainDisplayValue: `${progressPercentage}%`,
              secondaryDisplayValue: '',
            }),
          ]
        ),
        rh('div', { className: 'two columns summaryItem' }, [
          rh('div', {}, [
            rh('span', {}, currentWPM.toString()),
            rh('span', { className: 'label' }, '     WPM'),
          ]),
          rh('div', {}, [
            rh('span', {}, currentCPS.toString()),
            rh('span', { className: 'label' }, '     CPS'),
          ]),
        ]),
      ])
    );
  }
}

TextDisplayPanel.propTypes = {
  displayInput: PropTypes.string,
  gameTextWordCount: PropTypes.number.isRequired,
  currentWord: PropTypes.string,
  completedCharacterCount: PropTypes.number,
  progressStatistics: PropTypes.shape({
    completedWordCount: PropTypes.number,
    lastTimeDiff: PropTypes.number,
  }),
};

export default TextDisplayPanel;
