import {Movement} from "../movement-enum";
import {Utils} from "../../utils/utils";
import {Position} from "../utils/position";
import {Entity} from "./Entity";

export class Cell extends Entity {

    public readonly movements: Movement[]
    private nbMovements: number
    private isAtEnd: boolean

    constructor(pos: Position, size: number, movements?: Movement[]) {
        super(pos, size)
        this.isAtEnd = false
        this.nbMovements = 0
        function randomMovements(number: number) {
            let movements = []
            for (let i = 0; i < number; i++) {
                movements.push(Utils.getRandomMovement())
            }
            return movements;
        }

        if(!movements) {
            this.movements = randomMovements(99999)
        }
        else this.movements = movements
    }

    public updatePos(endPointPosition: Position): boolean {
        if(this.isAtEnd) return false
        this.pos = this.pos.updatePos(this.movements[this.nbMovements++])
        if(Position.isPosInPos(this.pos.x, this.pos.y, 4, 4, endPointPosition.x, endPointPosition.y, 40, 40)){
            //only return true here to avoid repetition of returning true
            this.isAtEnd = true
            return true
        }
        return false
    }
}