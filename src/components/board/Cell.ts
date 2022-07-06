import {Movement} from "../movement-enum";
import {Utils} from "../../utils/utils";
import {Position} from "../utils/position";

export class Cell {

    public readonly movements: Movement[]
    private nbMovements: number
    private pos: Position
    private isAtEnd: boolean

    constructor(pos: Position, movements?: Movement[]) {
        this.pos = pos
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

    public getPos(): Position {
        return this.pos
    }

    public updatePos(endPointPosition: Position) {
        if(this.isAtEnd) return
        this.pos = this.pos.updatePos(this.movements[this.nbMovements++])
        if(Position.isPosInPos(this.pos.x, this.pos.y, 4, 4, endPointPosition.x, endPointPosition.y, 40, 40)) this.isAtEnd = true
    }
}