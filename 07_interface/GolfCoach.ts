import { Coach } from "./Coach";

export class GolfCoach implements Coach {
    getDailyWorkout(): string {
        return "Do play goaf everyday";
    }
}