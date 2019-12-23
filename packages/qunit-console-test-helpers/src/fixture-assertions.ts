import { FixtureCache, ConsoleState } from 'console-test-helpers';

type AssertResult = {
  result: boolean;
  actual: any;
  expected: any;
  message: string;
};

export default class FixtureAssertions {
  constructor(
    private fixtureCache: FixtureCache,
    private consoleState: ConsoleState,
    private testContext: Assert
  ) {}

  matches(fixtureName: string, consoleMethod: string = 'log', message?: string): void {
    let result: boolean = this.fixtureCache.matches(
      fixtureName,
      this.consoleState.getState(consoleMethod)
    );
    let expected = `Console output matches fixture ${fixtureName}`;
    let actual = result
      ? `Console output matches fixture ${fixtureName}`
      : `Console output does not match fixuture ${fixtureName}`;

    if (!message) {
      message = expected;
    }

    this.pushResult({ result, actual, expected, message });
  }

  private pushResult(result: AssertResult) {
    this.testContext.pushResult(result);
  }
}
