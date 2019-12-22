export default class ConsoleState {
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
