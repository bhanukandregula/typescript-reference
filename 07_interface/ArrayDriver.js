"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CricketCoach_1 = require("./CricketCoach");
const GolfCoach_1 = require("./GolfCoach");
let myCricetCoach = new CricketCoach_1.CricketCoach();
let myGolfCoach = new GolfCoach_1.GolfCoach();
let theCaoches = [];
theCaoches.push(myCricetCoach);
theCaoches.push(myGolfCoach);
for (let tempCoaches of theCaoches) {
    console.log(tempCoaches.getDailyWorkout());
}
