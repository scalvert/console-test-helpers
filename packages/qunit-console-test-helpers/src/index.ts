import { ConsoleState, MockConsoleOptions, mockConsole } from 'console-test-helpers';

import { setupFixtures } from 'qunit-fixtures';

let consoleState: ConsoleState;

export function getConsoleState() {
  return consoleState;
}

export function setupMockConsole(hooks: NestedHooks, options: MockConsoleOptions) {
  let resetConsole: () => void;

  setupFixtures(options);

  hooks.beforeEach(function() {
    ({ resetConsole, consoleState } = mockConsole(options));
  });

  hooks.afterEach(function() {
    resetConsole();
  });
}
