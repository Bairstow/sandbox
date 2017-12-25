/* eslint-env browser */
import React, { Component, PropTypes } from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';
import rh from 'react-hyperscript';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import moment from 'moment';

import { incrementTargetIndex, appendProgressLog } from '../dux/game';
import { handleBackspaceInput, handleSpaceInput } from '../utils/textInput';
import deriveGameTextValues from '../utils/textDisplay';

import TextInputPanel from '../components/TextInputPanel';

const clearInputState = {
  displayInput: '',
  characterProgressLog: [],
  characterErrorLog: [],
  inputValid: true,
};

class TextInputContainer extends Component {
  constructor(props) {
    super(props);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.state = Object.assign({}, clearInputState);
  }

  componentWillMount() {
    document.addEventListener('keydown', this.handleKeyDown, true);
    document.addEventListener('keypress', this.handleKeyPress, false);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyDown, true);
    document.removeEventListener('keypress', this.handleKeyPress, false);
  }

  handleKeyDown(event) {
    let { inputValid } = this.state;
    const {
      displayInput,
      characterProgressLog,
      characterErrorLog,
    } = this.state;

    const checkInputValid = () => {
      const { state } = this.props;
      const gameTextValues = deriveGameTextValues(state);
      const { currentWord } = gameTextValues;
      const matchingSection = currentWord.slice(0, displayInput.length);
      inputValid = (displayInput === matchingSection);
    };

    const removeProgressEntry = () => {
      const updated = Object.assign([], characterProgressLog);
      if (inputValid) {
        updated.pop();
      }
      return updated;
    };

    const checkCorrectWordEntry = (input, current) => {
      if (input === current) {
        const { dispatch } = this.props;
        dispatch(incrementTargetIndex());
        dispatch(appendProgressLog(moment.now()));
        this.setState(Object.assign({}, clearInputState));
      } else {
        const newDisplayInput = handleSpaceInput(input);
        this.setState({
          displayInput: newDisplayInput,
          characterProgressLog,
          characterErrorLog,
          inputValid,
        });
      }
    };

    switch (event.code) {
      case 'Backspace': {
        event.preventDefault();
        checkInputValid();
        let updatedProgressLog = characterProgressLog;
        if (inputValid) {
          updatedProgressLog = removeProgressEntry();
        }
        const newDisplayInput = handleBackspaceInput(displayInput);
        this.setState({
          displayInput: newDisplayInput,
          characterProgressLog: updatedProgressLog,
          characterErrorLog,
          inputValid,
        });
        break;
      }
      case 'Space': {
        event.preventDefault();
        const { state } = this.props;
        const gameTextValues = deriveGameTextValues(state);
        const { currentWord } = gameTextValues;
        checkCorrectWordEntry(displayInput, currentWord);
        break;
      }
    }
  }

  handleKeyPress(event) {
    if (event.code === 'Space' || event.code === 'Enter') { return; }
    let { inputValid } = this.state;
    const {
      displayInput,
      characterProgressLog,
      characterErrorLog,
    } = this.state;
    const { state } = this.props;
    const gameTextValues = deriveGameTextValues(state);
    const { currentIndex, currentWord, gameTextWordCount } = gameTextValues;

    const targetCharacterIndex = displayInput.length;
    const targetCharacter = currentWord[targetCharacterIndex];
    if (event.key === targetCharacter && inputValid) {
      characterProgressLog.push(moment.now());
    } else {
      characterErrorLog.push({ input: event.key, target: targetCharacter });
      inputValid = false;
    }

    const isFinalWord = (currentIndex === (gameTextWordCount - 1));
    const updatedText = displayInput.concat(event.key);
    if (isFinalWord && updatedText === currentWord) {
      const { dispatch } = this.props;
      dispatch(incrementTargetIndex());
      dispatch(appendProgressLog(moment.now()));
      this.setState(Object.assign({}, clearInputState));
    } else {
      this.setState({ displayInput: updatedText });
    }
  }

  render() {
    const { displayInput } = this.state;
    return rh(TextInputPanel, { displayInput, ...this.props });
  }
}

const getProgressLog = state => state.getIn(['gameReducer', 'gameInfo', 'progressLog']);
const getStartTime = state => state.getIn(['gameReducer', 'gameInfo', 'startTime']);
const calculateProgressStatistics = createSelector(
  [getProgressLog, getStartTime],
  (progressLog, startTime) => {
    const completedWordCount = progressLog.count();
    const lastCompletedTime = moment(progressLog.last());
    const lastTimeDiff = completedWordCount ?
      lastCompletedTime.diff(moment(startTime)) :
      null;
    return {
      completedWordCount,
      lastTimeDiff,
    };
  }
);

const mapStateToProps = (state) => {
  const gameTextValues = deriveGameTextValues(state);
  const { gameTextWordCount, currentWord, completedCharacterCount } = gameTextValues;
  return {
    gameTextWordCount,
    currentWord,
    completedCharacterCount,
    progressStatistics: calculateProgressStatistics(state),
  };
};

TextInputContainer.propTypes = {
  dispatch: PropTypes.func.isRequired,
  state: ImmutablePropTypes.map,
};

export default connect(mapStateToProps)(TextInputContainer);
