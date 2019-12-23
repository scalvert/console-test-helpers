import ConsoleState from '../console-state';
export declare type MockConsole = {
    resetConsole: () => void;
    consoleState: ConsoleState;
};
export declare type MockConsoleOptions = {
    fixturePath: string;
    suppressOutput: boolean;
};
export interface Dict<T> {
    [key: string]: T;
}
export interface IndexableConsole extends Console, Dict<any> {
}
