import FixturifyFixtures from './helpers/fixturify-fixtures';
import FixtureCache from '../fixture-cache';

const { test } = QUnit;

let fixturifyFixtures: FixturifyFixtures;

QUnit.module('fixture-cache', function(hooks) {
  hooks.before(function() {
    fixturifyFixtures = new FixturifyFixtures();
  });

  hooks.after(function() {
    fixturifyFixtures.dispose();
  });

  test('fixture cache loads fixtures', function(assert) {
    fixturifyFixtures.create({
      'fixture1.txt': 'I am the first fixture',
      'fixture2.txt': 'I am the second fixture',
    });

    let fixtureCache = new FixtureCache(fixturifyFixtures.baseDir);

    assert.ok(fixtureCache.matches('fixture1.txt', 'I am the first fixture'));
    assert.equal(fixtureCache.fixtures.size, 2);
  });
});
