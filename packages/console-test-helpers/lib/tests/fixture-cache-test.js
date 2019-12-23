"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fixturify_fixtures_1 = require("./helpers/fixturify-fixtures");
const fixture_cache_1 = require("../fixture-cache");
const { test } = QUnit;
let fixturifyFixtures;
QUnit.module('fixture-cache', function (hooks) {
    hooks.before(function () {
        fixturifyFixtures = new fixturify_fixtures_1.default();
    });
    hooks.after(function () {
        fixturifyFixtures.dispose();
    });
    test('fixture cache loads fixtures', function (assert) {
        fixturifyFixtures.create({
            'fixture1.txt': 'I am the first fixture',
            'fixture2.txt': 'I am the second fixture',
        });
        let fixtureCache = new fixture_cache_1.default(fixturifyFixtures.baseDir);
        assert.ok(fixtureCache.matches('fixture1', 'I am the first fixture'));
        assert.equal(fixtureCache.fixtures.size, 2);
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZml4dHVyZS1jYWNoZS10ZXN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3Rlc3RzL2ZpeHR1cmUtY2FjaGUtdGVzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHFFQUE2RDtBQUM3RCxvREFBNEM7QUFFNUMsTUFBTSxFQUFFLElBQUksRUFBRSxHQUFHLEtBQUssQ0FBQztBQUV2QixJQUFJLGlCQUFvQyxDQUFDO0FBRXpDLEtBQUssQ0FBQyxNQUFNLENBQUMsZUFBZSxFQUFFLFVBQVMsS0FBSztJQUMxQyxLQUFLLENBQUMsTUFBTSxDQUFDO1FBQ1gsaUJBQWlCLEdBQUcsSUFBSSw0QkFBaUIsRUFBRSxDQUFDO0lBQzlDLENBQUMsQ0FBQyxDQUFDO0lBRUgsS0FBSyxDQUFDLEtBQUssQ0FBQztRQUNWLGlCQUFpQixDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQzlCLENBQUMsQ0FBQyxDQUFDO0lBRUgsSUFBSSxDQUFDLDhCQUE4QixFQUFFLFVBQVMsTUFBTTtRQUNsRCxpQkFBaUIsQ0FBQyxNQUFNLENBQUM7WUFDdkIsY0FBYyxFQUFFLHdCQUF3QjtZQUN4QyxjQUFjLEVBQUUseUJBQXlCO1NBQzFDLENBQUMsQ0FBQztRQUVILElBQUksWUFBWSxHQUFHLElBQUksdUJBQVksQ0FBQyxpQkFBaUIsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUUvRCxNQUFNLENBQUMsRUFBRSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsVUFBVSxFQUFFLHdCQUF3QixDQUFDLENBQUMsQ0FBQztRQUN0RSxNQUFNLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQzlDLENBQUMsQ0FBQyxDQUFDO0FBQ0wsQ0FBQyxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgRml4dHVyaWZ5Rml4dHVyZXMgZnJvbSAnLi9oZWxwZXJzL2ZpeHR1cmlmeS1maXh0dXJlcyc7XG5pbXBvcnQgRml4dHVyZUNhY2hlIGZyb20gJy4uL2ZpeHR1cmUtY2FjaGUnO1xuXG5jb25zdCB7IHRlc3QgfSA9IFFVbml0O1xuXG5sZXQgZml4dHVyaWZ5Rml4dHVyZXM6IEZpeHR1cmlmeUZpeHR1cmVzO1xuXG5RVW5pdC5tb2R1bGUoJ2ZpeHR1cmUtY2FjaGUnLCBmdW5jdGlvbihob29rcykge1xuICBob29rcy5iZWZvcmUoZnVuY3Rpb24oKSB7XG4gICAgZml4dHVyaWZ5Rml4dHVyZXMgPSBuZXcgRml4dHVyaWZ5Rml4dHVyZXMoKTtcbiAgfSk7XG5cbiAgaG9va3MuYWZ0ZXIoZnVuY3Rpb24oKSB7XG4gICAgZml4dHVyaWZ5Rml4dHVyZXMuZGlzcG9zZSgpO1xuICB9KTtcblxuICB0ZXN0KCdmaXh0dXJlIGNhY2hlIGxvYWRzIGZpeHR1cmVzJywgZnVuY3Rpb24oYXNzZXJ0KSB7XG4gICAgZml4dHVyaWZ5Rml4dHVyZXMuY3JlYXRlKHtcbiAgICAgICdmaXh0dXJlMS50eHQnOiAnSSBhbSB0aGUgZmlyc3QgZml4dHVyZScsXG4gICAgICAnZml4dHVyZTIudHh0JzogJ0kgYW0gdGhlIHNlY29uZCBmaXh0dXJlJyxcbiAgICB9KTtcblxuICAgIGxldCBmaXh0dXJlQ2FjaGUgPSBuZXcgRml4dHVyZUNhY2hlKGZpeHR1cmlmeUZpeHR1cmVzLmJhc2VEaXIpO1xuXG4gICAgYXNzZXJ0Lm9rKGZpeHR1cmVDYWNoZS5tYXRjaGVzKCdmaXh0dXJlMScsICdJIGFtIHRoZSBmaXJzdCBmaXh0dXJlJykpO1xuICAgIGFzc2VydC5lcXVhbChmaXh0dXJlQ2FjaGUuZml4dHVyZXMuc2l6ZSwgMik7XG4gIH0pO1xufSk7XG4iXX0=