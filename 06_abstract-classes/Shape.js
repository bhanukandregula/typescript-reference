"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Shape = void 0;
class Shape {
    constructor(_x, _y) {
        this._x = _x;
        this._y = _y;
    }
    // Generate setters and Getters for _x
    get x() {
        return this._x;
    }
    set x(value) {
        this._x = value;
    }
    // Generate setters and Getters for _y
    get y() {
        return this._y;
    }
    set y(value) {
        this._y = value;
    }
    // In type script everything is Public by default
    getInfo() {
        return `x=${this._x}, y=${this._y}`;
    }
}
exports.Shape = Shape;
