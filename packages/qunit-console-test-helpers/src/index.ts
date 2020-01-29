import { ConsoleState, MockConsoleOptions, mockConsole } from 'console-test-helpers';

import { setupFixtures } from 'qunit-fixtures';

export let consoleState: ConsoleState;

export function getConsoleState(method: string = 'log') {
  return consoleState.getState(method);
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
