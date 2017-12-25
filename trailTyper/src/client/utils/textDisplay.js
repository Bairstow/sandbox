import { createSelector } from 'reselect';

const getGameTextArray = state => state.getIn(['gameReducer', 'gameTextArray']);
const getCurrentIndex = state => state.getIn(['gameReducer', 'gameInfo', 'currentIndex']);

const deriveGameTextValues = createSelector(
  [getGameTextArray, getCurrentIndex],
  (gameTextArray, currentIndex) => {
    const gameTextWordCount = gameTextArray.length;
    const currentWord = (currentIndex < gameTextWordCount) ? gameTextArray[currentIndex] : '';
    let completedCharacterCount = 0;
    gameTextArray.forEach((word, index) => {
      if (index <= currentIndex) {
        completedCharacterCount += (word.length + 1);
      }
    });
    const preText = (currentIndex > 0) ?
      gameTextArray.slice(0, currentIndex).join(' ').concat(' ') :
      '';
    const postText = (currentIndex < (gameTextWordCount - 1)) ?
      ' '.concat(gameTextArray.slice(currentIndex + 1).join(' ')) :
      '';
    return {
      gameTextArray,
      gameTextWordCount,
      currentIndex,
      currentWord,
      completedCharacterCount,
      preText,
      postText,
    };
  }
);

export default deriveGameTextValues;
