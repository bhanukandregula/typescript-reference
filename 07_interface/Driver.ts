import { Coach } from "./Coach";
import { CricketCoach } from "./CricketCoach";
import { GolfCoach } from "./GolfCoach";

let myCricetCoach = new CricketCoach();
console.log(myCricetCoach.getDailyWorkout());

let myGolfCoach = new GolfCoach();
console.log(myGolfCoach.getDailyWorkout());