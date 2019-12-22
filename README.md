# console-test-helpers

When building CLIs that output to the console, it's useful to be able to record
and validate the console output for subsequent verification. Doing so requires a
few useful helpers:

- A console replacement to record the _actual_ console output
- A fixture mechanism to store the _expected_ output
- An assertion mechanism, whereby you can assert _actual_ output against _expected_ fixtures

`console-test-helpers` provides all of the above.

## Installation

```bash
yarn add console-test-helpers --dev

# or

npm install console-test-helpers --save-dev
```

## Usage

`console-test-helpers` replaces the real console with a fake, which stores the output
in addition to acting as a proxy for all console calls. This means the console will behave
the same, but will gather output for later validation. Validation can be performed using
fixtures that can be asserted against.

Below is an example using `qunit-console-test-helpers`, the sister package to `console-test-helpers`.

```js
import { module, test } from 'qunit';
import { setupMockConsole } from 'qunit-console-test-helpers';

// ...
module('With mocked console', function(hooks) {
  setupMockConsole(hooks, { fixturePath: './tests/fixtures' });

  test('Something that mocks the console', function(assert) {
    somethingThatUsesConsole();

    assert.console().matches('fixture-name');
  });
});
```

## Contributing

See the [Contributing](CONTRIBUTING.md) guide for details.

## License

This project is licensed under the [MIT License](LICENSE.md).
