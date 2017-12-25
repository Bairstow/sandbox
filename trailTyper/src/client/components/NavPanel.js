/* eslint-env browser */
import React, { Component, PropTypes } from 'react';
import rh from 'react-hyperscript';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import FullViewWidthPanel from './FullViewWidthPanel';

import '../styles/nav.scss';

const renderTrailIcon = () => (
  rh('svg', {
    id: 'svg2',
    xmlns: 'http://www.w3.org/2000/svg',
    height: '60',
    width: '60',
    viewBox: '0 0 100 100',
  }, [
    rh('g', {
      id: 'trailIconBaseLayer',
    }, [
      rh('path', { id: 'trailIcon1', d: 'm50 50 L 75 75 L 100 50 L 75 25z' }, []),
      rh('path', { id: 'trailIcon2', d: 'm50 0 L 64 14 L 39 39 L 25 25z' }, []),
      rh('path', { id: 'trailIcon3', d: 'm50 100 L 64 86 L 39 61 L 25 75z' }, []),
      rh('path', { id: 'trailIcon4', d: 'm65 15 L 74 24 L 49 49 L 40 40z' }, []),
      rh('path', { id: 'trailIcon5', d: 'm65 85 L 74 76 L 49 51 L 40 60z' }, []),
      rh('path', { id: 'trailIcon6', d: 'm0 50 L 14 37 L 26 50 L 14 63z' }, []),
    ]),
  ])
);

const renderNavButton = (buttonOptions) => {
  const { classNames, onClickHandler, linkRoute, iconText, labelText } = buttonOptions;
  return (
    rh('div', {
      className: classNames.join(' '),
      onClick: () => {
        if (onClickHandler) {
          onClickHandler();
        }
      },
    }, [
      rh(Link, { to: linkRoute }, [
        rh('div', { className: 'navButtonContainer' }, [
          rh('div', { className: 'navButtonIcon' }, iconText),
          rh('div', { className: 'navButtonText' }, labelText),
        ]),
      ]),
    ])
  );
};

class NavPanel extends Component {
  constructor(props) {
    super(props);
    this.renderAppLogo = this.renderAppLogo.bind(this);
  }

  renderAppLogo() {
    const { resetGameState } = this.props.gameActions;
    return (
      rh('div', {
        className: 'two columns headerItem',
        onClick: () => { resetGameState(); },
      }, rh(Link, { to: '/' }, renderTrailIcon()))
    );
  }

  render() {
    const { startNewPracticeGame } = this.props.gameActions;
    const playButtonOptions = {
      classNames: ['two', 'columns', 'headerItem', 'inactive'],
      onClickHandler: null,
      linkRoute: '/game',
      iconText: '>>>',
      labelText: 'PLAY',
    };
    const playButtonElement = renderNavButton(playButtonOptions);
    const practiceButtonOptions = {
      classNames: ['two', 'columns', 'headerItem'],
      onClickHandler: startNewPracticeGame,
      linkRoute: '/game',
      iconText: '>',
      labelText: 'PRACTICE',
    };
    const practiceButtonElement = renderNavButton(practiceButtonOptions);
    const leaderboardButtonOptions = {
      classNames: ['two', 'columns', 'headerItem', 'inactive'],
      onClickHandler: null,
      linkRoute: '/game',
      iconText: '123',
      labelText: 'LEADERS',
    };
    const leaderboardButtonElement = renderNavButton(leaderboardButtonOptions);
    const profileButtonOptions = {
      classNames: ['two', 'columns', 'headerItem', 'inactive'],
      onClickHandler: null,
      linkRoute: '/game',
      iconText: 'o/',
      labelText: 'PROFILE',
    };
    const profileButtonElement = renderNavButton(profileButtonOptions);
    return (
      rh(FullViewWidthPanel, {}, [
        this.renderAppLogo(),
        playButtonElement,
        practiceButtonElement,
        leaderboardButtonElement,
        profileButtonElement,
      ])
    );
  }
}

NavPanel.propTypes = {
  gameActions: PropTypes.shape({
    resetGameState: PropTypes.func.isRequired,
    startNewPracticeGame: PropTypes.func.isRequired,
  }).isRequired,
};

const mapStateToProps = state => ({ state });

export default connect(mapStateToProps)(NavPanel);
