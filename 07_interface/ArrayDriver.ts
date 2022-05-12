import { Coach } from "./Coach";
import { CricketCoach } from "./CricketCoach";
import { GolfCoach } from "./GolfCoach";

let myCricetCoach = new CricketCoach();
let myGolfCoach = new GolfCoach();

let theCaoches: Coach[] = [];

theCaoches.push(myCricetCoach);
theCaoches.push(myGolfCoach);

for(let tempCoaches of theCaoches){
    console.log(tempCoaches.getDailyWorkout());
}