import { Coach } from "./Coach";

export class CricketCoach implements Coach {
    getDailyWorkout(): string {
        return "Do workout daily without miss";
    }
}