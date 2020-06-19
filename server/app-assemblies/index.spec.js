const assert = require('assert');

const assemblies = require('.');

it('add', () => {
  expect(assemblies.add(1, 2)).toEqual(3);
});
