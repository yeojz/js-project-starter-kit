import {expect} from 'chai';
import index from '../src/index';

describe('index', function () {
  it('should return hello world', function () {
    expect(index()).to.equal('hello world');
  });
});
