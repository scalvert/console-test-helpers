export default class FixtureCache {
    fixtures: Map<string, string>;
    constructor(fixturePath: string);
    loadFixtures(fixturePath: string): void;
    matches(fixtureName: string, expectedContents: string): boolean;
}
