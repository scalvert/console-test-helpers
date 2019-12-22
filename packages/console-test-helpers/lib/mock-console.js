"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ConsoleState {
    constructor() {
        this.state = new Map();
    }
    record(method, message) {
        var _a;
        if (!this.state.has(method)) {
            this.state.set(method, []);
        }
        let methodState = this.state.get(method);
        (_a = methodState) === null || _a === void 0 ? void 0 : _a.push(message);
    }
    getState(method) {
        var _a;
        return ((_a = this.state.get(method)) === null || _a === void 0 ? void 0 : _a.join('\n')) || '';
    }
}
let originalConsole;
let consoleState;
let consoleProxyHandler = {
    get(target, propKey) {
        const method = propKey;
        const originalMethod = target[method];
        return function (...args) {
            consoleState.record(method, args[0]);
            debugger;
            originalMethod.apply(originalConsole, args);
        };
    },
};
function mockConsole() {
    originalConsole = console;
    consoleState = new ConsoleState();
    // eslint-disable-next-line no-global-assign
    console = new Proxy(console, consoleProxyHandler);
    return resetConsole;
}
exports.mockConsole = mockConsole;
function resetConsole() {
    // eslint-disable-next-line no-global-assign
    console = originalConsole;
}
exports.resetConsole = resetConsole;
function getConsoleState() {
    return consoleState;
}
exports.getConsoleState = getConsoleState;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9jay1jb25zb2xlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL21vY2stY29uc29sZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUVBLE1BQU0sWUFBWTtJQUdoQjtRQUNFLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxHQUFHLEVBQXlCLENBQUM7SUFDaEQsQ0FBQztJQUVELE1BQU0sQ0FBQyxNQUFjLEVBQUUsT0FBZTs7UUFDcEMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxFQUFFO1lBQzNCLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUMsQ0FBQztTQUM1QjtRQUVELElBQUksV0FBVyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBRXpDLE1BQUEsV0FBVywwQ0FBRSxJQUFJLENBQUMsT0FBTyxFQUFFO0lBQzdCLENBQUM7SUFFRCxRQUFRLENBQUMsTUFBYzs7UUFDckIsT0FBTyxPQUFBLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQywwQ0FBRSxJQUFJLENBQUMsSUFBSSxNQUFLLEVBQUUsQ0FBQztJQUNsRCxDQUFDO0NBQ0Y7QUFFRCxJQUFJLGVBQW9CLENBQUM7QUFDekIsSUFBSSxZQUEwQixDQUFDO0FBRS9CLElBQUksbUJBQW1CLEdBQW1DO0lBQ3hELEdBQUcsQ0FBQyxNQUFNLEVBQUUsT0FBb0I7UUFDOUIsTUFBTSxNQUFNLEdBQVcsT0FBTyxDQUFDO1FBQy9CLE1BQU0sY0FBYyxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUV0QyxPQUFPLFVBQVMsR0FBRyxJQUFXO1lBQzVCLFlBQVksQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3JDLFFBQVEsQ0FBQztZQUNULGNBQWMsQ0FBQyxLQUFLLENBQUMsZUFBZSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQzlDLENBQUMsQ0FBQztJQUNKLENBQUM7Q0FDRixDQUFDO0FBRUYsU0FBZ0IsV0FBVztJQUN6QixlQUFlLEdBQUcsT0FBTyxDQUFDO0lBQzFCLFlBQVksR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO0lBQ2xDLDRDQUE0QztJQUM1QyxPQUFPLEdBQUcsSUFBSSxLQUFLLENBQUMsT0FBTyxFQUFFLG1CQUFtQixDQUFDLENBQUM7SUFFbEQsT0FBTyxZQUFZLENBQUM7QUFDdEIsQ0FBQztBQVBELGtDQU9DO0FBRUQsU0FBZ0IsWUFBWTtJQUMxQiw0Q0FBNEM7SUFDNUMsT0FBTyxHQUFHLGVBQWUsQ0FBQztBQUM1QixDQUFDO0FBSEQsb0NBR0M7QUFFRCxTQUFnQixlQUFlO0lBQzdCLE9BQU8sWUFBWSxDQUFDO0FBQ3RCLENBQUM7QUFGRCwwQ0FFQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluZGV4YWJsZUNvbnNvbGUgfSBmcm9tICcuL2ludGVyZmFjZXMnO1xuXG5jbGFzcyBDb25zb2xlU3RhdGUge1xuICBzdGF0ZTogTWFwPHN0cmluZywgQXJyYXk8c3RyaW5nPj47XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5zdGF0ZSA9IG5ldyBNYXA8c3RyaW5nLCBBcnJheTxzdHJpbmc+PigpO1xuICB9XG5cbiAgcmVjb3JkKG1ldGhvZDogc3RyaW5nLCBtZXNzYWdlOiBzdHJpbmcpIHtcbiAgICBpZiAoIXRoaXMuc3RhdGUuaGFzKG1ldGhvZCkpIHtcbiAgICAgIHRoaXMuc3RhdGUuc2V0KG1ldGhvZCwgW10pO1xuICAgIH1cblxuICAgIGxldCBtZXRob2RTdGF0ZSA9IHRoaXMuc3RhdGUuZ2V0KG1ldGhvZCk7XG5cbiAgICBtZXRob2RTdGF0ZT8ucHVzaChtZXNzYWdlKTtcbiAgfVxuXG4gIGdldFN0YXRlKG1ldGhvZDogc3RyaW5nKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5zdGF0ZS5nZXQobWV0aG9kKT8uam9pbignXFxuJykgfHwgJyc7XG4gIH1cbn1cblxubGV0IG9yaWdpbmFsQ29uc29sZTogYW55O1xubGV0IGNvbnNvbGVTdGF0ZTogQ29uc29sZVN0YXRlO1xuXG5sZXQgY29uc29sZVByb3h5SGFuZGxlcjogUHJveHlIYW5kbGVyPEluZGV4YWJsZUNvbnNvbGU+ID0ge1xuICBnZXQodGFyZ2V0LCBwcm9wS2V5OiBQcm9wZXJ0eUtleSkge1xuICAgIGNvbnN0IG1ldGhvZCA9IDxzdHJpbmc+cHJvcEtleTtcbiAgICBjb25zdCBvcmlnaW5hbE1ldGhvZCA9IHRhcmdldFttZXRob2RdO1xuXG4gICAgcmV0dXJuIGZ1bmN0aW9uKC4uLmFyZ3M6IGFueVtdKSB7XG4gICAgICBjb25zb2xlU3RhdGUucmVjb3JkKG1ldGhvZCwgYXJnc1swXSk7XG4gICAgICBkZWJ1Z2dlcjtcbiAgICAgIG9yaWdpbmFsTWV0aG9kLmFwcGx5KG9yaWdpbmFsQ29uc29sZSwgYXJncyk7XG4gICAgfTtcbiAgfSxcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBtb2NrQ29uc29sZSgpIHtcbiAgb3JpZ2luYWxDb25zb2xlID0gY29uc29sZTtcbiAgY29uc29sZVN0YXRlID0gbmV3IENvbnNvbGVTdGF0ZSgpO1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tZ2xvYmFsLWFzc2lnblxuICBjb25zb2xlID0gbmV3IFByb3h5KGNvbnNvbGUsIGNvbnNvbGVQcm94eUhhbmRsZXIpO1xuXG4gIHJldHVybiByZXNldENvbnNvbGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZXNldENvbnNvbGUoKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1nbG9iYWwtYXNzaWduXG4gIGNvbnNvbGUgPSBvcmlnaW5hbENvbnNvbGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRDb25zb2xlU3RhdGUoKTogQ29uc29sZVN0YXRlIHtcbiAgcmV0dXJuIGNvbnNvbGVTdGF0ZTtcbn1cbiJdfQ==