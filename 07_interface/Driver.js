"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CricketCoach_1 = require("./CricketCoach");
const GolfCoach_1 = require("./GolfCoach");
let myCricetCoach = new CricketCoach_1.CricketCoach();
console.log(myCricetCoach.getDailyWorkout());
let myGolfCoach = new GolfCoach_1.GolfCoach();
console.log(myGolfCoach.getDailyWorkout());
