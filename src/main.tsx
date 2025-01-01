import React from "react";
import {createRoot} from 'react-dom/client'
import {MantineProvider} from "@mantine/core";
import '@mantine/core/styles.css';
import '@mantine/core/styles/global.css';
import App from "./App";

createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <MantineProvider>
            <App/>
        </MantineProvider>
    </React.StrictMode>,
)
