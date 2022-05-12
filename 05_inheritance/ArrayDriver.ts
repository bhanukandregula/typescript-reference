import { Shape } from './Shape';
import { Circle } from './Circle';
import { Rectangle } from './Rectangle';

let myShape = new Shape(20,30);
let myCircle = new Circle(10,20,4);
let myRectangle = new Rectangle(2,3,45,65);

// declare an array of shapes, empty
let theShapes: Shape[] = [];

// This array only accepts Shape, not anything else. Like numbers, or strings
theShapes.push(myShape);
theShapes.push(myCircle);
theShapes.push(myRectangle);

for(let tempShape of theShapes){
    console.log(tempShape.getInfo());
}