import * as fixturify from 'fixturify';
export default class FixturifyFixtures {
    private _tmp;
    private _baseDir;
    constructor();
    get baseDir(): string;
    create(fixtures: fixturify.DirJSON): void;
    dispose(): void;
}
