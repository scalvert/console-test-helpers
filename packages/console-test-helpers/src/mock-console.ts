import { IndexableConsole } from './interfaces';

class ConsoleState {
  state: Map<string, Array<string>>;

  constructor() {
    this.state = new Map<string, Array<string>>();
  }

  record(method: string, message: string) {
    if (!this.state.has(method)) {
      this.state.set(method, []);
    }

    let methodState = this.state.get(method);

    methodState?.push(message);
  }

  getState(method: string): string {
    return this.state.get(method)?.join('\n') || '';
  }
}

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

export function mockConsole() {
  originalConsole = console;
  consoleState = new ConsoleState();

  console = new Proxy(console, consoleProxyHandler);

  return resetConsole;
}

export function resetConsole() {
  console = originalConsole;
}

export function getConsoleState(): ConsoleState {
  return consoleState;
}
