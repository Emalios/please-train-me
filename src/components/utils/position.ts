import {Movement} from "../movement-enum";

export class Position {
    public readonly x: number;
    public readonly y: number;

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }

    public updatePos(movement: Movement): Position {
        switch (movement) {
            case Movement.UP:
                return new Position(this.x, this.y + 2)
            case Movement.DOWN:
                return new Position(this.x, this.y - 2)
            case Movement.LEFT:
                return new Position(this.x - 2, this.y)
            case Movement.RIGHT:
                return new Position(this.x + 2, this.y)
        }
    }

    public static isPosInPos(
        x1: number, y1: number, width1: number, height1: number,
        x2: number, y2: number, width2: number, height2: number
    ): boolean {
        //cbullshit: to change
        if(x1 > x2 && x1 < x2 + width2 && y1 > y2 && y1 < y2 + height2) return true
        return false
    }

}