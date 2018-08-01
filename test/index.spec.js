/* global describe, it, before */

import chai from 'chai';
import Glitchie from '../lib/glitchie.js';

chai.expect();

const expect = chai.expect;

let lib;

describe('Given an instance of my Glitchie library', () => {
  before(() => {
    lib = new Glitchie();
  });
  describe('when I need to see if an image is loaded intially', () => {
    it('should not be loaded initially', () => {
      expect(lib.loaded).to.be.equal(false);
    });
  });
});
