import {Movement} from "../components/movement-enum";

export class Utils {

    // expected output: 0, 1, ..  max - 1
    static getRandomInt(max: number) {
        return Math.floor(Math.random() * max);
    }

    static getRandomMovement(): Movement {
        const rand = Utils.getRandomInt(4)
        switch (rand) {
            case 0: return Movement.UP
            case 1: return Movement.DOWN
            case 2: return Movement.LEFT
            case 3: return Movement.RIGHT
        }
        throw new Error("Unexpected random number: " + rand + ", should be [0, 1, 2, 3]")
    }

}