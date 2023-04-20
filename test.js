const assert = require('assert');
const app = require('./index.js');

describe('index.js', () => {
  it('should return "Hello, World!" when calling the greet() function', () => {
    assert.strictEqual(app.greet(), 'Hello, World!');
  });
});
