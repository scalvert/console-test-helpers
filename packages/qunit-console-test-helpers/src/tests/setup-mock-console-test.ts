import { getConsoleState, setupMockConsole } from '../';

import { ConsoleState } from 'console-test-helpers';
import { FixtureAssert } from 'qunit-fixtures';
import FixturifyFixtures from './helpers/fixturify-fixtures';

const { test } = QUnit;

let fixturifyFixtures: FixturifyFixtures;

QUnit.module('setup-mock-console', function(hooks) {
  fixturifyFixtures = new FixturifyFixtures();
  fixturifyFixtures.create({
    'foobar.txt': 'foobar',
  });
  setupMockConsole(hooks, { fixturePath: fixturifyFixtures.baseDir, suppressOutput: true });

  test('setupMockConsole sets up consoleState', function(assert) {
    assert.ok(getConsoleState() instanceof ConsoleState);
  });

  test('setupMockConsole uses fixture assertions', function(assert: FixtureAssert) {
    let consoleState = getConsoleState();

    console.log('foobar');

    assert.fixture('foobar').matches(consoleState.log());
  });
});

QUnit.moduleDone(function() {
  fixturifyFixtures.dispose();
});
