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
exports.default = ConsoleState;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uc29sZS1zdGF0ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9jb25zb2xlLXN0YXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsTUFBcUIsWUFBWTtJQUcvQjtRQUNFLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxHQUFHLEVBQXlCLENBQUM7SUFDaEQsQ0FBQztJQUVELE1BQU0sQ0FBQyxNQUFjLEVBQUUsT0FBZTs7UUFDcEMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxFQUFFO1lBQzNCLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUMsQ0FBQztTQUM1QjtRQUVELElBQUksV0FBVyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBRXpDLE1BQUEsV0FBVywwQ0FBRSxJQUFJLENBQUMsT0FBTyxFQUFFO0lBQzdCLENBQUM7SUFFRCxRQUFRLENBQUMsTUFBYzs7UUFDckIsT0FBTyxPQUFBLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQywwQ0FBRSxJQUFJLENBQUMsSUFBSSxNQUFLLEVBQUUsQ0FBQztJQUNsRCxDQUFDO0NBQ0Y7QUFwQkQsK0JBb0JDIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29uc29sZVN0YXRlIHtcbiAgc3RhdGU6IE1hcDxzdHJpbmcsIEFycmF5PHN0cmluZz4+O1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuc3RhdGUgPSBuZXcgTWFwPHN0cmluZywgQXJyYXk8c3RyaW5nPj4oKTtcbiAgfVxuXG4gIHJlY29yZChtZXRob2Q6IHN0cmluZywgbWVzc2FnZTogc3RyaW5nKSB7XG4gICAgaWYgKCF0aGlzLnN0YXRlLmhhcyhtZXRob2QpKSB7XG4gICAgICB0aGlzLnN0YXRlLnNldChtZXRob2QsIFtdKTtcbiAgICB9XG5cbiAgICBsZXQgbWV0aG9kU3RhdGUgPSB0aGlzLnN0YXRlLmdldChtZXRob2QpO1xuXG4gICAgbWV0aG9kU3RhdGU/LnB1c2gobWVzc2FnZSk7XG4gIH1cblxuICBnZXRTdGF0ZShtZXRob2Q6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuc3RhdGUuZ2V0KG1ldGhvZCk/LmpvaW4oJ1xcbicpIHx8ICcnO1xuICB9XG59XG4iXX0=