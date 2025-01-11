import { App } from './App'
import {StrictMode} from "react";

export function Root() {
    return (
        <StrictMode>
            <App/>
        </StrictMode>
    )
}