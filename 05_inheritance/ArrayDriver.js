"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Shape_1 = require("./Shape");
const Circle_1 = require("./Circle");
const Rectangle_1 = require("./Rectangle");
let myShape = new Shape_1.Shape(20, 30);
let myCircle = new Circle_1.Circle(10, 20, 4);
let myRectangle = new Rectangle_1.Rectangle(2, 3, 45, 65);
// declare an array of shapes, empty
let theShapes = [];
// This array only accepts Shape, not anything else. Like numbers, or strings
theShapes.push(myShape);
theShapes.push(myCircle);
theShapes.push(myRectangle);
for (let tempShape of theShapes) {
    console.log(tempShape.getInfo());
}
