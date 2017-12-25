/* eslint-disable import/no-extraneous-dependencies, no-unused-expressions */

import { createStore } from 'redux';
import { combineReducers } from 'redux-immutable';
import { should } from 'chai';
import { describe, it, beforeEach } from 'mocha';
import myClassReducer from '../../client/reducers/my-class-reducer';
import { makeEcho } from '../../client/actions/my-class-actions';

should();
let store;

describe('App State', () => {
  describe('MyClass', () => {
    beforeEach(() => {
      store = createStore(combineReducers({
        myClass: myClassReducer,
      }));
    });
    describe('makeEcho', () => {
      it('should make hasEchoed toggle false to true', () => {
        store.getState().getIn(['myClass', 'hasEchoed']).should.be.false;
        store.dispatch(makeEcho());
        store.getState().getIn(['myClass', 'hasEchoed']).should.be.true;
      });
    });
  });
});
