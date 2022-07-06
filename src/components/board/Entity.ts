import {Movement} from "../movement-enum";
import {Utils} from "../../utils/utils";
import {Position} from "../utils/position";

export abstract class Entity {

    protected pos: Position
    protected readonly size: number

    constructor(pos: Position, size: number) {
        this.pos = pos
        this.size = size
    }

    public getPos(): Position {
        return this.pos
    }

    public getSize(): number {
        return this.size
    }

    abstract updatePos(endPointPosition: Position) : void;
}