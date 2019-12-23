"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const util = require("util");
const mock_console_1 = require("../mock-console");
const { test } = QUnit;
QUnit.module('mock-console', function () {
    test('mocks the console when called', function (assert) {
        let { resetConsole } = mock_console_1.default();
        assert.ok(util.types.isProxy(console));
        resetConsole();
    });
    test('resets the console when resetConsole called', function (assert) {
        let { resetConsole } = mock_console_1.default();
        assert.ok(util.types.isProxy(console));
        resetConsole();
        assert.notOk(util.types.isProxy(console));
    });
    test('resets the console when resetConsole called via destructor', function (assert) {
        let { resetConsole } = mock_console_1.default();
        assert.ok(util.types.isProxy(console));
        resetConsole();
        assert.notOk(util.types.isProxy(console));
    });
    test('captures state when console methods are called', function (assert) {
        let { resetConsole, consoleState } = mock_console_1.default();
        console.log('This is a message');
        assert.equal(consoleState.getState('log'), 'This is a message');
        resetConsole();
    });
    test('captures state when console methods are called repeatedly', function (assert) {
        let { resetConsole, consoleState } = mock_console_1.default();
        console.log('This is a message');
        console.log('And so is this');
        assert.equal(consoleState.getState('log'), `This is a message
And so is this`);
        resetConsole();
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9jay1jb25zb2xlLXRlc3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvdGVzdHMvbW9jay1jb25zb2xlLXRlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSw2QkFBNkI7QUFDN0Isa0RBQTBDO0FBRTFDLE1BQU0sRUFBRSxJQUFJLEVBQUUsR0FBRyxLQUFLLENBQUM7QUFFdkIsS0FBSyxDQUFDLE1BQU0sQ0FBQyxjQUFjLEVBQUU7SUFDM0IsSUFBSSxDQUFDLCtCQUErQixFQUFFLFVBQVMsTUFBTTtRQUNuRCxJQUFJLEVBQUUsWUFBWSxFQUFFLEdBQUcsc0JBQVcsRUFBRSxDQUFDO1FBRXJDLE1BQU0sQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztRQUV2QyxZQUFZLEVBQUUsQ0FBQztJQUNqQixDQUFDLENBQUMsQ0FBQztJQUVILElBQUksQ0FBQyw2Q0FBNkMsRUFBRSxVQUFTLE1BQU07UUFDakUsSUFBSSxFQUFFLFlBQVksRUFBRSxHQUFHLHNCQUFXLEVBQUUsQ0FBQztRQUVyQyxNQUFNLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7UUFFdkMsWUFBWSxFQUFFLENBQUM7UUFFZixNQUFNLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7SUFDNUMsQ0FBQyxDQUFDLENBQUM7SUFFSCxJQUFJLENBQUMsNERBQTRELEVBQUUsVUFBUyxNQUFNO1FBQ2hGLElBQUksRUFBRSxZQUFZLEVBQUUsR0FBRyxzQkFBVyxFQUFFLENBQUM7UUFFckMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1FBRXZDLFlBQVksRUFBRSxDQUFDO1FBRWYsTUFBTSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO0lBQzVDLENBQUMsQ0FBQyxDQUFDO0lBRUgsSUFBSSxDQUFDLGdEQUFnRCxFQUFFLFVBQVMsTUFBTTtRQUNwRSxJQUFJLEVBQUUsWUFBWSxFQUFFLFlBQVksRUFBRSxHQUFHLHNCQUFXLEVBQUUsQ0FBQztRQUVuRCxPQUFPLENBQUMsR0FBRyxDQUFDLG1CQUFtQixDQUFDLENBQUM7UUFFakMsTUFBTSxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxFQUFFLG1CQUFtQixDQUFDLENBQUM7UUFFaEUsWUFBWSxFQUFFLENBQUM7SUFDakIsQ0FBQyxDQUFDLENBQUM7SUFFSCxJQUFJLENBQUMsMkRBQTJELEVBQUUsVUFBUyxNQUFNO1FBQy9FLElBQUksRUFBRSxZQUFZLEVBQUUsWUFBWSxFQUFFLEdBQUcsc0JBQVcsRUFBRSxDQUFDO1FBRW5ELE9BQU8sQ0FBQyxHQUFHLENBQUMsbUJBQW1CLENBQUMsQ0FBQztRQUNqQyxPQUFPLENBQUMsR0FBRyxDQUFDLGdCQUFnQixDQUFDLENBQUM7UUFFOUIsTUFBTSxDQUFDLEtBQUssQ0FDVixZQUFZLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxFQUM1QjtlQUNTLENBQ1YsQ0FBQztRQUVGLFlBQVksRUFBRSxDQUFDO0lBQ2pCLENBQUMsQ0FBQyxDQUFDO0FBQ0wsQ0FBQyxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyB1dGlsIGZyb20gJ3V0aWwnO1xuaW1wb3J0IG1vY2tDb25zb2xlIGZyb20gJy4uL21vY2stY29uc29sZSc7XG5cbmNvbnN0IHsgdGVzdCB9ID0gUVVuaXQ7XG5cblFVbml0Lm1vZHVsZSgnbW9jay1jb25zb2xlJywgZnVuY3Rpb24oKSB7XG4gIHRlc3QoJ21vY2tzIHRoZSBjb25zb2xlIHdoZW4gY2FsbGVkJywgZnVuY3Rpb24oYXNzZXJ0KSB7XG4gICAgbGV0IHsgcmVzZXRDb25zb2xlIH0gPSBtb2NrQ29uc29sZSgpO1xuXG4gICAgYXNzZXJ0Lm9rKHV0aWwudHlwZXMuaXNQcm94eShjb25zb2xlKSk7XG5cbiAgICByZXNldENvbnNvbGUoKTtcbiAgfSk7XG5cbiAgdGVzdCgncmVzZXRzIHRoZSBjb25zb2xlIHdoZW4gcmVzZXRDb25zb2xlIGNhbGxlZCcsIGZ1bmN0aW9uKGFzc2VydCkge1xuICAgIGxldCB7IHJlc2V0Q29uc29sZSB9ID0gbW9ja0NvbnNvbGUoKTtcblxuICAgIGFzc2VydC5vayh1dGlsLnR5cGVzLmlzUHJveHkoY29uc29sZSkpO1xuXG4gICAgcmVzZXRDb25zb2xlKCk7XG5cbiAgICBhc3NlcnQubm90T2sodXRpbC50eXBlcy5pc1Byb3h5KGNvbnNvbGUpKTtcbiAgfSk7XG5cbiAgdGVzdCgncmVzZXRzIHRoZSBjb25zb2xlIHdoZW4gcmVzZXRDb25zb2xlIGNhbGxlZCB2aWEgZGVzdHJ1Y3RvcicsIGZ1bmN0aW9uKGFzc2VydCkge1xuICAgIGxldCB7IHJlc2V0Q29uc29sZSB9ID0gbW9ja0NvbnNvbGUoKTtcblxuICAgIGFzc2VydC5vayh1dGlsLnR5cGVzLmlzUHJveHkoY29uc29sZSkpO1xuXG4gICAgcmVzZXRDb25zb2xlKCk7XG5cbiAgICBhc3NlcnQubm90T2sodXRpbC50eXBlcy5pc1Byb3h5KGNvbnNvbGUpKTtcbiAgfSk7XG5cbiAgdGVzdCgnY2FwdHVyZXMgc3RhdGUgd2hlbiBjb25zb2xlIG1ldGhvZHMgYXJlIGNhbGxlZCcsIGZ1bmN0aW9uKGFzc2VydCkge1xuICAgIGxldCB7IHJlc2V0Q29uc29sZSwgY29uc29sZVN0YXRlIH0gPSBtb2NrQ29uc29sZSgpO1xuXG4gICAgY29uc29sZS5sb2coJ1RoaXMgaXMgYSBtZXNzYWdlJyk7XG5cbiAgICBhc3NlcnQuZXF1YWwoY29uc29sZVN0YXRlLmdldFN0YXRlKCdsb2cnKSwgJ1RoaXMgaXMgYSBtZXNzYWdlJyk7XG5cbiAgICByZXNldENvbnNvbGUoKTtcbiAgfSk7XG5cbiAgdGVzdCgnY2FwdHVyZXMgc3RhdGUgd2hlbiBjb25zb2xlIG1ldGhvZHMgYXJlIGNhbGxlZCByZXBlYXRlZGx5JywgZnVuY3Rpb24oYXNzZXJ0KSB7XG4gICAgbGV0IHsgcmVzZXRDb25zb2xlLCBjb25zb2xlU3RhdGUgfSA9IG1vY2tDb25zb2xlKCk7XG5cbiAgICBjb25zb2xlLmxvZygnVGhpcyBpcyBhIG1lc3NhZ2UnKTtcbiAgICBjb25zb2xlLmxvZygnQW5kIHNvIGlzIHRoaXMnKTtcblxuICAgIGFzc2VydC5lcXVhbChcbiAgICAgIGNvbnNvbGVTdGF0ZS5nZXRTdGF0ZSgnbG9nJyksXG4gICAgICBgVGhpcyBpcyBhIG1lc3NhZ2VcbkFuZCBzbyBpcyB0aGlzYFxuICAgICk7XG5cbiAgICByZXNldENvbnNvbGUoKTtcbiAgfSk7XG59KTtcbiJdfQ==