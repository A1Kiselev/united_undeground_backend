"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TestDataObject = void 0;
class TestDataObject {
    constructor(name, age, status) {
        this._age = age;
        this._name = name;
        this._status = status;
    }
    get age() {
        return this._age;
    }
    get name() {
        return this._name;
    }
    get status() {
        return this._status;
    }
}
exports.TestDataObject = TestDataObject;
