import * as util from 'util';
import { mockConsole, resetConsole, getConsoleState } from '../mock-console';

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
    let reset = mockConsole();

    assert.ok(util.types.isProxy(console));

    reset();

    assert.notOk(util.types.isProxy(console));
  });

  test('captures state when console methods are called', function(assert) {
    let state;
    mockConsole();
    debugger;
    console.log('This is a message');

    state = getConsoleState();

    assert.equal(state.getState('log'), 'This is a message');

    resetConsole();
  });
});
