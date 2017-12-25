/* eslint-disable import/no-extraneous-dependencies, no-console */

import chai from 'chai';
import { stub } from 'sinon';
import sinonChai from 'sinon-chai';
import { describe, it } from 'mocha';
import MyClass from '../../shared/my-class';

chai.should();
chai.use(sinonChai);

describe('Shared', () => {
  describe('MyClass', () => {
    describe('echoInConsole', () => {
      it('should print a string with its constructed name', () => {
        stub(console, 'log');
        new MyClass('Test Name').echoInConsole();
        console.log.should.have.been.calledWith('myClass echo call for Test Name');
        console.log.restore();
      });
    });
  });
});
