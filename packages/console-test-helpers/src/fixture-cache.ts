import * as fs from 'fs';
import * as path from 'path';
import * as recursiveReadSync from 'recursive-readdir-sync';

function getFileContents(filePath: string): string {
  return fs.readFileSync(filePath, {
    encoding: 'utf-8',
  });
}

export default class FixtureCache {
  fixtures: Map<string, string>;

  constructor(fixturePath: string) {
    this.fixtures = new Map<string, string>();

    this.loadFixtures(fixturePath);
  }

  loadFixtures(fixturePath: string) {
    try {
      let files = recursiveReadSync(fixturePath);

      files.forEach((file: string) => {
        this.fixtures.set(path.basename(file, '.txt'), getFileContents(file));
      });
    } catch (e) {
      console.log(`Fixtures located in ${fixturePath} could not be loaded. Reason: ${e.message}`);
    }
  }

  matches(fixtureName: string, expectedContents: string) {
    if (!this.fixtures.has(fixtureName)) {
      console.log(`No fixture was found matching ${fixtureName}`);
      return false;
    }

    let actualContents = this.fixtures.get(fixtureName);

    return actualContents === expectedContents;
  }
}
