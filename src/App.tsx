import React from 'react';
import './App.css';
import {MantineProvider} from "@mantine/core";
import Game from "./components/Game";

function App() {
    return (
        <MantineProvider
            theme={{
                // Override any other properties from default theme
                spacing: { xs: 15, sm: 20, md: 25, lg: 30, xl: 40 },
            }}
        >
            <Game></Game>
        </MantineProvider>
    );
}

export default App;
