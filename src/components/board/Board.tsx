import React, { useEffect, useRef } from 'react';
import {Cell} from "./Cell";
import {Position} from "../utils/position";

interface CanvasProps {
    width: number;
    height: number;
    endPointSize: number;
    per: number;
    cellSize: number;
    isStarted: boolean;
    nbCells: number
}

const Board = ({ width, height, endPointSize, isStarted, nbCells, cellSize, per }: CanvasProps) => {

    const canvasRef = useRef<HTMLCanvasElement>(null);

    const endPointPosition = new Position((width / 2 - endPointSize / 2), (height / 10 - endPointSize / 2))

    function renderBoard(context:  CanvasRenderingContext2D) {
        //Init canvas
        context.fillStyle = "gray";
        context.fillRect(0, 0, width, height);
        //Place end square
        context.fillStyle = "green";
        context.fillRect(endPointPosition.x, endPointPosition.y, endPointSize, endPointSize)
        //Place start square
        context.fillStyle = "blue";
        context.fillRect((width / 2 - endPointSize / 4), ((height - height / 10) - endPointSize / 4), endPointSize / 2, endPointSize / 2)
        context.fillStyle = "black";
    }

    const sleep = (milliseconds: number) => {
        return new Promise(resolve => setTimeout(resolve, milliseconds))
    }

    useEffect(() => {
        if (!canvasRef.current) {
            return;
        }
        if (!isStarted) return
        const canvas: HTMLCanvasElement = canvasRef.current;
        const context = canvas.getContext('2d');
        if (!context) {
            return;
        }

        const baseX = width / 2 - cellSize / 2
        const baseY = height - height / 10 - cellSize / 2

        function initCells(): Cell[] {
            let cells = []
            for (let i = 0; i < nbCells; i++) {
                cells.push(new Cell(new Position(baseX, baseY), cellSize))
            }
            return cells
        }

        //Init cells
        const cells = initCells()

        //Print cells
        context.fillStyle = "black"
        cells.forEach(cell => context.fillRect(cell.getPos().x, cell.getPos().y, cellSize, cellSize))

        async function iteration() {
            //Start iteration
            const running = true
            const maxIt = 99999
            let numberOfCellAtEnd = 0

            if (!context) {
                return;
            }

            while (running && numberOfCellAtEnd < per) {
                renderBoard(context)
                cells.forEach(cell => {
                    if(cell.updatePos(endPointPosition)) {
                        console.log("number: " + (numberOfCellAtEnd + 1))
                        numberOfCellAtEnd++
                    }
                    context.fillRect(cell.getPos().x, cell.getPos().y, cell.getSize(), cell.getSize())
                })
                await sleep(1)
            }
        }

        iteration()

    }, [isStarted])

    useEffect(() => {
        if (!canvasRef.current) {
            return;
        }
        const canvas: HTMLCanvasElement = canvasRef.current;
        const context = canvas.getContext('2d');
        if (!context) {
            return;
        }
        renderBoard(context)
    }, []);

    return <canvas ref={canvasRef} height={height} width={width} />;
};

Board.defaultProps = {
    width: window.innerWidth,
    height: window.innerHeight,
};

export default Board;