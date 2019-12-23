"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
const fixturify = require("fixturify");
const tmp_1 = require("tmp");
tmp_1.setGracefulCleanup();
class FixturifyFixtures {
    constructor() {
        this._tmp = tmp_1.dirSync({ unsafeCleanup: true });
        this._baseDir = fs.realpathSync(this._tmp.name);
    }
    get baseDir() {
        return this._baseDir;
    }
    create(fixtures) {
        fixturify.writeSync(this._baseDir, fixtures);
    }
    dispose() {
        if (this._tmp) {
            this._tmp.removeCallback();
        }
    }
}
exports.default = FixturifyFixtures;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZml4dHVyaWZ5LWZpeHR1cmVzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3Rlc3RzL2hlbHBlcnMvZml4dHVyaWZ5LWZpeHR1cmVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEseUJBQXlCO0FBQ3pCLHVDQUF1QztBQUN2Qyw2QkFBNkQ7QUFFN0Qsd0JBQWtCLEVBQUUsQ0FBQztBQUVyQixNQUFxQixpQkFBaUI7SUFJcEM7UUFDRSxJQUFJLENBQUMsSUFBSSxHQUFHLGFBQU8sQ0FBQyxFQUFFLGFBQWEsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO1FBQzdDLElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2xELENBQUM7SUFFRCxJQUFJLE9BQU87UUFDVCxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDdkIsQ0FBQztJQUVELE1BQU0sQ0FBQyxRQUEyQjtRQUNoQyxTQUFTLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDLENBQUM7SUFDL0MsQ0FBQztJQUVELE9BQU87UUFDTCxJQUFJLElBQUksQ0FBQyxJQUFJLEVBQUU7WUFDYixJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO1NBQzVCO0lBQ0gsQ0FBQztDQUNGO0FBdEJELG9DQXNCQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIGZzIGZyb20gJ2ZzJztcbmltcG9ydCAqIGFzIGZpeHR1cmlmeSBmcm9tICdmaXh0dXJpZnknO1xuaW1wb3J0IHsgZGlyU3luYywgc2V0R3JhY2VmdWxDbGVhbnVwLCBEaXJSZXN1bHQgfSBmcm9tICd0bXAnO1xuXG5zZXRHcmFjZWZ1bENsZWFudXAoKTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRml4dHVyaWZ5Rml4dHVyZXMge1xuICBwcml2YXRlIF90bXA6IERpclJlc3VsdDtcbiAgcHJpdmF0ZSBfYmFzZURpcjogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuX3RtcCA9IGRpclN5bmMoeyB1bnNhZmVDbGVhbnVwOiB0cnVlIH0pO1xuICAgIHRoaXMuX2Jhc2VEaXIgPSBmcy5yZWFscGF0aFN5bmModGhpcy5fdG1wLm5hbWUpO1xuICB9XG5cbiAgZ2V0IGJhc2VEaXIoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fYmFzZURpcjtcbiAgfVxuXG4gIGNyZWF0ZShmaXh0dXJlczogZml4dHVyaWZ5LkRpckpTT04pIHtcbiAgICBmaXh0dXJpZnkud3JpdGVTeW5jKHRoaXMuX2Jhc2VEaXIsIGZpeHR1cmVzKTtcbiAgfVxuXG4gIGRpc3Bvc2UoKSB7XG4gICAgaWYgKHRoaXMuX3RtcCkge1xuICAgICAgdGhpcy5fdG1wLnJlbW92ZUNhbGxiYWNrKCk7XG4gICAgfVxuICB9XG59XG4iXX0=