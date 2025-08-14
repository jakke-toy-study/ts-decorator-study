import { LogExecutionTime } from "../decorators/logging";

export class Action {
    @LogExecutionTime("안녕")
    run() {
        let sum = 0;
        for (let i = 0; i < 1_000_000; i++) {
            sum += i;
        }
        return sum;
    }
}
