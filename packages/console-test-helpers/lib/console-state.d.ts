export default class ConsoleState {
    state: Map<string, Array<string>>;
    constructor();
    record(method: string, message: string): void;
    getState(method: string): string;
}
