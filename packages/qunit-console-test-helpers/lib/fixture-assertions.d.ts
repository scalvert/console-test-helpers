/// <reference types="qunit" />
import { FixtureCache, ConsoleState } from 'console-test-helpers';
export default class FixtureAssertions {
    private fixtureCache;
    private consoleState;
    private testContext;
    constructor(fixtureCache: FixtureCache, consoleState: ConsoleState, testContext: Assert);
    matches(fixtureName: string, consoleMethod?: string, message?: string): void;
    private pushResult;
}
