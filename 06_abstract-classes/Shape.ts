export abstract class Shape {

    constructor(private _x: number, private _y: number){

    }

    // Generate setters and Getters for _x
    public get x(): number {
        return this._x;
    }

    public set x(value: number) {
        this._x = value;
    }
    

    // Generate setters and Getters for _y
    public get y(): number {
        return this._y;
    }

    public set y(value: number) {
        this._y = value;
    }

    // In type script everything is Public by default
    getInfo(): string {
        return `x=${this._x}, y=${this._y}`;
    }

    // Since this is a abstract method here, we don't impelement here.
    abstract calculateArea(): number;

    
}