import React, {useState} from 'react';
import Board from "./board/Board";
import Control from "./control/Control";

const Game = () => {

    const [isStarted, setStarted] = useState<boolean>(false);

    return (
        <div
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column"
            }}
        >
            <Board
                width={500}
                height={700}
                endPointSize={40}
                isStarted={isStarted}
                nbCells={1000}
                cellSize={4}
                per={10}
            />
            <Control setStarted={setStarted}></Control>
        </div>
    )
};


export default Game;
