"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
const path = require("path");
const recursiveReadSync = require("recursive-readdir-sync");
function getFileContents(filePath) {
    return fs.readFileSync(filePath, {
        encoding: 'utf-8',
    });
}
class FixtureCache {
    constructor(fixturePath) {
        this.fixtures = new Map();
        this.loadFixtures(fixturePath);
    }
    loadFixtures(fixturePath) {
        try {
            let files = recursiveReadSync(fixturePath);
            files.forEach((file) => {
                this.fixtures.set(path.basename(file, '.txt'), getFileContents(file));
            });
        }
        catch (e) {
            console.log(`Fixtures located in ${fixturePath} could not be loaded. Reason: ${e.message}`);
        }
    }
    matches(fixtureName, expectedContents) {
        if (!this.fixtures.has(fixtureName)) {
            console.log(`No fixture was found matching ${fixtureName}`);
            return false;
        }
        let actualContents = this.fixtures.get(fixtureName);
        return actualContents === expectedContents;
    }
}
exports.default = FixtureCache;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZml4dHVyZS1jYWNoZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9maXh0dXJlLWNhY2hlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEseUJBQXlCO0FBQ3pCLDZCQUE2QjtBQUM3Qiw0REFBNEQ7QUFFNUQsU0FBUyxlQUFlLENBQUMsUUFBZ0I7SUFDdkMsT0FBTyxFQUFFLENBQUMsWUFBWSxDQUFDLFFBQVEsRUFBRTtRQUMvQixRQUFRLEVBQUUsT0FBTztLQUNsQixDQUFDLENBQUM7QUFDTCxDQUFDO0FBRUQsTUFBcUIsWUFBWTtJQUcvQixZQUFZLFdBQW1CO1FBQzdCLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxHQUFHLEVBQWtCLENBQUM7UUFFMUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUNqQyxDQUFDO0lBRUQsWUFBWSxDQUFDLFdBQW1CO1FBQzlCLElBQUk7WUFDRixJQUFJLEtBQUssR0FBRyxpQkFBaUIsQ0FBQyxXQUFXLENBQUMsQ0FBQztZQUUzQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBWSxFQUFFLEVBQUU7Z0JBQzdCLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxFQUFFLGVBQWUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQ3hFLENBQUMsQ0FBQyxDQUFDO1NBQ0o7UUFBQyxPQUFPLENBQUMsRUFBRTtZQUNWLE9BQU8sQ0FBQyxHQUFHLENBQUMsdUJBQXVCLFdBQVcsaUNBQWlDLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDO1NBQzdGO0lBQ0gsQ0FBQztJQUVELE9BQU8sQ0FBQyxXQUFtQixFQUFFLGdCQUF3QjtRQUNuRCxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLEVBQUU7WUFDbkMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQ0FBaUMsV0FBVyxFQUFFLENBQUMsQ0FBQztZQUM1RCxPQUFPLEtBQUssQ0FBQztTQUNkO1FBRUQsSUFBSSxjQUFjLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLENBQUM7UUFFcEQsT0FBTyxjQUFjLEtBQUssZ0JBQWdCLENBQUM7SUFDN0MsQ0FBQztDQUNGO0FBL0JELCtCQStCQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIGZzIGZyb20gJ2ZzJztcbmltcG9ydCAqIGFzIHBhdGggZnJvbSAncGF0aCc7XG5pbXBvcnQgKiBhcyByZWN1cnNpdmVSZWFkU3luYyBmcm9tICdyZWN1cnNpdmUtcmVhZGRpci1zeW5jJztcblxuZnVuY3Rpb24gZ2V0RmlsZUNvbnRlbnRzKGZpbGVQYXRoOiBzdHJpbmcpOiBzdHJpbmcge1xuICByZXR1cm4gZnMucmVhZEZpbGVTeW5jKGZpbGVQYXRoLCB7XG4gICAgZW5jb2Rpbmc6ICd1dGYtOCcsXG4gIH0pO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGaXh0dXJlQ2FjaGUge1xuICBmaXh0dXJlczogTWFwPHN0cmluZywgc3RyaW5nPjtcblxuICBjb25zdHJ1Y3RvcihmaXh0dXJlUGF0aDogc3RyaW5nKSB7XG4gICAgdGhpcy5maXh0dXJlcyA9IG5ldyBNYXA8c3RyaW5nLCBzdHJpbmc+KCk7XG5cbiAgICB0aGlzLmxvYWRGaXh0dXJlcyhmaXh0dXJlUGF0aCk7XG4gIH1cblxuICBsb2FkRml4dHVyZXMoZml4dHVyZVBhdGg6IHN0cmluZykge1xuICAgIHRyeSB7XG4gICAgICBsZXQgZmlsZXMgPSByZWN1cnNpdmVSZWFkU3luYyhmaXh0dXJlUGF0aCk7XG5cbiAgICAgIGZpbGVzLmZvckVhY2goKGZpbGU6IHN0cmluZykgPT4ge1xuICAgICAgICB0aGlzLmZpeHR1cmVzLnNldChwYXRoLmJhc2VuYW1lKGZpbGUsICcudHh0JyksIGdldEZpbGVDb250ZW50cyhmaWxlKSk7XG4gICAgICB9KTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBjb25zb2xlLmxvZyhgRml4dHVyZXMgbG9jYXRlZCBpbiAke2ZpeHR1cmVQYXRofSBjb3VsZCBub3QgYmUgbG9hZGVkLiBSZWFzb246ICR7ZS5tZXNzYWdlfWApO1xuICAgIH1cbiAgfVxuXG4gIG1hdGNoZXMoZml4dHVyZU5hbWU6IHN0cmluZywgZXhwZWN0ZWRDb250ZW50czogc3RyaW5nKSB7XG4gICAgaWYgKCF0aGlzLmZpeHR1cmVzLmhhcyhmaXh0dXJlTmFtZSkpIHtcbiAgICAgIGNvbnNvbGUubG9nKGBObyBmaXh0dXJlIHdhcyBmb3VuZCBtYXRjaGluZyAke2ZpeHR1cmVOYW1lfWApO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGxldCBhY3R1YWxDb250ZW50cyA9IHRoaXMuZml4dHVyZXMuZ2V0KGZpeHR1cmVOYW1lKTtcblxuICAgIHJldHVybiBhY3R1YWxDb250ZW50cyA9PT0gZXhwZWN0ZWRDb250ZW50cztcbiAgfVxufVxuIl19