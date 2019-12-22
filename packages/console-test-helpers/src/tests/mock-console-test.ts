import * as util from 'util';
import { mockConsole, resetConsole } from '../mock-console';

const { test } = QUnit;

QUnit.module('mockConsole', function() {
  test('mocks the console when called', function(assert) {
    mockConsole();

    assert.ok(util.types.isProxy(console));

    resetConsole();
  });

  test('resets the console when resetConsole called', function(assert) {
    mockConsole();

    assert.ok(util.types.isProxy(console));

    resetConsole();

    assert.notOk(util.types.isProxy(console));
  });

  test('resets the console when resetConsole called via destructor', function(assert) {
    let { resetConsole } = mockConsole();

    assert.ok(util.types.isProxy(console));

    resetConsole();

    assert.notOk(util.types.isProxy(console));
  });

  test('captures state when console methods are called', function(assert) {
    let { consoleState } = mockConsole();

    console.log('This is a message');

    assert.equal(consoleState.getState('log'), 'This is a message');

    resetConsole();
  });

  test('captures state when console methods are called repeatedly', function(assert) {
    let { consoleState } = mockConsole();

    console.log('This is a message');
    console.log('And so is this');

    assert.equal(
      consoleState.getState('log'),
      `This is a message
And so is this`
    );

    resetConsole();
  });
});
