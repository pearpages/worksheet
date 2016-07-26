/* tslint:disable:no-unused-variable */

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';
import {Model} from './model';

describe('Model', () => {
  it('should create an instance', () => {
    expect(new Model()).toBeTruthy();
  });
});
