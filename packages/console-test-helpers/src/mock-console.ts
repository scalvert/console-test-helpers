import { IndexableConsole } from './interfaces';
import ConsoleState from './console-state';

let originalConsole: any;
let consoleState: ConsoleState;

let consoleProxyHandler: ProxyHandler<IndexableConsole> = {
  get(target, propKey: PropertyKey) {
    const method = <string>propKey;
    const originalMethod = target[method];

    return function(...args: any[]) {
      consoleState.record(method, args[0]);
      originalMethod.apply(originalConsole, args);
    };
  },
};

export function mockConsole(): { resetConsole: () => void; consoleState: ConsoleState } {
  originalConsole = console;
  consoleState = new ConsoleState();

  console = new Proxy(console, consoleProxyHandler);

  return { resetConsole, consoleState };
}

export function resetConsole(): void {
  console = originalConsole;
}
