"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const util = require("util");
const mock_console_1 = require("../mock-console");
const { test } = QUnit;
QUnit.module('mockConsole', function () {
    test('mocks the console when called', function (assert) {
        mock_console_1.mockConsole();
        assert.ok(util.types.isProxy(console));
        mock_console_1.resetConsole();
    });
    test('resets the console when resetConsole called', function (assert) {
        mock_console_1.mockConsole();
        assert.ok(util.types.isProxy(console));
        mock_console_1.resetConsole();
        assert.notOk(util.types.isProxy(console));
    });
    test('resets the console when resetConsole called via destructor', function (assert) {
        let reset = mock_console_1.mockConsole();
        assert.ok(util.types.isProxy(console));
        reset();
        assert.notOk(util.types.isProxy(console));
    });
    test('captures state when console methods are called', function (assert) {
        let state;
        mock_console_1.mockConsole();
        debugger;
        console.log('This is a message');
        state = mock_console_1.getConsoleState();
        assert.equal(state.getState('log'), 'This is a message');
        mock_console_1.resetConsole();
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9jay1jb25zb2xlLXRlc3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvdGVzdHMvbW9jay1jb25zb2xlLXRlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSw2QkFBNkI7QUFDN0Isa0RBQTZFO0FBRTdFLE1BQU0sRUFBRSxJQUFJLEVBQUUsR0FBRyxLQUFLLENBQUM7QUFFdkIsS0FBSyxDQUFDLE1BQU0sQ0FBQyxhQUFhLEVBQUU7SUFDMUIsSUFBSSxDQUFDLCtCQUErQixFQUFFLFVBQVMsTUFBTTtRQUNuRCwwQkFBVyxFQUFFLENBQUM7UUFFZCxNQUFNLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7UUFFdkMsMkJBQVksRUFBRSxDQUFDO0lBQ2pCLENBQUMsQ0FBQyxDQUFDO0lBRUgsSUFBSSxDQUFDLDZDQUE2QyxFQUFFLFVBQVMsTUFBTTtRQUNqRSwwQkFBVyxFQUFFLENBQUM7UUFFZCxNQUFNLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7UUFFdkMsMkJBQVksRUFBRSxDQUFDO1FBRWYsTUFBTSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO0lBQzVDLENBQUMsQ0FBQyxDQUFDO0lBRUgsSUFBSSxDQUFDLDREQUE0RCxFQUFFLFVBQVMsTUFBTTtRQUNoRixJQUFJLEtBQUssR0FBRywwQkFBVyxFQUFFLENBQUM7UUFFMUIsTUFBTSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1FBRXZDLEtBQUssRUFBRSxDQUFDO1FBRVIsTUFBTSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO0lBQzVDLENBQUMsQ0FBQyxDQUFDO0lBRUgsSUFBSSxDQUFDLGdEQUFnRCxFQUFFLFVBQVMsTUFBTTtRQUNwRSxJQUFJLEtBQUssQ0FBQztRQUNWLDBCQUFXLEVBQUUsQ0FBQztRQUNkLFFBQVEsQ0FBQztRQUNULE9BQU8sQ0FBQyxHQUFHLENBQUMsbUJBQW1CLENBQUMsQ0FBQztRQUVqQyxLQUFLLEdBQUcsOEJBQWUsRUFBRSxDQUFDO1FBRTFCLE1BQU0sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsRUFBRSxtQkFBbUIsQ0FBQyxDQUFDO1FBRXpELDJCQUFZLEVBQUUsQ0FBQztJQUNqQixDQUFDLENBQUMsQ0FBQztBQUNMLENBQUMsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgdXRpbCBmcm9tICd1dGlsJztcbmltcG9ydCB7IG1vY2tDb25zb2xlLCByZXNldENvbnNvbGUsIGdldENvbnNvbGVTdGF0ZSB9IGZyb20gJy4uL21vY2stY29uc29sZSc7XG5cbmNvbnN0IHsgdGVzdCB9ID0gUVVuaXQ7XG5cblFVbml0Lm1vZHVsZSgnbW9ja0NvbnNvbGUnLCBmdW5jdGlvbigpIHtcbiAgdGVzdCgnbW9ja3MgdGhlIGNvbnNvbGUgd2hlbiBjYWxsZWQnLCBmdW5jdGlvbihhc3NlcnQpIHtcbiAgICBtb2NrQ29uc29sZSgpO1xuXG4gICAgYXNzZXJ0Lm9rKHV0aWwudHlwZXMuaXNQcm94eShjb25zb2xlKSk7XG5cbiAgICByZXNldENvbnNvbGUoKTtcbiAgfSk7XG5cbiAgdGVzdCgncmVzZXRzIHRoZSBjb25zb2xlIHdoZW4gcmVzZXRDb25zb2xlIGNhbGxlZCcsIGZ1bmN0aW9uKGFzc2VydCkge1xuICAgIG1vY2tDb25zb2xlKCk7XG5cbiAgICBhc3NlcnQub2sodXRpbC50eXBlcy5pc1Byb3h5KGNvbnNvbGUpKTtcblxuICAgIHJlc2V0Q29uc29sZSgpO1xuXG4gICAgYXNzZXJ0Lm5vdE9rKHV0aWwudHlwZXMuaXNQcm94eShjb25zb2xlKSk7XG4gIH0pO1xuXG4gIHRlc3QoJ3Jlc2V0cyB0aGUgY29uc29sZSB3aGVuIHJlc2V0Q29uc29sZSBjYWxsZWQgdmlhIGRlc3RydWN0b3InLCBmdW5jdGlvbihhc3NlcnQpIHtcbiAgICBsZXQgcmVzZXQgPSBtb2NrQ29uc29sZSgpO1xuXG4gICAgYXNzZXJ0Lm9rKHV0aWwudHlwZXMuaXNQcm94eShjb25zb2xlKSk7XG5cbiAgICByZXNldCgpO1xuXG4gICAgYXNzZXJ0Lm5vdE9rKHV0aWwudHlwZXMuaXNQcm94eShjb25zb2xlKSk7XG4gIH0pO1xuXG4gIHRlc3QoJ2NhcHR1cmVzIHN0YXRlIHdoZW4gY29uc29sZSBtZXRob2RzIGFyZSBjYWxsZWQnLCBmdW5jdGlvbihhc3NlcnQpIHtcbiAgICBsZXQgc3RhdGU7XG4gICAgbW9ja0NvbnNvbGUoKTtcbiAgICBkZWJ1Z2dlcjtcbiAgICBjb25zb2xlLmxvZygnVGhpcyBpcyBhIG1lc3NhZ2UnKTtcblxuICAgIHN0YXRlID0gZ2V0Q29uc29sZVN0YXRlKCk7XG5cbiAgICBhc3NlcnQuZXF1YWwoc3RhdGUuZ2V0U3RhdGUoJ2xvZycpLCAnVGhpcyBpcyBhIG1lc3NhZ2UnKTtcblxuICAgIHJlc2V0Q29uc29sZSgpO1xuICB9KTtcbn0pO1xuIl19