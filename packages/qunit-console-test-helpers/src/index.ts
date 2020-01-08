import { mockConsole, FixtureCache, ConsoleState, MockConsoleOptions } from 'console-test-helpers';
import ConsoleAssertions from './console-assertions';

interface ConsoleObject {
  console: () => ConsoleAssertions;
}
interface ConsoleAssert extends Assert, ConsoleObject {}

let fixtureCache: FixtureCache;

export function setupMockConsole(hooks: NestedHooks, options: MockConsoleOptions) {
  let resetConsole: () => void;
  let consoleState: ConsoleState;

  setupFixtureCache(options.fixturePath);

  hooks.beforeEach(function() {
    ({ resetConsole, consoleState } = mockConsole(options));
  });

  hooks.afterEach(function() {
    resetConsole();
  });

  (<ConsoleAssert>QUnit.assert).console = function(): ConsoleAssertions {
    return new ConsoleAssertions(fixtureCache, consoleState, this);
  };
}

function setupFixtureCache(fixturePath: string) {
  if (typeof fixturePath === undefined) {
    fixtureCache = new FixtureCache(fixturePath);
  }
}
